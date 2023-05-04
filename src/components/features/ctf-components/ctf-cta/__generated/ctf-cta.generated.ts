import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtaFieldsFragment = { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null };

export type CtfCtaQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCtaQuery = { __typename?: 'Query', componentCta?: (
    { __typename?: 'ComponentCta' }
    & CtaFieldsFragment
  ) | null };

export const CtaFieldsFragmentDoc = `
    fragment CtaFields on ComponentCta {
  __typename
  sys {
    id
  }
  headline
  subline {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  urlParameters
  colorPalette
}
    `;
export const CtfCtaDocument = `
    query CtfCta($id: String!, $locale: String, $preview: Boolean) {
  componentCta(id: $id, locale: $locale, preview: $preview) {
    ...CtaFields
  }
}
    ${CtaFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;
export const useCtfCtaQuery = <
      TData = CtfCtaQuery,
      TError = unknown
    >(
      variables: CtfCtaQueryVariables,
      options?: UseQueryOptions<CtfCtaQuery, TError, TData>
    ) =>
    useQuery<CtfCtaQuery, TError, TData>(
      ['CtfCta', variables],
      customFetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables),
      options
    );

useCtfCtaQuery.getKey = (variables: CtfCtaQueryVariables) => ['CtfCta', variables];
;

useCtfCtaQuery.fetcher = (variables: CtfCtaQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables, options);