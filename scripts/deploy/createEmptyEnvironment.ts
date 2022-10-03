import { createClient } from 'contentful-management';

import { ProvisionStep } from './types';

import catchify from 'catchify';

interface CreateEmptyEnvironmentProps {
  cmaToken: string;
  spaceId: string;
}

export const createEmptyEnvironment: ProvisionStep<CreateEmptyEnvironmentProps> = async ({
  cmaToken,
  spaceId,
}) => {
  const client = createClient({
    accessToken: cmaToken,
  });

  const [emptyEnvironmentError, emptyEnvironment] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/environments/empty`,
      data: {
        name: 'empty',
      },
    }),
  );

  if (emptyEnvironmentError !== null || !emptyEnvironment) {
    console.error(emptyEnvironmentError);
    return {
      state: 'error',
      error: 'Failed to create an empty environment - createEnvironment error',
    };
  }

  return {
    state: 'success',
    payload: emptyEnvironment,
  };
};
