const { createClient } = require('contentful-management');
const catchify = require('catchify');

const createPartialBackupEnvironment = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [backupEnvironmentError, backupEnvironment] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/environments/partial-backup-content-only`,
      data: {
        name: 'partial-backup-content-only',
      },
    }),
  );

  if (backupEnvironmentError !== null || !backupEnvironment) {
    console.error(backupEnvironmentError);
    return {
      state: 'error',
      error:
        'Failed to create a partial backup environment - createEnvironment error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = createPartialBackupEnvironment;
