const catchify = require('catchify');
const { createClient } = require('contentful-management');

const isUserAlreadyInOrgError = (error) => {
  if (error.message.startsWith('{') === false) {
    return false;
  }

  const detailedError = JSON.parse(error.message);

  if (detailedError?.details?.errors?.[0] === undefined) {
    return false;
  }

  return detailedError.details.errors[0].name.includes(
    'organization membership already exists',
  );
};

const isUserAlreadyInSpaceError = (error) => {
  if (error.message.startsWith('{') === false) {
    return false;
  }

  const detailedError = JSON.parse(error.message);

  if (detailedError?.details?.errors?.[0] === undefined) {
    return false;
  }

  return detailedError.details.errors[0].name.includes('taken');
};

const inviteToSpace = async (input) => {
  const { organizationId, cmaToken, spaceId, email, role } = input;

  if (email === undefined) {
    if (role !== 'Administrator') {
      return {
        state: 'error',
        error: 'You need to provide email when passing a non-default role',
      };
    }

    return {
      state: 'success',
    };
  }

  const client = createClient({
    accessToken: cmaToken,
  });

  const [currentUserError, currentUser] = await catchify(
    client.getCurrentUser(),
  );

  if (currentUserError !== null) {
    console.error(currentUserError);
    return {
      state: 'error',
      error: 'Failed to invite to space - getCurrentUser error',
    };
  }

  let userInvite = null;

  if (role === 'Administrator') {
    // If role is administrator, we simply invite them as admin and that's it
    const [inviteUserToOrgError, inviteUserToOrg] = await catchify(
      client.rawRequest({
        method: 'POST',
        url: `https://api.contentful.com/organizations/${organizationId}/invitations`,
        data: {
          email,
          role: 'member',
        },
      }),
    );

    userInvite = inviteUserToOrg;

    if (
      (inviteUserToOrgError !== null || !inviteUserToOrg) &&
      isUserAlreadyInOrgError(inviteUserToOrgError) === false
    ) {
      console.error(inviteUserToOrgError);
      return {
        state: 'error',
        error: 'Failed to invite to space - invitations error',
      };
    }

    const [inviteUserToSpaceError, inviteUserToSpace] = await catchify(
      client.rawRequest({
        method: 'POST',
        url: `https://api.contentful.com/spaces/${spaceId}/space_memberships`,
        data: {
          admin: true,
          email,
        },
      }),
    );

    if (
      (inviteUserToSpaceError !== null || !inviteUserToSpace) &&
      isUserAlreadyInSpaceError(inviteUserToSpaceError) === false
    ) {
      console.error(inviteUserToSpaceError);
      return {
        state: 'error',
        error: 'Failed to invite to space - space_memberships error',
      };
    }
  } else {
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
        error: 'Failed to invite to space - getRoles error',
      };
    }

    const spaceRole = roles.items.find((x) => x.name === role);

    if (spaceRole === undefined) {
      return {
        state: 'error',
        error: `Failed to invite to space - could not find the role ${role}`,
      };
    }

    // Role found, all good. First invite them to space as that role, then as
    // admin via email alias
    const [inviteUserToOrgError, inviteUserToOrg] = await catchify(
      client.rawRequest({
        method: 'POST',
        url: `https://api.contentful.com/organizations/${organizationId}/invitations`,
        data: {
          email,
          role: 'member',
        },
      }),
    );

    userInvite = inviteUserToOrg;

    if (
      (inviteUserToOrgError !== null || !inviteUserToOrg) &&
      isUserAlreadyInOrgError(inviteUserToOrgError) === false
    ) {
      console.error(inviteUserToOrgError);
      return {
        state: 'error',
        error: 'Failed to invite to space - invitations error',
      };
    }

    if (currentUser.email === email) {
      // This user will be added to space as admin automatically, we need to
      // change the role
      const [spaceMembershipsError, spaceMemberships] = await catchify(
        client.getSpace(spaceId).then((space) => space.getSpaceMemberships()),
      );

      if (spaceMembershipsError !== null) {
        console.error(spaceMembershipsError);
        return {
          state: 'error',
          error: 'Failed to invite to space - getSpaceMemberships error',
        };
      }

      const [updateUserRoleError] = await catchify(
        client.rawRequest({
          method: 'PUT',
          url: `https://api.contentful.com/spaces/${spaceId}/space_memberships/${spaceMemberships.items[0]?.sys.id}`,
          data: {
            admin: false,
            roles: [
              {
                sys: {
                  type: 'Link',
                  linkType: 'Role',
                  id: spaceRole.sys.id,
                },
              },
            ],
          },
        }),
      );

      if (updateUserRoleError !== null) {
        console.error(updateUserRoleError);
        return {
          state: 'error',
          error: 'Failed to invite to space - space_memberships PUT error',
        };
      }
    } else {
      const [inviteUserToSpaceError, inviteUserToSpace] = await catchify(
        client.rawRequest({
          method: 'POST',
          url: `https://api.contentful.com/spaces/${spaceId}/space_memberships`,
          data: {
            admin: false,
            email,
            roles: [
              {
                sys: {
                  type: 'Link',
                  linkType: 'Role',
                  id: spaceRole.sys.id,
                },
              },
            ],
          },
        }),
      );

      if (
        (inviteUserToSpaceError !== null || !inviteUserToSpace) &&
        isUserAlreadyInSpaceError(inviteUserToSpaceError) === false
      ) {
        console.error(inviteUserToSpaceError);
        return {
          state: 'error',
          error: 'Failed to invite to space - space_memberships error',
        };
      }
    }

    // Now invite email alias as admin
    const [inviteAliasUserToOrgError, inviteAliasUserToOrg] = await catchify(
      client.rawRequest({
        method: 'POST',
        url: `https://api.contentful.com/organizations/${organizationId}/invitations`,
        data: {
          email: email.replace('@', '+admin@'),
          role: 'member',
        },
      }),
    );

    if (
      (inviteAliasUserToOrgError !== null || !inviteAliasUserToOrg) &&
      isUserAlreadyInOrgError(inviteAliasUserToOrgError) === false
    ) {
      console.error(inviteAliasUserToOrgError);
      return {
        state: 'error',
        error: 'Failed to invite alias to space - invitations error',
      };
    }

    const [inviteAliasUserToSpaceError, inviteAliasUserToSpace] =
      await catchify(
        client.rawRequest({
          method: 'POST',
          url: `https://api.contentful.com/spaces/${spaceId}/space_memberships`,
          data: {
            admin: true,
            email: email.replace('@', '+admin@'),
          },
        }),
      );

    if (
      (inviteAliasUserToSpaceError !== null || !inviteAliasUserToSpace) &&
      isUserAlreadyInSpaceError(inviteAliasUserToSpaceError) === false
    ) {
      console.error(inviteAliasUserToSpaceError);
      return {
        state: 'error',
        error: 'Failed to invite alias to space - space_memberships error',
      };
    }
  }

  return {
    state: 'success',
    meta:
      userInvite === null
        ? undefined
        : {
            invitationUrl: userInvite.sys.invitationUrl,
          },
  };
};

module.exports = inviteToSpace;
