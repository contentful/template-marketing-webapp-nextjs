import path from 'path';

import contentfulImport from 'contentful-import';

import { runStep } from '../util/run-step';
import { ProvisionStep } from './types';

import catchify from 'catchify';

interface ImportContentProps {
  spaceId: string;
  cmaToken: string;
}

interface ImportContentPayload {
  contentfulSpaceImport: unknown;
}

const importContent: ProvisionStep<ImportContentProps, ImportContentPayload> = async ({
  spaceId,
  cmaToken,
}) => {
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
    throw new Error('Failed to import content - contentful space import error');
  }

  return {
    contentfulSpaceImport,
  };
};

export const stepImportContent = (props: ImportContentProps) =>
  runStep<ImportContentPayload>(
    () => importContent(props),
    {
      label: 'Import content',
      abortOnError: true,
    },
    {
      spaceId: props.spaceId,
      cmaToken: props.cmaToken,
    },
  );
