const { createClient } = require('contentful-management');
const catchify = require('catchify');

const createSpace = require('./createSpace');
const importContentModel = require('./importContentModel');
const createEmptyEnvironment = require('./createEmptyEnvironment');
const importContent = require('./importContent');
const deployToVercel = require('./deployToVercel');
const setPreviewUrls = require('./setPreviewUrls');
const createBackupEnvironment = require('./createBackupEnvironment');
const createPartialBackupEnvironment = require('./createPartialBackupEnvironment');
const inviteToSpace = require('./inviteToSpace');
const logToZapier = require('./logToZapier');
const installTypeformApp = require('./installTypeformApp');
const installCloudinaryApp = require('./installCloudinaryApp');
const installNinetailedApp = require('./installNinetailedApp');
const updateTranslatorRole = require('./updateTranslatorRole');

const init = async (input) => {
  const {
    organizationId,
    cmaToken,
    email,
    spaceName,
    spaceId: inputSpaceId,
    duration = 12,
    role = 'Administrator',
    legalSpaceId,
    legalSpaceToken,
    vercelDeployToken,
    ninetailedAPIKey,
    source = 'script',
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
        (importContentModelEndTime.getTime() -
          importContentModelStartTime.getTime()) /
          1000,
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
        (createEmptyEnvironmentEndTime.getTime() -
          createEmptyEnvironmentStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info(
      'Skipping empty environment creation - reusing existing space',
    );
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
        (importContentEndTime.getTime() - importContentStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info('Skipping content import - reusing existing space');
  }

  // Create a partial backup environment
  if (inputSpaceId === undefined) {
    const createPartialBackupEnvironmentStartTime = new Date();
    console.info('Creating partial backup environment...');

    const createPartialBackupEnvironmentResult =
      await createPartialBackupEnvironment({
        spaceId,
        cmaToken,
      });

    if (createPartialBackupEnvironmentResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: createPartialBackupEnvironmentResult.error,
      };
    }

    const createPartialBackupEnvironmentEndTime = new Date();

    console.info(
      `Partial backup environment created. Done in ${Math.round(
        (createPartialBackupEnvironmentEndTime.getTime() -
          createPartialBackupEnvironmentStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info(
      'Skipping partial backup environment creation - reusing existing space',
    );
  }

  // Install the Typeform app
  if (inputSpaceId === undefined) {
    const installTypeformAppStartTime = new Date();
    console.info('Installing the Typeform app...');

    const installTypeformAppResult = await installTypeformApp({
      spaceId,
      cmaToken,
    });

    if (installTypeformAppResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: installTypeformAppResult.error,
      };
    }

    const installTypeformAppEndTime = new Date();

    console.info(
      `Typeform app installed. Done in ${Math.round(
        (installTypeformAppEndTime.getTime() -
          installTypeformAppStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info('Skipping Typeform app installation - reusing existing space');
  }

  // Install the Cloudinary app
  if (inputSpaceId === undefined) {
    const installCloudinaryAppStartTime = new Date();
    console.info('Installing the Cloudinary app...');

    const installCloudinaryAppResult = await installCloudinaryApp({
      spaceId,
      cmaToken,
    });

    if (installCloudinaryAppResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: installCloudinaryAppResult.error,
      };
    }

    const installCloudinaryAppEndTime = new Date();

    console.info(
      `Cloudinary app installed. Done in ${Math.round(
        (installCloudinaryAppEndTime.getTime() -
          installCloudinaryAppStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info(
      'Skipping Cloudinary app installation - reusing existing space',
    );
  }

  // Install the Ninetailed app
  if (inputSpaceId === undefined) {
    const installNinetailedAppStartTime = new Date();
    console.info('Installing the Ninetailed app...');

    const installNinetailedAppResult = await installNinetailedApp({
      spaceId,
      cmaToken,
      spaceName: createdSpaceName,
      organizationId,
    });

    if (installNinetailedAppResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: installNinetailedAppResult.error,
      };
    }

    const installNinetailedAppEndTime = new Date();

    console.info(
      `Ninetailed app installed. Done in ${Math.round(
        (installNinetailedAppEndTime.getTime() -
          installNinetailedAppStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info(
      'Skipping Ninetailed app installation - reusing existing space',
    );
  }

  // Create a backup environment
  if (inputSpaceId === undefined) {
    const createBackupEnvironmentStartTime = new Date();
    console.info('Creating backup environment...');

    const createBackupEnvironmentResult = await createBackupEnvironment({
      spaceId,
      cmaToken,
    });

    if (createBackupEnvironmentResult.state === 'error') {
      await cleanupSpaceOnError();
      return {
        state: 'error',
        error: createBackupEnvironmentResult.error,
      };
    }

    const createBackupEnvironmentEndTime = new Date();

    console.info(
      `Backup environment created. Done in ${Math.round(
        (createBackupEnvironmentEndTime.getTime() -
          createBackupEnvironmentStartTime.getTime()) /
          1000,
      )}s`,
    );
  } else {
    console.info(
      'Skipping backup environment creation - reusing existing space',
    );
  }

  // Deploy to Vercel
  const deployToVercelStartTime = new Date();
  console.info('Deploying to Vercel...');

  const deployToVercelResult = await deployToVercel({
    spaceId,
    cmaToken,
    deliveryApiKey,
    previewApiKey,
    legalSpaceId,
    legalSpaceToken,
    vercelDeployToken,
    ninetailedAPIKey,
  });

  if (deployToVercelResult.state === 'error') {
    await cleanupSpaceOnError();
    return {
      state: 'error',
      error: deployToVercelResult.error,
    };
  }

  const { deploymentUrl } = deployToVercelResult.payload;

  const deployToVercelEndTime = new Date();

  console.info(
    `Deployed to Vercel. Done in ${Math.round(
      (deployToVercelEndTime.getTime() - deployToVercelStartTime.getTime()) /
        1000,
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
      (setPreviewUrlsEndTime.getTime() - setPreviewUrlsStartTime.getTime()) /
        1000,
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

    if (inviteToSpaceResult?.meta?.invitationUrl) {
      contentfulUrl = inviteToSpaceResult.meta.invitationUrl;
    }

    const inviteToSpaceEndTime = new Date();

    console.info(
      `Invited to space. Done in ${Math.round(
        (inviteToSpaceEndTime.getTime() - inviteToSpaceStartTime.getTime()) /
          1000,
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
        (updateTranslatorRoleEndTime.getTime() -
          updateTranslatorRoleStartTime.getTime()) /
          1000,
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

  if (inputSpaceId === undefined) {
    await catchify(
      logToZapier({
        spaceId,
        spaceName: createdSpaceName,
        duration,
        organizationId,
        cmaToken,
        deploymentUrl,
        email,
        time: (endTime.getTime() - startTime.getTime()) / 1000,
        source,
        role,
      }),
    );
  }

  return {
    state: 'success',
    meta: {
      frontend: `https://${deploymentUrl}/en`,
      contentful: contentfulUrl,
      spaceName: createdSpaceName,
    },
  };
};

module.exports = init;
