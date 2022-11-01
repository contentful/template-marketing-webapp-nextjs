import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint as string, {
    method: "POST",
    ...(fetchConfig.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type InfoBlockFieldsFragment = { __typename: 'ComponentInfoBlock', internalName?: string | null, headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null };

export type CtfInfoBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfInfoBlockQuery = { __typename?: 'Query', componentInfoBlock?: (
    { __typename?: 'ComponentInfoBlock' }
    & InfoBlockFieldsFragment
  ) | null };

export const InfoBlockFieldsFragmentDoc = `
    fragment InfoBlockFields on ComponentInfoBlock {
  sys {
    id
  }
  __typename
  internalName
  headline
  subline
  block1Image {
    ...AssetFields
  }
  block1Body {
    json
  }
  block2Image {
    ...AssetFields
  }
  block2Body {
    json
  }
  block3Image {
    ...AssetFields
  }
  block3Body {
    json
  }
  colorPalette
}
    `;
export const CtfInfoBlockDocument = `
    query CtfInfoBlock($id: String!, $locale: String, $preview: Boolean) {
  componentInfoBlock(id: $id, locale: $locale, preview: $preview) {
    ...InfoBlockFields
  }
}
    ${InfoBlockFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfInfoBlockQuery = <
      TData = CtfInfoBlockQuery,
      TError = unknown
    >(
      variables: CtfInfoBlockQueryVariables,
      options?: UseQueryOptions<CtfInfoBlockQuery, TError, TData>
    ) =>
    useQuery<CtfInfoBlockQuery, TError, TData>(
      ['CtfInfoBlock', variables],
      fetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables),
      options
    );

useCtfInfoBlockQuery.getKey = (variables: CtfInfoBlockQueryVariables) => ['CtfInfoBlock', variables];
;

useCtfInfoBlockQuery.fetcher = (variables: CtfInfoBlockQueryVariables) => fetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables);