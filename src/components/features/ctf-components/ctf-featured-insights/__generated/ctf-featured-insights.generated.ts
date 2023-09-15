import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmFeaturedInsightsFieldsFragment = { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } };

export type CtfFeaturedInsightsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfFeaturedInsightsQuery = { __typename?: 'Query', amFeaturedInsights?: (
    { __typename?: 'AmFeaturedInsights' }
    & AmFeaturedInsightsFieldsFragment
  ) | null };

export const AmFeaturedInsightsFieldsFragmentDoc = `
    fragment AmFeaturedInsightsFields on AmFeaturedInsights {
  __typename
  sys {
    id
  }
}
    `;
export const CtfFeaturedInsightsDocument = `
    query CtfFeaturedInsights($id: String!, $locale: String, $preview: Boolean) {
  amFeaturedInsights(id: $id, locale: $locale, preview: $preview) {
    ...AmFeaturedInsightsFields
  }
}
    ${AmFeaturedInsightsFieldsFragmentDoc}`;
export const useCtfFeaturedInsightsQuery = <
      TData = CtfFeaturedInsightsQuery,
      TError = unknown
    >(
      variables: CtfFeaturedInsightsQueryVariables,
      options?: UseQueryOptions<CtfFeaturedInsightsQuery, TError, TData>
    ) =>
    useQuery<CtfFeaturedInsightsQuery, TError, TData>(
      ['CtfFeaturedInsights', variables],
      customFetcher<CtfFeaturedInsightsQuery, CtfFeaturedInsightsQueryVariables>(CtfFeaturedInsightsDocument, variables),
      options
    );

useCtfFeaturedInsightsQuery.getKey = (variables: CtfFeaturedInsightsQueryVariables) => ['CtfFeaturedInsights', variables];
;

useCtfFeaturedInsightsQuery.fetcher = (variables: CtfFeaturedInsightsQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFeaturedInsightsQuery, CtfFeaturedInsightsQueryVariables>(CtfFeaturedInsightsDocument, variables, options);