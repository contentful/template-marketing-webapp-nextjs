// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

const initDeployment = require('./deploy/init');

require('dotenv').config();

const { argv } = yargs.options({
  organizationId: {
    type: 'string',
    default: process.env.CONTENTFUL_DEPLOY_ORG,
    describe:
      'If left empty, a default organization will be used. Make sure to use your own organization if you want to keep this demo permanently!',
  },
  cmaToken: {
    type: 'string',
    default: process.env.CONTENTFUL_DEPLOY_TOKEN,
    describe:
      'Needs to be provided if you are using a non-default organization',
  },
  email: { type: 'string' },
  spaceName: {
    type: 'string',
    describe: 'Make sure to put it in quotes. Limited to 35 characters.',
  },
  spaceId: {
    type: 'string',
    describe:
      'If provided, the existing space will be reused instead of provisioning a new one. Note: Only frontend code will be deployed. This argument assumes that the space already has an appropriate content(model), API keys etc. set up.',
  },
  role: {
    type: 'string',
    default: 'Administrator',
    describe: 'Chose between one of the default roles',
  },
});

initDeployment({
  organizationId: argv.organizationId || '',
  cmaToken: argv.cmaToken || '',
  email: argv.email,
  spaceName: argv.spaceName,
  spaceId: argv.spaceId,
  role: argv.role,
})
  .then((result) => {
    if (result.state !== 'error') {
      return;
    }

    console.info('Deployment failed with the following error:', result.error);
  })
  .catch((e) => {
    console.info('Deployment failed with the following error:');
    console.error(e);
  });
