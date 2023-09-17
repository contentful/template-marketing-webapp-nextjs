import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type FeaturedNewsFieldsFragment = { __typename?: 'NewsArticle', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type InsightsPageFieldsFragment = { __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type AmFeaturedInsightsFieldsFragment = { __typename: 'AmFeaturedInsights', headerText?: string | null, newsHeaderText?: string | null, enableNewsBlock?: boolean | null, sys: { __typename?: 'Sys', id: string }, featuredInsight?: (
    { __typename?: 'AmInsights' }
    & InsightsPageFieldsFragment
  ) | null, featuredNewsCollection?: { __typename?: 'AmFeaturedInsightsFeaturedNewsCollection', items: Array<(
      { __typename?: 'NewsArticle' }
      & FeaturedNewsFieldsFragment
    ) | null> } | null, additionalInsightsCollection?: { __typename?: 'AmFeaturedInsightsAdditionalInsightsCollection', items: Array<(
      { __typename?: 'AmInsights' }
      & InsightsPageFieldsFragment
    ) | null> } | null };

export type CtfFeaturedInsightsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfFeaturedInsightsQuery = { __typename?: 'Query', amFeaturedInsights?: (
    { __typename?: 'AmFeaturedInsights' }
    & AmFeaturedInsightsFieldsFragment
  ) | null };

export const InsightsPageFieldsFragmentDoc = `
    fragment InsightsPageFields on AmInsights {
  sys {
    id
    firstPublishedAt
  }
  name
  slug
  type
  featuredImage {
    ...AssetFields
  }
}
    `;
export const FeaturedNewsFieldsFragmentDoc = `
    fragment FeaturedNewsFields on NewsArticle {
  sys {
    id
    firstPublishedAt
  }
  name
  featuredImage {
    ...AssetFields
  }
  shortDescription
}
    `;
export const AmFeaturedInsightsFieldsFragmentDoc = `
    fragment AmFeaturedInsightsFields on AmFeaturedInsights {
  __typename
  sys {
    id
  }
  headerText
  newsHeaderText
  enableNewsBlock
  featuredInsight {
    ...InsightsPageFields
  }
  featuredNewsCollection(limit: 3) {
    items {
      ...FeaturedNewsFields
    }
  }
  additionalInsightsCollection(limit: 3) {
    items {
      ...InsightsPageFields
    }
  }
}
    `;
export const CtfFeaturedInsightsDocument = `
    query CtfFeaturedInsights($id: String!, $locale: String, $preview: Boolean) {
  amFeaturedInsights(id: $id, locale: $locale, preview: $preview) {
    ...AmFeaturedInsightsFields
  }
}
    ${AmFeaturedInsightsFieldsFragmentDoc}
${InsightsPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${FeaturedNewsFieldsFragmentDoc}`;
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