// eslint-disable-next-line import/no-extraneous-dependencies
import yargs from 'yargs';

import initJumpgate from './jumpgate/init';

require('dotenv').config();

const { argv } = yargs
  .options({
    cmaToken: {
      type: 'string',
      default: process.env.CONTENTFUL_DEPLOY_TOKEN as string,
      describe:
        'Needs to be provided if you are targetting a space in a non-default organization',
    },
    spaceId: {
      type: 'string',
      describe:
        'ID of the space that is a source of the content guidelines. The app should already be installed and configured in that space',
    },
  })
  .demandOption(['spaceId'], 'Please provide a spaceId argument');

initJumpgate({
  cmaToken: argv.cmaToken,
  spaceId: argv.spaceId,
})
  .then((result) => {
    if (result.state !== 'error') {
      return;
    }

    console.info(
      'Jumpgate script failed with the following error:',
      result.error,
    );
  })
  .catch((e) => {
    console.info('Jumpgate script failed with the following error:');
    console.error(e);
  });
