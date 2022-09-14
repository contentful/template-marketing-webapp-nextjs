const path = require('path');
const catchify = require('catchify');
const contentfulImport = require('contentful-import');

const importContent = async (input) => {
  const { spaceId, cmaToken } = input;

  const pathToImportFile = path.resolve(
    __dirname,
    '../../content-backups/export-fintech-space-content.json',
  );

  const [contentfulSpaceImportError] = await catchify(
    contentfulImport({
      contentFile: pathToImportFile,
      spaceId,
      managementToken: cmaToken,
    }),
  );

  if (contentfulSpaceImportError !== null) {
    console.error(contentfulSpaceImportError);
    return {
      state: 'error',
      error: 'Failed to import content - contentful space import error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = importContent;
