const { createClient } = require('contentful-management');
const catchify = require('catchify');

const installSchemaConnectorApp = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [installAppError] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/app_installations/Kzjc5qKdUIgbbSP7IPEaC`,
      data: {
        parameters: {
          defBy: 'url',
          defFile: {
            url: 'https://raw.githubusercontent.com/Colorful-Team-Org/screencloud-contentful-demo/main/data/screencloud-app-definitions.json',
            updatedAt: '2021-12-17T16:21:08.655Z',
            definitions: [
              {
                name: 'blog',
                label: 'Blog',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    label: 'Title',
                  },
                  {
                    name: 'description',
                    type: 'string',
                    label: 'Description',
                  },
                  {
                    name: 'category',
                    type: 'string',
                    label: 'Category',
                  },
                  {
                    name: 'author',
                    type: 'string',
                    label: 'Author',
                  },
                  {
                    name: 'pubDate',
                    type: 'string',
                    label: 'Publish Date',
                  },
                  {
                    name: 'image',
                    type: 'imageAsset',
                    label: 'Image',
                  },
                  {
                    name: 'slug',
                    type: 'string',
                    label: 'Slug',
                  },
                  {
                    name: 'baseUrl',
                    type: 'string',
                    label: 'Base URL',
                    constant: true,
                  },
                  {
                    name: 'logoUrl',
                    type: 'string',
                    label: 'Logo URL',
                    constant: true,
                  },
                ],
                version: '1.0.0',
              },
              {
                name: 'quotes',
                label: 'Quotes',
                fields: [
                  {
                    name: 'image',
                    type: 'imageAsset',
                    label: 'Image',
                  },
                  {
                    name: 'text',
                    type: 'string',
                    label: 'Text',
                  },
                  {
                    name: 'author',
                    type: 'string',
                    label: 'Author',
                  },
                ],
                version: '1.0.0',
              },
              {
                name: 'products',
                label: 'Products',
                fields: [
                  {
                    name: 'id',
                    type: 'string',
                    label: 'ID',
                  },
                  {
                    name: 'brand',
                    type: 'string',
                    label: 'Brand',
                  },
                  {
                    name: 'name',
                    type: 'string',
                    label: 'Name',
                  },
                  {
                    name: 'type',
                    type: 'string',
                    label: 'Type',
                  },
                  {
                    name: 'price',
                    type: 'number',
                    label: 'Price',
                  },
                  {
                    name: 'comparePrice',
                    type: 'number',
                    label: 'Compare at price ',
                  },
                  {
                    name: 'image',
                    type: 'imageAsset',
                    label: 'Image',
                  },
                  {
                    name: 'slug',
                    type: 'string',
                    label: 'Slug',
                  },
                  {
                    name: 'baseUrl',
                    type: 'string',
                    label: 'Base URL',
                    constant: true,
                  },
                ],
                version: '1.0.0',
              },
              {
                name: 'heroes',
                label: 'Heroes',
                fields: [
                  {
                    name: 'headline',
                    type: 'string',
                    label: 'Headline',
                  },
                  {
                    name: 'paragraph',
                    type: 'string',
                    label: 'Paragraph',
                  },
                  {
                    name: 'image',
                    type: 'imageAsset',
                    label: 'Image',
                  },
                  {
                    name: 'color',
                    type: 'string',
                    label: 'Color Palette',
                  },
                  {
                    name: 'slug',
                    type: 'string',
                    label: 'Slug',
                  },
                  {
                    name: 'baseUrl',
                    type: 'string',
                    label: 'Base URL',
                    constant: true,
                  },
                ],
                version: '1.0.0',
              },
              {
                name: 'brand',
                label: 'Brand',
                fields: [
                  {
                    name: 'logoUrl',
                    type: 'string',
                    label: 'Logo URL',
                  },
                ],
                version: '1.0.0',
              },
            ],
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
        'Failed to install the Schema Connector app - app_installations PUT error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = installSchemaConnectorApp;
