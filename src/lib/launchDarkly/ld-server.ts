import LaunchDarkly from 'launchdarkly-node-server-sdk';

import { fallbackValues } from '../../_ctf-private/_ctf-featureFlags/ld-flags';
let launchDarklyClient;

const defaultContext = { kind: 'user', key: 'ld-context-user' };

const initialize = async () => {
  const client = LaunchDarkly.init(process.env.LAUNCH_DARKLY_SDK_KEY || '');
  await client.waitForInitialization();
  return client;
};

export const getClient = async () => {
  return launchDarklyClient ?? (launchDarklyClient = await initialize());
};

export const getFlagVariation = async (flagName, context = defaultContext) => {
  const client = await getClient();
  const flagValue = await client.variation(flagName, context, fallbackValues);
  return { [flagName]: flagValue };
};
