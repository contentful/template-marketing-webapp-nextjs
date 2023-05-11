import LaunchDarkly from 'launchdarkly-node-server-sdk';

let launchDarklyClient;

const initialize = async () => {
  const client = LaunchDarkly.init(process.env.LAUNCH_DARKLY_SDK_KEY || '');
  await client.waitForInitialization();
  return client;
};

export const getClient = async () => {
  return launchDarklyClient ?? (launchDarklyClient = await initialize());
};
