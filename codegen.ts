import { CodegenConfig } from '@graphql-codegen/cli';

import { fetchParams, graphqlEndpoint } from './src/lib/fetcherConfig';

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [graphqlEndpoint]: fetchParams,
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
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: {
          func: '@src/lib/fetcher#useFetchData',
          isReactHook: true,
        },
      },
    },
  },
};

export default config;
