import path from 'path';

import contentfulImport from 'contentful-import';

import { ProvisionStep } from './types';

import catchify from 'catchify';

interface ImportContentProps {
  spaceId: string;
  cmaToken: string;
}

export const importContent: ProvisionStep<ImportContentProps> = async ({ spaceId, cmaToken }) => {
  const pathToImportFile = path.resolve(
    __dirname,
    '../../content-backups/export-fintech-space-content.json',
  );

  const [contentfulSpaceImportError, contentfulSpaceImport] = await catchify(
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
    payload: contentfulSpaceImport as any, // TODO: fix types for the contentful-import library
  };
};
