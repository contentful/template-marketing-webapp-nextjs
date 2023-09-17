import * as Types from '../../../../../lib/__generated/graphql.types';

import { AmTestimonialFieldsFragment } from '../../ctf-testimonial/__generated/ctf-testimonial.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AmTestimonialFieldsFragmentDoc } from '../../ctf-testimonial/__generated/ctf-testimonial.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmTestimonialsBlockFieldsFragment = { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string }, testimonialsCollection?: { __typename?: 'AmTestimonialsBlockTestimonialsCollection', items: Array<(
      { __typename?: 'AmTestimonial' }
      & AmTestimonialFieldsFragment
    ) | null> } | null };

export type CtfTestimonialsBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfTestimonialsBlockQuery = { __typename?: 'Query', amTestimonialsBlock?: (
    { __typename?: 'AmTestimonialsBlock' }
    & AmTestimonialsBlockFieldsFragment
  ) | null };

export const AmTestimonialsBlockFieldsFragmentDoc = `
    fragment AmTestimonialsBlockFields on AmTestimonialsBlock {
  __typename
  sys {
    id
  }
  testimonialsCollection(limit: 5) {
    items {
      ...AmTestimonialFields
    }
  }
}
    `;
export const CtfTestimonialsBlockDocument = `
    query CtfTestimonialsBlock($id: String!, $locale: String, $preview: Boolean) {
  amTestimonialsBlock(id: $id, locale: $locale, preview: $preview) {
    ...AmTestimonialsBlockFields
  }
}
    ${AmTestimonialsBlockFieldsFragmentDoc}
${AmTestimonialFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfTestimonialsBlockQuery = <
      TData = CtfTestimonialsBlockQuery,
      TError = unknown
    >(
      variables: CtfTestimonialsBlockQueryVariables,
      options?: UseQueryOptions<CtfTestimonialsBlockQuery, TError, TData>
    ) =>
    useQuery<CtfTestimonialsBlockQuery, TError, TData>(
      ['CtfTestimonialsBlock', variables],
      customFetcher<CtfTestimonialsBlockQuery, CtfTestimonialsBlockQueryVariables>(CtfTestimonialsBlockDocument, variables),
      options
    );

useCtfTestimonialsBlockQuery.getKey = (variables: CtfTestimonialsBlockQueryVariables) => ['CtfTestimonialsBlock', variables];
;

useCtfTestimonialsBlockQuery.fetcher = (variables: CtfTestimonialsBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTestimonialsBlockQuery, CtfTestimonialsBlockQueryVariables>(CtfTestimonialsBlockDocument, variables, options);