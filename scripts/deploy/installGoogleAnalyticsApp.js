const { createClient } = require('contentful-management');
const catchify = require('catchify');

const installGoogleAnalyticsApp = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [installAppError] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/app_installations/2zxg33XZAtuAD1BBuV0Svy`,
      data: {
        parameters: {
          viewId: '226053364',
          clientId:
            '1056414101560-1ehgfpmfrg3vs8dj4u3istmbrtpqtdct.apps.googleusercontent.com',
          contentTypes: {
            page: {
              slugField: 'slug',
              urlPrefix: '/en/',
            },
            post: {
              slugField: 'slug',
              urlPrefix: '/en/post/',
            },
            category: {
              slugField: 'slug',
              urlPrefix: '/en/category/',
            },
          },
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
      error:
        'Failed to install the Google Analytics app - app_installations PUT error error',
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
    console.error(installAppError);
    return {
      state: 'error',
      error:
        'Failed to install the Google Analytics app - editor_interfaces GET error',
    };
  }

  const contentTypes = ['page', 'post', 'category'];

  for (let i = 0; i < contentTypes.length; i += 1) {
    const contentType = contentTypes[i];
    const editorInterface = editorInterfaces.items.find(
      (item) => item.sys.contentType.sys.id === contentType,
    );

    if (editorInterface === undefined) {
      continue;
    }
    const [updateEditorInterfaceError] = await catchify(
      client.rawRequest({
        method: 'PUT',
        url: `https://api.contentful.com/spaces/${spaceId}/content_types/${contentType}/editor_interface`,
        data: {
          ...editorInterface,
          sidebar: [
            {
              widgetId: 'publication-widget',
              widgetNamespace: 'sidebar-builtin',
            },
            {
              widgetId: '2zxg33XZAtuAD1BBuV0Svy',
              widgetNamespace: 'app',
            },
            // Tasks app
            {
              widgetId: '7CPoljE4C0HpsVZ7a7HrZG',
              widgetNamespace: 'app',
            },
            {
              widgetId: 'content-preview-widget',
              widgetNamespace: 'sidebar-builtin',
            },
            {
              widgetId: 'incoming-links-widget',
              widgetNamespace: 'sidebar-builtin',
            },
            {
              widgetId: 'translation-widget',
              widgetNamespace: 'sidebar-builtin',
            },
            {
              widgetId: 'versions-widget',
              widgetNamespace: 'sidebar-builtin',
            },
          ],
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
          'Failed to install the Google Analytics app - editor_interfaces PUT error',
      };
    }
  }

  return {
    state: 'success',
  };
};

module.exports = installGoogleAnalyticsApp;
