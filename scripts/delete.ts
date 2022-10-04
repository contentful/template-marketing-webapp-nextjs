import { createClient } from 'contentful-management';
import * as dotenv from 'dotenv';
import yargs from 'yargs';

import catchify from 'catchify';

dotenv.config();

const argv = yargs
  .options({
    cmaToken: {
      type: 'string',
      describe: 'Needs to be provided if you are using a non-default organization',
    },
    spaceId: {
      type: 'string',
      describe: 'If provided, the existing space will be deleted',
    },
  })
  .parseSync();

/**
 * This script deletes a space programmatically if a CMA token and Space ID are provided.
 * Be ABSOLUTELY sure you know what you are doing before running this script. This script is particularly useful when you've manually stopped the provisioning step and want to delete the space that was created.
 * The script can be run as following: yarn contentful-scripts:delete --spaceId=mySpaceId --cmaToken=myCMAToken
 */
(async () => {
  if (!argv.spaceId) {
    throw new Error('Error deleting spacing - no spaceId was provided');
  }

  if (!argv.cmaToken) {
    throw new Error('Error deleting spacing - no cmaToken was provided');
  }

  const client = createClient({
    accessToken: argv.cmaToken,
  });

  const [spaceError, space] = await catchify(client.getSpace(argv.spaceId));

  if (spaceError) {
    throw spaceError;
  }

  try {
    await catchify(space.delete());
    console.log(`Successfully deleted space with the following name: ${space.name}`);
  } catch (e: any) {
    throw new Error('Error deleting spacing - failed to delete space: ', e);
  }
})();
