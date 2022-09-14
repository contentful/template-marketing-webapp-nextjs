import { createClient } from 'contentful-management';
import catchify from 'catchify';
import importContent from './importContent';

interface InitInputInterface {
  cmaToken: string;
  spaceId: string;
}

interface InitResultSuccessInterface {
  state: 'success';
  meta: {
    [key: string]: any;
  };
}

interface InitResultErrorInterface {
  state: 'error';
  error: string;
}

const init = async (
  input: InitInputInterface,
): Promise<InitResultSuccessInterface | InitResultErrorInterface> => {
  const { cmaToken, spaceId } = input;
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

  // Import content
  const importContentModelStartTime = new Date();
  console.info('Importing the content...');

  const importContentModelResult = await importContent({
    spaceId,
    cmaToken,
  });

  if (importContentModelResult.state === 'error') {
    return {
      state: 'error',
      error: importContentModelResult.error,
    };
  }

  const importContentModelEndTime = new Date();

  console.info(
    `Content imported. Done in ${Math.round(
      (importContentModelEndTime.getTime() -
        importContentModelStartTime.getTime()) /
        1000,
    )}s`,
  );

  const contentfulUrl = `https://app.contentful.com/spaces/${spaceId}`;

  return {
    state: 'success',
    meta: {
      contentful: contentfulUrl,
    },
  };
};

export default init;
