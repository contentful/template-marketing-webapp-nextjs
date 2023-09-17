import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmCtaFeatureBlockieldsFragment = { __typename: 'AmCtaFeatureBlock', headline?: string | null, bodyCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, featuredMedia?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfCtaFeatureBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCtaFeatureBlockQuery = { __typename?: 'Query', amCtaFeatureBlock?: (
    { __typename?: 'AmCtaFeatureBlock' }
    & AmCtaFeatureBlockieldsFragment
  ) | null };

export const AmCtaFeatureBlockieldsFragmentDoc = `
    fragment AmCtaFeatureBlockields on AmCtaFeatureBlock {
  __typename
  sys {
    id
  }
  headline
  bodyCopy
  backgroundImage {
    ...AssetFields
  }
  ctaCopy
  ctaTargetLink
  featuredMedia {
    ...AssetFields
  }
}
    `;
export const CtfCtaFeatureBlockDocument = `
    query CtfCtaFeatureBlock($id: String!, $locale: String, $preview: Boolean) {
  amCtaFeatureBlock(id: $id, locale: $locale, preview: $preview) {
    ...AmCtaFeatureBlockields
  }
}
    ${AmCtaFeatureBlockieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfCtaFeatureBlockQuery = <
      TData = CtfCtaFeatureBlockQuery,
      TError = unknown
    >(
      variables: CtfCtaFeatureBlockQueryVariables,
      options?: UseQueryOptions<CtfCtaFeatureBlockQuery, TError, TData>
    ) =>
    useQuery<CtfCtaFeatureBlockQuery, TError, TData>(
      ['CtfCtaFeatureBlock', variables],
      customFetcher<CtfCtaFeatureBlockQuery, CtfCtaFeatureBlockQueryVariables>(CtfCtaFeatureBlockDocument, variables),
      options
    );

useCtfCtaFeatureBlockQuery.getKey = (variables: CtfCtaFeatureBlockQueryVariables) => ['CtfCtaFeatureBlock', variables];
;

useCtfCtaFeatureBlockQuery.fetcher = (variables: CtfCtaFeatureBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfCtaFeatureBlockQuery, CtfCtaFeatureBlockQueryVariables>(CtfCtaFeatureBlockDocument, variables, options);