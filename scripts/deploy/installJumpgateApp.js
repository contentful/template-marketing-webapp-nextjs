const { createClient } = require('contentful-management');
const catchify = require('catchify');

const installJumpgateApp = async (input) => {
  const { organizationId, cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [appDefinitionsError, appDefinitions] = await catchify(
    client.rawRequest({
      method: 'GET',
      url: `https://api.contentful.com/organizations/${organizationId}/app_definitions`,
    }),
  );

  if (appDefinitionsError !== null) {
    console.error(appDefinitionsError);
    return {
      state: 'error',
      error: 'Failed to install the Jumpgate app - app_definitions GET error',
    };
  }

  let appDefinitionId = appDefinitions.items.find(
    (item) => item.src !== undefined && item.src.includes('jumpgate'),
  )?.sys.id;

  if (appDefinitionId === undefined) {
    const [createAppDefinitionError, appDefinition] = await catchify(
      client.rawRequest({
        method: 'POST',
        url: `https://api.contentful.com/organizations/${organizationId}/app_definitions`,
        data: {
          name: 'Jumpgate',
          src: 'https://jumpgate.vercel.app',
          locations: [
            {
              location: 'app-config',
            },
            {
              location: 'entry-editor',
            },
          ],
        },
      }),
    );

    if (createAppDefinitionError !== null) {
      console.error(createAppDefinitionError);
      return {
        state: 'error',
        error:
          'Failed to install the Jumpgate app - app_definitions POST error',
      };
    }

    appDefinitionId = appDefinition.sys.id;
  }

  const [installAppError] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/app_installations/${appDefinitionId}`,
      data: {
        parameters: {
          spaceType: 'consumer',
          sourceSpaceId: 'ug1eiolu2itg',
          patternMatches: {
            page: '6tH3s8DqdBOBM34ryA8qLg',
            post: 'yDNHOxqHv4IFfzhDVHNWB',
            category: '2urfo2rPziz5zL7Md8t3Vk',
            topicPerson: '4tqsNiY7wEDQELa0cYCFfZ',
            componentCta: '1tTt7tKMgTLiPURUx9qD4k',
            topicProduct: '34L0Z4QbNdYAHWKeujOkpk',
            componentQuote: '6oDnTPP2mZdHBTciEneTVv',
            componentDuplex: '3BT32MNtUkawOwbaNdX9QW',
            topicBusinessInfo: 'HSvFEcVKyw2wp0TjzsH7E',
            componentInfoBlock: '1lX05JqblXXi7rdWJprdZv',
            componentTextBlock: 'kjTW2cVZnLfKViFYDAwpj',
            componentHeroBanner: '4dTbRB7EmboLH4g33NyXtX',
            topicProductFeature: '27UcW9AgOVWZFAxQQE2AHY',
            componentProductTable: 'FFFHw16AkFgzE2nsz8LLj',
            componentFeaturedCards: '36GxGbqZxthhK4KCYxXDaJ',
          },
          sourceDeliveryToken: '7lG77MPq6ynErYyXW5WeqqoW77oTemzTVcFHMVwkpGc',
          sourceConnectionValidated: true,
        },
      },
      headers: {
        'X-Contentful-Marketplace':
          'i-accept-end-user-license-agreement,i-accept-marketplace-terms-of-service,i-accept-privacy-policy',
      },
    }),
  );

  if (installAppError !== null) {
    console.error(installAppError);
    return {
      state: 'error',
      error: 'Failed to install the Jumpgate app - app_installations PUT error',
    };
  }

  // Update editor interfaces
  const [editorInterfacesError, editorInterfaces] = await catchify(
    client.rawRequest({
      method: 'GET',
      url: `https://api.contentful.com/spaces/${spaceId}/editor_interfaces`,
    }),
  );

  if (editorInterfacesError !== null) {
    console.error(editorInterfacesError);
    return {
      state: 'error',
      error: 'Failed to install the Jumpgate app - editor_interfaces GET error',
    };
  }

  const contentTypes = [
    'topicProduct',
    'componentHeroBanner',
    'componentDuplex',
    'componentCta',
    'componentTextBlock',
    'componentQuote',
    'page',
    'topicPerson',
    'componentFeaturedCards',
    'componentProductTable',
    'topicProductFeature',
    'post',
    'topicBusinessInfo',
    'category',
    'componentInfoBlock',
  ];

  for (let i = 0; i < contentTypes.length; i += 1) {
    const contentType = contentTypes[i];
    const editorInterface = editorInterfaces.items.find(
      (item) => item.sys.contentType.sys.id === contentType,
    );

    if (editorInterface === undefined) {
      continue;
    }

    let newEditors = [...(editorInterface.editors ?? [])];

    newEditors = newEditors.filter(
      (editor) => editor.widgetId === 'default-editor',
    );

    newEditors = [
      { widgetId: 'default-editor', widgetNamespace: 'editor-builtin' },
      {
        widgetNamespace: 'app',
        widgetId: appDefinitionId,
      },
      ...newEditors,
    ];

    const [updateEditorInterfaceError] = await catchify(
      client.rawRequest({
        method: 'PUT',
        url: `https://api.contentful.com/spaces/${spaceId}/content_types/${contentType}/editor_interface`,
        data: {
          ...editorInterface,
          editors: newEditors,
        },
        headers: {
          'X-Contentful-Version': editorInterface.sys.version,
        },
      }),
    );

    if (updateEditorInterfaceError !== null) {
      console.error(updateEditorInterfaceError);
      return {
        state: 'error',
        error:
          'Failed to install the Jumpgate app - editor_interfaces PUT error',
      };
    }
  }

  return {
    state: 'success',
  };
};

module.exports = installJumpgateApp;
