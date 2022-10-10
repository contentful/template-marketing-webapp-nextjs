import { createClient } from 'contentful-management';

import { runStep } from '../util/run-step';
import { ProvisionStep } from './types';

import catchify from 'catchify';

interface CreateEmptyEnvironmentProps {
  cmaToken: string;
  spaceId: string;
}

interface CreateEmptyEnvironmentPayload {
  emptyEnvironment: unknown;
}

const createEmptyEnvironment: ProvisionStep<
  CreateEmptyEnvironmentProps,
  CreateEmptyEnvironmentPayload
> = async ({ cmaToken, spaceId }) => {
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

    throw new Error('Failed to create an empty environment - createEnvironment error');
  }

  return {
    emptyEnvironment,
  };
};

export const stepCreateSpaceEmptyEnvironment = (props: CreateEmptyEnvironmentProps) =>
  runStep<CreateEmptyEnvironmentPayload>(
    () => createEmptyEnvironment(props),
    {
      label: 'Create empty environment',
      abortOnError: true,
    },
    {
      spaceId: props.spaceId,
      cmaToken: props.cmaToken,
    },
  );
