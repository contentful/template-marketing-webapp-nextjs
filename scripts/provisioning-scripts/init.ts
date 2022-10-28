import { createClient } from 'contentful-management';

import { stepCreateSpaceEmptyEnvironment } from './createEmptyEnvironment';
import { createSpace } from './createSpace';
import { stepImportContent } from './importContent';
import { stepImportContentModel } from './importContentModel';

import catchify from 'catchify';

interface InitProps {
  organizationId: string;
  cmaToken: string;
  role: string;
  vercelDeployToken?: string;
  email?: string;
  spaceName?: string;
  spaceId?: string;
}

export const init = async ({
  organizationId,
  cmaToken,
  email,
  spaceName,
  spaceId: argsProvidedSpaceId,
  role = 'Administrator',
  vercelDeployToken,
}: InitProps) => {
  const client = createClient({
    accessToken: cmaToken,
  });

  const startTime = new Date();

  /**
   * Check the validity of the CMA token
   */
  const [currentUserError] = await catchify(client.getCurrentUser());

  if (currentUserError) {
    console.error(currentUserError);

    if (currentUserError.name === 'AccessTokenInvalid') {
      throw new Error(
        'The token you have provided could not be found, or is invalid. Double check that you have provided a correct access token.',
      );
    }

    throw new Error(
      `There was an issue with calling the Contentful management API: ${currentUserError.name}`,
    );
  }

  try {
    /**
     * Reuse an existing Contentful space, or create a new one
     */
    if (!argsProvidedSpaceId) {
      console.info('Creating a Contentful space...');
    } else {
      console.info('Reusing existing space...');
    }

    const {
      spaceId,
      spaceName: createdSpaceName,
      deliveryApiKey,
      previewApiKey,
    } = await createSpace({
      organizationId,
      cmaToken,
      spaceName,
      email,
      spaceId: argsProvidedSpaceId,
    });

    if (!argsProvidedSpaceId) {
      await stepImportContentModel({ spaceId, cmaToken });
      await stepCreateSpaceEmptyEnvironment({ spaceId, cmaToken });
      await stepImportContent({ spaceId, cmaToken });
    }

    let contentfulUrl = `https://app.contentful.com/spaces/${spaceId}`;

    /**
     * Finish up provisioning and report to user
     */
    const endTime = new Date();

    console.info(
      `Deployment succeeded. Done in ${Math.round(
        (endTime.getTime() - startTime.getTime()) / 1000,
      )}s`,
    );

    console.table({
      'Contentful App': contentfulUrl,
      spaceName: createdSpaceName,
    });

    return {
      contentful: contentfulUrl,
      spaceName: createdSpaceName,
    };
  } catch (e: unknown) {
    throw e;
  }
};
