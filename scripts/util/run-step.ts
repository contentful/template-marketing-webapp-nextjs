import { createClient } from 'contentful-management';

import catchify from 'catchify';

type RunStepFunctionType<T> = () => Promise<T>;
type RunStepConfigObject = { abortOnError?: boolean; label?: string };

interface CleanupSpaceProps {
  spaceId: string;
  cmaToken: string;
}

export const cleanupSpace = async ({ spaceId, cmaToken }: CleanupSpaceProps) => {
  const client = createClient({
    accessToken: cmaToken,
  });

  const [spaceError, space] = await catchify(client.getSpace(spaceId));

  if (spaceError !== null) return;

  await catchify(space.delete());
};

/**
 * This script wraps our provision-scripts files and adds error handling, logging and time reporting to each step.
 * The three parameters that are passed are described by their TypeScript types. But to reiterate:
 * @param step: one of the scripts in provisioning-scripts, where the prop types for the step are passed as a generic.
 * @param config: config object for the runStep itself; lets user decide to abort the process on error. This also deleted the space. An optional label can be passed that's show in the logging.
 * @param space: spaceId and CMAToken, used to delete the space if config.abortOnError is passed as true.
 */
export const runStep = async <T>(
  step: RunStepFunctionType<T>,
  config: RunStepConfigObject = {
    abortOnError: true,
  },
  space: {
    spaceId: string;
    cmaToken: string;
  },
): Promise<T> => {
  const stepStartTime = new Date();

  console.info(`🚀 Step started -- ${config.label}`);

  try {
    const stepResult = await step();
    const stepEndTime = new Date();

    console.table({
      status: `🏁  Step completed!`,
      duration: `${Math.round((stepEndTime.getTime() - stepStartTime.getTime()) / 1000)}s`,
    });
    console.log('');

    return stepResult;
  } catch (e: any) {
    if (config.abortOnError === true) {
      await cleanupSpace({ spaceId: space.spaceId, cmaToken: space.cmaToken });

      console.log(`🧹  Deleted Space`);
    }

    const stepEndTime = new Date();

    if (config.abortOnError === true) {
      console.table({
        step: config.label,
        status: `❌  Step failed -- ${config.label}.`,
        duration: `${Math.round((stepEndTime.getTime() - stepStartTime.getTime()) / 1000)}s`,
        reason: e.toString(),
      });
      console.log('');

      throw e;
    } else {
      console.table({
        step: config.label,
        status: `⚠️  Step failed, but was allowed to continue.`,
        duration: `${Math.round((stepEndTime.getTime() - stepStartTime.getTime()) / 1000)}s`,
        reason: e.toString(),
      });
      console.log('');

      return e;
    }
  }
};
