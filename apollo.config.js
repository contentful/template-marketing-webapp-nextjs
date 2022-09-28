/* eslint-disable */
require('dotenv').config();

const getContentfulConfig = require('./dist/src/get-contentful-config').default;
const contentfulConfig = getContentfulConfig();

const spaceId = contentfulConfig.contentful.main_space_id;
const apiKey = contentfulConfig.contentful.main_space_token;

module.exports = {
  client: {
    service: {
      name: 'contentful',
      url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}?access_token=${apiKey}`,
    },
    includes: [
      './pages/**/*.{tsx,ts,js,jsx}',
      './src/components/**/*.{tsx,ts,js,jsx}',
      './src/ctf-components/**/*.{tsx,ts,js,jsx}',
      './src/ctf-hq-components/**/*.{tsx,ts,js,jsx}',
    ],
  },
};
