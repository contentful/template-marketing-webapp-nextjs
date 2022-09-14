const catchify = require('catchify');
const { createClient } = require('contentful-management');

const updateTranslatorRole = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  // If role is not equal to administrator, we want to invite them as that
  // specific role, but then also as administrator by using the email alias
  // (so for jane.doe@contentful.com, we invite jane.doe+admin@contentful.com
  // as an admin). Thanks to how email alias works, both of these emails will
  // go to the same email inbox.
  const [rolesError, roles] = await catchify(
    client.getSpace(spaceId).then((space) => space.getRoles()),
  );

  if (rolesError !== null) {
    console.error(rolesError);
    return {
      state: 'error',
      error: 'Failed to update translator role to space - getRoles error',
    };
  }

  const translatorRole = roles.items.find((x) => x.name === 'Translator');

  if (translatorRole === undefined) {
    return {
      state: 'error',
      error:
        'Failed to update translator role - could not find the Translator role',
    };
  }

  const [updateRoleError] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/roles/${translatorRole.sys.id}`,
      data: {
        name: 'Translator (de-DE)',
        description:
          'Allows editing of localized fields in German (Germany) language',
        policies: [
          {
            effect: 'allow',
            constraint: {
              and: [
                {
                  equals: [
                    {
                      doc: 'sys.type',
                    },
                    'Entry',
                  ],
                },
              ],
            },
            actions: ['read'],
          },
          {
            effect: 'allow',
            constraint: {
              and: [
                {
                  equals: [
                    {
                      doc: 'sys.type',
                    },
                    'Entry',
                  ],
                },
                {
                  paths: [
                    {
                      doc: 'fields.%.de-DE',
                    },
                  ],
                },
              ],
            },
            actions: ['update'],
          },
          {
            effect: 'allow',
            constraint: {
              and: [
                {
                  equals: [
                    {
                      doc: 'sys.type',
                    },
                    'Asset',
                  ],
                },
              ],
            },
            actions: ['read'],
          },
          {
            effect: 'allow',
            constraint: {
              and: [
                {
                  equals: [
                    {
                      doc: 'sys.type',
                    },
                    'Asset',
                  ],
                },
                {
                  paths: [
                    {
                      doc: 'fields.%.de-DE',
                    },
                  ],
                },
              ],
            },
            actions: ['update'],
          },
        ],
        permissions: {
          contentModel: ['read'],
          contentDelivery: [],
          settings: [],
          environments: [],
          environmentAliases: [],
          tags: [],
        },
      },
    }),
  );

  if (updateRoleError !== null) {
    console.error(updateRoleError);
    return {
      state: 'error',
      error: 'Failed to update translator role to space - roles PUT error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = updateTranslatorRole;
