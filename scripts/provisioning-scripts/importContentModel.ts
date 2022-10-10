import path from 'path';

import contentfulImport from 'contentful-import';

import { runStep } from '../util/run-step';
import { ProvisionStep } from './types';

import catchify from 'catchify';

interface ImportContentModelProps {
  spaceId: string;
  cmaToken: string;
}

interface ImportContentModelPayload {
  contentfulImportData: unknown;
}

const importContentModel: ProvisionStep<
  ImportContentModelProps,
  ImportContentModelPayload
> = async ({ spaceId, cmaToken }) => {
  const pathToImportFile = path.resolve(
    __dirname,
    '../../content-backups/export-fintech-space-content.json',
  );

  const [contentfulSpaceImportError, contentfulImportData] = await catchify(
    contentfulImport({
      contentFile: pathToImportFile,
      spaceId,
      managementToken: cmaToken,
      contentModelOnly: true,
    }),
  );

  if (contentfulSpaceImportError !== null) {
    console.error(contentfulSpaceImportError);

    throw new Error('Failed to import content model - contentful space import error');
  }

  return {
    contentfulImportData,
  };
};

export const stepImportContentModel = async (props: ImportContentModelProps) =>
  runStep<ImportContentModelPayload>(
    () => importContentModel(props),
    {
      label: 'Import content model',
      abortOnError: true,
    },
    {
      spaceId: props.spaceId,
      cmaToken: props.cmaToken,
    },
  );
