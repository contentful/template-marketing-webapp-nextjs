import { createClient } from 'contentful-management';

import { createEmptyEnvironment } from './createEmptyEnvironment';
import { createSpace } from './createSpace';
import { deployToVercel } from './deployToVercel';
import { importContent } from './importContent';
import { importContentModel } from './importContentModel';
import { inviteToSpace } from './inviteToSpace';
import { setPreviewUrls } from './setPreviewUrls';
import { updateTranslatorRole } from './updateTranslatorRole';

import catchify from 'catchify';

interface InitProps {
  organizationId: string;
  cmaToken: string;
  email: string;
  spaceName: string;
  spaceId: string;
  role: string;
  vercelDeployToken: string;
}

export const init = async (input: InitProps) => {
  const {
    organizationId,
    cmaToken,
    email,
    spaceName,
    spaceId: inputSpaceId,
    role = 'Administrator',
    vercelDeployToken,
  } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const startTime = new Date();

  // Check the validity of the CMA token
  const [currentUserError] = await catchify(client.getCurrentUser());

  if (currentUserError) {
    console.error(currentUserError);

    if (currentUserError.name === 'AccessTokenInvalid') {
      return {
        state: 'error',
        error:
          'The token you have provided could not be found, or is invalid. Double check that you have provided a correct access token.',
      };
    }

    return {
      state: 'error',
      error: `There was an issue with calling the Contentful management API: ${currentUserError.name}`,
    };
  }

  // Create a Contentful space
  const createSpaceStartTime = new Date();

  if (inputSpaceId === undefined) {
    console.info('Creating a Contentful space...');
  } else {
    console.info('Reusing existing space...');
  }

  const createSpaceResult = await createSpace({
    organizationId,
    cmaToken,
    spaceName,
    email,
    spaceId: inputSpaceId,
  });

  if (createSpaceResult.state === 'error') {
    return {
      state: 'error',
      error: createSpaceResult.error,
    };
  }

  const {
    spaceId,
    spaceName: createdSpaceName,
    deliveryApiKey,
    previewApiKey,
  } = createSpaceResult.payload;

  const cleanupSpaceOnError = async () => {
    if (inputSpaceId !== undefined) {
      // We never want to remove the space that is being updated with a new
      // frontend
    }

    const [spaceError, space] = await catchify(client.getSpace(spaceId));

    if (spaceError !== null) {
      return;
    }

    await catchify(space.delete());
  };

  const createSpaceEndTime = new Date();

  if (inputSpaceId === undefined) {
    console.info(
      `Space created. New space id: ${spaceId}. Done in ${Math.round(
        (createSpaceEndTime.getTime() - createSpaceStartTime.getTime()) / 1000,
      )}s`,
    );
  } else {
    console.info(
      `Space reused. Existing space id: ${spaceId}. Done in ${Math.round(
        (createSpaceEndTime.getTime() - createSpaceStartTime.getTime()) / 1000,
      )}s`,
    );
  }

  // Import content model
  if (inputSpaceId === undefined) {
    const importContentModelStartTime = new Date();
    console.info('Importing the content model...');

    const importContentModelResult = await importContentModel({
      spaceId,
      cmaToken,
    });

    if (importContentModelResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: importContentModelResult.error,
      };
    }

    const importContentModelEndTime = new Date();

    console.info(
      `Content model imported. Done in ${Math.round(
        (importContentModelEndTime.getTime() - importContentModelStartTime.getTime()) / 1000,
      )}s`,
    );
  } else {
    console.info('Skipping content model import - reusing existing space');
  }

  // Create an empty environment
  if (inputSpaceId === undefined) {
    const createEmptyEnvironmentStartTime = new Date();
    console.info('Creating empty environment...');

    const createEmptyEnvironmentResult = await createEmptyEnvironment({
      spaceId,
      cmaToken,
    });

    if (createEmptyEnvironmentResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: createEmptyEnvironmentResult.error,
      };
    }

    const createEmptyEnvironmentEndTime = new Date();

    console.info(
      `Empty environment created. Done in ${Math.round(
        (createEmptyEnvironmentEndTime.getTime() - createEmptyEnvironmentStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info('Skipping empty environment creation - reusing existing space');
  }

  // Import content
  if (inputSpaceId === undefined) {
    const importContentStartTime = new Date();
    console.info('Importing the content...');

    const importContentResult = await importContent({
      spaceId,
      cmaToken,
    });

    if (importContentResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: importContentResult.error,
      };
    }

    const importContentEndTime = new Date();

    console.info(
      `Content imported. Done in ${Math.round(
        (importContentEndTime.getTime() - importContentStartTime.getTime()) / 1000,
      )}s`,
    );
  } else {
    console.info('Skipping content import - reusing existing space');
  }

  // Deploy to Vercel
  const deployToVercelStartTime = new Date();
  console.info('Deploying to Vercel...');

  const deployToVercelResult = await deployToVercel({
    spaceId,
    cmaToken,
    deliveryApiKey,
    previewApiKey,
    vercelDeployToken,
  });

  if (deployToVercelResult.state === 'error') {
    await cleanupSpaceOnError();
    return {
      state: 'error',
      error: deployToVercelResult.error,
    };
  }

  const deploymentUrl = deployToVercelResult.payload?.deploymentUrl;

  const deployToVercelEndTime = new Date();

  console.info(
    `Deployed to Vercel. Done in ${Math.round(
      (deployToVercelEndTime.getTime() - deployToVercelStartTime.getTime()) / 1000,
    )}s`,
  );

  // Set up Preview URLs
  const setPreviewUrlsStartTime = new Date();
  console.info('Setting up preview urls...');

  const setPreviewUrlsResult = await setPreviewUrls({
    spaceId,
    cmaToken,
    deploymentUrl,
  });

  if (setPreviewUrlsResult.state === 'error') {
    await cleanupSpaceOnError();
    return {
      state: 'error',
      error: setPreviewUrlsResult.error,
    };
  }

  const setPreviewUrlsEndTime = new Date();

  console.info(
    `Preview urls set. Done in ${Math.round(
      (setPreviewUrlsEndTime.getTime() - setPreviewUrlsStartTime.getTime()) / 1000,
    )}s`,
  );

  // Invite a user to space (or don't if no email is passed)
  let contentfulUrl = `https://app.contentful.com/spaces/${spaceId}`;

  if (inputSpaceId === undefined) {
    const inviteToSpaceStartTime = new Date();
    console.info('Inviting to space...');

    const inviteToSpaceResult = await inviteToSpace({
      spaceId,
      organizationId,
      cmaToken,
      email,
      role,
    });

    if (inviteToSpaceResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: inviteToSpaceResult.error,
      };
    }

    if (inviteToSpaceResult?.payload?.sys.invitationUrl) {
      contentfulUrl = inviteToSpaceResult.payload.sys.invitationUrl;
    }

    const inviteToSpaceEndTime = new Date();

    console.info(
      `Invited to space. Done in ${Math.round(
        (inviteToSpaceEndTime.getTime() - inviteToSpaceStartTime.getTime()) / 1000,
      )}s`,
    );
  } else {
    console.info('Skipping invite to space - reusing existing space');
  }

  if (inputSpaceId === undefined) {
    const updateTranslatorRoleStartTime = new Date();
    console.info('Updating translator role...');

    const updateTranslatorRoleResult = await updateTranslatorRole({
      spaceId,
      cmaToken,
    });

    if (updateTranslatorRoleResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: updateTranslatorRoleResult.error,
      };
    }

    const updateTranslatorRoleEndTime = new Date();

    console.info(
      `Translator role updated. Done in ${Math.round(
        (updateTranslatorRoleEndTime.getTime() - updateTranslatorRoleStartTime.getTime()) / 1000,
      )}s`,
    );
  } else {
    console.info('Skipping translator role update - reusing existing space');
  }

  const endTime = new Date();

  console.info(
    `Deployment succeeded. Done in ${Math.round(
      (endTime.getTime() - startTime.getTime()) / 1000,
    )}s`,
  );

  console.table({
    Frontend: `https://${deploymentUrl}/en`,
    'Contentful App': contentfulUrl,
  });

  return {
    state: 'success',
    payload: {
      frontend: `https://${deploymentUrl}/en`,
      contentful: contentfulUrl,
      spaceName: createdSpaceName,
    },
  };
};
