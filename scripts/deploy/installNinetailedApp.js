const axios = require('axios');

const installNinetailedApp = async (input) => {
  const { spaceId, cmaToken, spaceName, organizationId } = input;

  const ninetailedAuthHeaders = {
    'X-ninetailed-api-key': 'e6652073-6cbf-4faf-8d21-5495c5a47a40',
    'X-ninetailed-api-secret': '9a7863e4-e6be-4e8c-8f70-f8c24a0d6f32',
  };

  const registerEnvironmentResponse = await axios.post(
    'https://management.ninetailed.co/organizations/6207cd14-ab62-4f52-a7d2-baa5cf31ae38/environments',
    {
      name: `${spaceId} environment`,
      slug: spaceId,
    },
    {
      headers: ninetailedAuthHeaders,
    },
  );

  const registerTokenResponse = await axios.post(
    'https://management.ninetailed.co/tokens',
    {
      token: cmaToken,
    },
    {
      headers: ninetailedAuthHeaders,
    },
  );

  await axios.post(
    `https://management.ninetailed.co/organizations/6207cd14-ab62-4f52-a7d2-baa5cf31ae38/environments/${registerEnvironmentResponse.data.environment.id}/contentsources`,
    {
      externalId: `${spaceId}:main`,
      type: 'CONTENTFUL',
      slug: `${spaceId}-main`,
      name: spaceName,
      config: {
        space: {
          id: spaceId,
          name: spaceName,
        },
        environment: {
          id: 'main',
          name: 'main',
        },
        organization: {
          id: organizationId,
          name: 'Colorful Demo Org',
        },
      },

      apiKeyId: registerTokenResponse.data.token.id,
      adminId: '6ff920db-71c5-4d27-9ee4-b7d8229b5389',
    },
    {
      headers: ninetailedAuthHeaders,
    },
  );

  return {
    state: 'success',
  };
};

module.exports = installNinetailedApp;
