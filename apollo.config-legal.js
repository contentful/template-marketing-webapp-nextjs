/* eslint-disable */
require('dotenv').config();

const getContentfulConfig = require('./dist/src/get-contentful-config').default;
const contentfulConfig = getContentfulConfig();

const spaceId = contentfulConfig.contentful.legal_space_id;
const apiKey = contentfulConfig.contentful.legal_space_token;

module.exports = {
  client: {
    service: {
      name: 'contentful',
      url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}?access_token=${apiKey}`,
    },
    includes: ['./src/ctf-components/ctf-legal-page/**/*.{tsx,ts,js,jsx}'],
  },
};
