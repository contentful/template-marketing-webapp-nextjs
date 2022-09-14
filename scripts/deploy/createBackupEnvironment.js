const { createClient } = require('contentful-management');
const catchify = require('catchify');

const createBackupEnvironment = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [backupEnvironmentError, backupEnvironment] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/environments/full-backup-content-and-apps`,
      data: {
        name: 'full-backup-content-and-apps',
      },
    }),
  );

  if (backupEnvironmentError !== null || !backupEnvironment) {
    console.error(backupEnvironmentError);
    return {
      state: 'error',
      error: 'Failed to create a backup environment - createEnvironment error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = createBackupEnvironment;
