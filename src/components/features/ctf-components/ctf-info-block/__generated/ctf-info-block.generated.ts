import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type InfoBlockFieldsFragment = { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: (
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
  __typename
  sys {
    id
  }
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
      customFetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables),
      options
    );

useCtfInfoBlockQuery.getKey = (variables: CtfInfoBlockQueryVariables) => ['CtfInfoBlock', variables];
;

useCtfInfoBlockQuery.fetcher = (variables: CtfInfoBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables, options);