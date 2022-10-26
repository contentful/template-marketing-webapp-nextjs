import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config({
  path: __dirname + '/.env',
});

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${String(
  process.env.CONFIG_CONTENTFUL_MAIN_SPACE_ID,
)}`;

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [graphqlEndpoint]: {
        headers: {
          Authorization: `Bearer ${process.env.CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    './src/lib/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    './src/lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './src/lib/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/**/*.graphql'],
    },
    './src/': {
      documents: ['./src/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'lib/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: ['typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: {
          endpoint: graphqlEndpoint,
          fetchParams: {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
            },
          },
        },
      },
    },
  },
};

export default config;
