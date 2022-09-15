const path = require('path');
const { createDeployment } = require('@vercel/client');

const deployToVercel = async (input) => {
  const {
    spaceId,
    cmaToken,
    deliveryApiKey,
    previewApiKey,
    legalSpaceId,
    legalSpaceToken,
    vercelDeployToken,
    ninetailedAPIKey,
  } = input;

  let deployment;

  for await (const event of createDeployment(
    {
      token: vercelDeployToken || process.env.VERCEL_DEPLOY_TOKEN,
      path: path.join(__dirname, '../../'),
      teamId: 'contentful-apps',
    },
    {
      name: 'colorful-demo-fintech',
      projectSettings: {
        devCommand: null,
        buildCommand: null,
        outputDirectory: null,
      },
      env: {
        CONFIG_CONTENTFUL_MAIN_SPACE_ID: spaceId,
        CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN: deliveryApiKey,
        CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN: previewApiKey,
        CONFIG_CONTENTFUL_MAIN_SPACE_MANAGEMENT_TOKEN: cmaToken,
        CONFIG_CONTENTFUL_LEGAL_SPACE_ID:
          legalSpaceId || process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_ID || '',
        CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN:
          legalSpaceToken ||
          process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN ||
          '',
        NEXT_PUBLIC_NINETAILED_API_KEY: '6207cd14-ab62-4f52-a7d2-baa5cf31ae38',
        NEXT_PUBLIC_NINETAILED_ENVIRONMENT: spaceId,
      },
      build: {
        env: {
          CONFIG_CONTENTFUL_MAIN_SPACE_ID: spaceId,
          CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN: deliveryApiKey,
          CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN: previewApiKey,
          CONFIG_CONTENTFUL_MAIN_SPACE_MANAGEMENT_TOKEN: cmaToken,
          CONFIG_CONTENTFUL_LEGAL_SPACE_ID:
            legalSpaceId || process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_ID || '',
          CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN:
            legalSpaceToken ||
            process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN ||
            '',
          NEXT_PUBLIC_NINETAILED_API_KEY:
            '6207cd14-ab62-4f52-a7d2-baa5cf31ae38',
          NEXT_PUBLIC_NINETAILED_ENVIRONMENT: spaceId,
        },
      },
    },
  )) {
    if (event.type === 'error') {
      console.error(event);

      if (event.payload.status === 401 || event.payload.status === 403) {
        return {
          state: 'error',
          error:
            'The Vercel token that you have provided could not be used to create a deployment. Double check that the token is valid.',
        };
      }

      return {
        state: 'error',
        error: 'Failed to deploy to Vercel - createDeployment error',
      };
    }

    if (event.type === 'ready') {
      deployment = event.payload;
      break;
    }
  }

  return {
    state: 'success',
    payload: {
      deploymentUrl: deployment.url,
    },
  };
};

module.exports = deployToVercel;
