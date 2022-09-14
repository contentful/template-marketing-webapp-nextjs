const { createClient } = require('contentful-management');
const catchify = require('catchify');

const installTypeformApp = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [installAppError] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/app_installations/1SZgLiOT63ijEzPJZQ4QWT`,
      data: {
        parameters: {
          selectedWorkspaceId: 'MdyWQZ',
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
        'Failed to install the Typeform app - app_installations PUT error error',
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
      error: 'Failed to install the Typeform app - editor_interfaces GET error',
    };
  }

  const contentTypes = ['wrapperExternalAsset'];

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
          controls: editorInterface.controls.map((control) => {
            if (control.fieldId !== 'externalApp') {
              return control;
            }

            return {
              fieldId: control.fieldId,
              widgetNamespace: 'app',
              widgetId: '1SZgLiOT63ijEzPJZQ4QWT',
            };
          }),
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
          'Failed to install the Typeform app - editor_interface PUT error',
      };
    }
  }

  return {
    state: 'success',
  };
};

module.exports = installTypeformApp;
