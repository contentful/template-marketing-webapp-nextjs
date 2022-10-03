import path from 'path';

import contentfulImport from 'contentful-import';

import { ProvisionStep } from './types';

import catchify from 'catchify';

interface ImportContentModelProps {
  spaceId: string;
  cmaToken: string;
}

export const importContentModel: ProvisionStep<ImportContentModelProps> = async ({
  spaceId,
  cmaToken,
}) => {
  const pathToImportFile = path.resolve(
    __dirname,
    '../../content-backups/export-fintech-space-content.json',
  );

  const [contentfulSpaceImportError, contentFulImportData] = await catchify(
    contentfulImport({
      contentFile: pathToImportFile,
      spaceId,
      managementToken: cmaToken,
      contentModelOnly: true,
    }),
  );

  if (contentfulSpaceImportError !== null) {
    console.error(contentfulSpaceImportError);
    return {
      state: 'error',
      error: 'Failed to import content model - contentful space import error',
    };
  }

  return {
    state: 'success',
    payload: contentFulImportData as any, // TODO: fix types for the contentful-import library
  };
};
