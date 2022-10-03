import { createClient, Space } from 'contentful-management';

import { ProvisionStep } from './types';

import catchify from 'catchify';

type CreateSpaceProps = {
  organizationId: string;
  cmaToken: string;
  spaceName: string;
  email: string;
  spaceId: string;
};

type CreateSpacePayload = {
  spaceId: string;
  spaceName: string;
  deliveryApiKey: string;
  previewApiKey: string;
};

export const createSpace: ProvisionStep<CreateSpaceProps, CreateSpacePayload> = async ({
  organizationId,
  cmaToken,
  spaceName,
  email,
  spaceId: inputSpaceId,
}) => {
  const client = createClient({
    accessToken: cmaToken,
  });

  const [currentUserError, currentUser] = await catchify(client.getCurrentUser());

  if (currentUserError !== null) {
    console.error(currentUserError);
    return {
      state: 'error',
      error: 'Failed to create space - getCurrentUser error',
    };
  }

  if (inputSpaceId !== undefined) {
    // No need to create a space, just get API keys and return early
    const [spaceError, space] = await catchify(client.getSpace(inputSpaceId));

    if (spaceError !== null) {
      console.error(spaceError);
      if (spaceError.name === 'NotFound') {
        return {
          state: 'error',
          error: `The space with the ID that you have provided could not be found. Make sure that the space exists, and that you have the admin rights for that space`,
        };
      }

      return {
        state: 'error',
        error: 'Failed to reuse space - getSpace error',
      };
    }

    const [apiKeysError, apiKeys] = await catchify(space.getApiKeys());

    if (apiKeysError !== null) {
      console.error(apiKeysError);
      return {
        state: 'error',
        error: 'Failed to reuse space - getApiKeys error',
      };
    }

    const deliveryApiKey = apiKeys.items.find(apiKey => apiKey.name === 'Colorful provisioning');

    if (deliveryApiKey === undefined) {
      return {
        state: 'error',
        error: 'Failed to reuse space - delivery api key not found',
      };
    }

    const [previewApiKeyByIdError, previewApiKeyById] = await catchify(
      client.rawRequest({
        method: 'GET',
        url: `https://api.contentful.com/spaces/${inputSpaceId}/preview_api_keys/${deliveryApiKey.preview_api_key.sys.id}`,
      }),
    );

    if (previewApiKeyByIdError !== null) {
      console.error(previewApiKeyByIdError);
      return {
        state: 'error',
        error: 'Failed to reuse space - preview api key error',
      };
    }

    const previewApiKey = previewApiKeyById.accessToken;

    return {
      state: 'success',
      payload: {
        spaceId: inputSpaceId,
        spaceName: space.name,
        deliveryApiKey: deliveryApiKey.accessToken,
        previewApiKey,
      },
    };
  }

  const newSpaceName =
    spaceName || `Fin - ${(email || currentUser.email).split('@')[0].substring(0, 23)}`;

  const [createdSpaceError, createdSpace] = await catchify(
    client.createSpace(
      {
        name: newSpaceName,
      },
      organizationId,
    ),
  );

  if (createdSpaceError !== null) {
    console.error(createdSpaceError);

    if (createdSpaceError.name === 'NotFound') {
      return {
        state: 'error',
        error: `The token you have provided could not be used to create a space. Make sure the user to which the token belongs has the rights to create new spaces in the organization ${organizationId}, and that the organization has free space entitlements`,
      };
    }

    return {
      state: 'error',
      error: 'Failed to create space - createSpace error',
    };
  }

  const spaceId = createdSpace.sys.id;

  const [createdApiKeyError, createdApiKey] = await catchify(
    createdSpace.createApiKey({
      name: 'Colorful provisioning',
      environments: [
        {
          sys: {
            type: 'Link',
            linkType: 'Environment',
            id: 'master',
          },
        },
      ],
    }),
  );

  if (createdApiKeyError !== null) {
    console.error(createdApiKeyError);
    return {
      state: 'error',
      error: 'Failed to create space - createApiKey error',
    };
  }

  const deliveryApiKey = createdApiKey.accessToken;

  const [previewApiKeyByIdError, previewApiKeyById] = await catchify(
    client.rawRequest({
      method: 'GET',
      url: `https://api.contentful.com/spaces/${spaceId}/preview_api_keys/${createdApiKey.preview_api_key.sys.id}`,
    }),
  );

  if (previewApiKeyByIdError !== null) {
    console.error(previewApiKeyByIdError);
    return {
      state: 'error',
      error: 'Failed to create space - preview api key error',
    };
  }

  const previewApiKey = previewApiKeyById.accessToken;

  // Create a German locale in the space
  const [createLocaleError, createLocale] = await catchify(
    createdSpace.getEnvironment('master').then(environment => {
      return environment.createLocale({
        code: 'de-DE',
        name: 'German (Germany)',
        fallbackCode: 'en-US',
        optional: true,
        contentDeliveryApi: true,
        contentManagementApi: true,
      });
    }),
  );

  if (createLocaleError !== null || !createLocale) {
    console.error(createLocaleError);
    return {
      state: 'error',
      error: 'Failed to create space - createLocale error',
    };
  }

  // Create an environment alias
  client.rawRequest({
    method: 'PUT',
    url: `https://api.contentful.com/spaces/${spaceId}/optin/environment-aliases`,
    data: {
      newEnvironmentId: 'main',
    },
  });

  return {
    state: 'success',
    payload: {
      spaceId,
      spaceName: newSpaceName,
      deliveryApiKey,
      previewApiKey,
    },
  };
};
