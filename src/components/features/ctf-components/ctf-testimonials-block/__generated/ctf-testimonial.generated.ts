import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmTestimonialFieldsFragment = { __typename: 'AmTestimonial', testimonialBody?: string | null, witness?: string | null, witnessTitle?: string | null, sys: { __typename?: 'Sys', id: string }, featuredMedia?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, backgroundImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfTestimonialQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfTestimonialQuery = { __typename?: 'Query', amTestimonial?: (
    { __typename?: 'AmTestimonial' }
    & AmTestimonialFieldsFragment
  ) | null };

export const AmTestimonialFieldsFragmentDoc = `
    fragment AmTestimonialFields on AmTestimonial {
  __typename
  sys {
    id
  }
  testimonialBody
  witness
  witnessTitle
  featuredMedia {
    ...AssetFields
  }
  backgroundImage {
    ...AssetFields
  }
}
    `;
export const CtfTestimonialDocument = `
    query CtfTestimonial($id: String!, $locale: String, $preview: Boolean) {
  amTestimonial(id: $id, locale: $locale, preview: $preview) {
    ...AmTestimonialFields
  }
}
    ${AmTestimonialFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfTestimonialQuery = <
      TData = CtfTestimonialQuery,
      TError = unknown
    >(
      variables: CtfTestimonialQueryVariables,
      options?: UseQueryOptions<CtfTestimonialQuery, TError, TData>
    ) =>
    useQuery<CtfTestimonialQuery, TError, TData>(
      ['CtfTestimonial', variables],
      customFetcher<CtfTestimonialQuery, CtfTestimonialQueryVariables>(CtfTestimonialDocument, variables),
      options
    );

useCtfTestimonialQuery.getKey = (variables: CtfTestimonialQueryVariables) => ['CtfTestimonial', variables];
;

useCtfTestimonialQuery.fetcher = (variables: CtfTestimonialQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTestimonialQuery, CtfTestimonialQueryVariables>(CtfTestimonialDocument, variables, options);