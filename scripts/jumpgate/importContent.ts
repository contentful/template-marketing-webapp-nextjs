import catchify from 'catchify';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
const contentfulImport = require('contentful-import');

interface ImportContentModelInputInterface {
  spaceId: string;
  cmaToken: string;
}

interface ImportContentModelSuccessResultInterface {
  state: 'success';
}

interface ImportContentModelErrorResultInterface {
  state: 'error';
  error: string;
}

const importContent = async (
  input: ImportContentModelInputInterface,
): Promise<
  | ImportContentModelSuccessResultInterface
  | ImportContentModelErrorResultInterface
> => {
  const { spaceId, cmaToken } = input;

  const [contentfulImportError] = await catchify(
    contentfulImport({
      contentFile: path.resolve(__dirname, './jumpgate-coin-content.json'),
      spaceId,
      managementToken: cmaToken,
      skipContentModel: true,
    }),
  );

  if (contentfulImportError !== null) {
    return {
      state: 'error',
      error: 'Something went wrong during the content import',
    };
  }

  return {
    state: 'success',
  };
};

export default importContent;
