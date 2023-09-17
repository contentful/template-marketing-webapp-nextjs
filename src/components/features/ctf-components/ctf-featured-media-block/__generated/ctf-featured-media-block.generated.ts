import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PodcastFieldsFragment = { __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type VideoFieldsFragment = { __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type AmFeaturedMediaBlockFieldsFragment = { __typename: 'AmFeaturedMediaBlock', headerText?: string | null, sys: { __typename?: 'Sys', id: string }, featuredVideo?: (
    { __typename?: 'AmVideos' }
    & VideoFieldsFragment
  ) | null, featuredPodcast?: (
    { __typename?: 'AmPodcasts' }
    & PodcastFieldsFragment
  ) | null, podcastsCollection?: { __typename?: 'AmFeaturedMediaBlockPodcastsCollection', items: Array<(
      { __typename?: 'AmPodcasts' }
      & PodcastFieldsFragment
    ) | null> } | null, videosCollection?: { __typename?: 'AmFeaturedMediaBlockVideosCollection', items: Array<(
      { __typename?: 'AmVideos' }
      & VideoFieldsFragment
    ) | null> } | null };

export type CtfFeaturedMediaBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfFeaturedMediaBlockQuery = { __typename?: 'Query', amFeaturedMediaBlock?: (
    { __typename?: 'AmFeaturedMediaBlock' }
    & AmFeaturedMediaBlockFieldsFragment
  ) | null };

export const VideoFieldsFragmentDoc = `
    fragment VideoFields on AmVideos {
  sys {
    id
    firstPublishedAt
  }
  name
  slug
  shortDescription
  featuredImage {
    ...AssetFields
  }
}
    `;
export const PodcastFieldsFragmentDoc = `
    fragment PodcastFields on AmPodcasts {
  sys {
    id
    firstPublishedAt
  }
  name
  slug
  shortDescription
  featuredImage {
    ...AssetFields
  }
}
    `;
export const AmFeaturedMediaBlockFieldsFragmentDoc = `
    fragment AmFeaturedMediaBlockFields on AmFeaturedMediaBlock {
  __typename
  sys {
    id
  }
  headerText
  featuredVideo {
    ...VideoFields
  }
  featuredPodcast {
    ...PodcastFields
  }
  podcastsCollection(limit: 5) {
    items {
      ...PodcastFields
    }
  }
  videosCollection(limit: 5) {
    items {
      ...VideoFields
    }
  }
}
    `;
export const CtfFeaturedMediaBlockDocument = `
    query CtfFeaturedMediaBlock($id: String!, $locale: String, $preview: Boolean) {
  amFeaturedMediaBlock(id: $id, locale: $locale, preview: $preview) {
    ...AmFeaturedMediaBlockFields
  }
}
    ${AmFeaturedMediaBlockFieldsFragmentDoc}
${VideoFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PodcastFieldsFragmentDoc}`;
export const useCtfFeaturedMediaBlockQuery = <
      TData = CtfFeaturedMediaBlockQuery,
      TError = unknown
    >(
      variables: CtfFeaturedMediaBlockQueryVariables,
      options?: UseQueryOptions<CtfFeaturedMediaBlockQuery, TError, TData>
    ) =>
    useQuery<CtfFeaturedMediaBlockQuery, TError, TData>(
      ['CtfFeaturedMediaBlock', variables],
      customFetcher<CtfFeaturedMediaBlockQuery, CtfFeaturedMediaBlockQueryVariables>(CtfFeaturedMediaBlockDocument, variables),
      options
    );

useCtfFeaturedMediaBlockQuery.getKey = (variables: CtfFeaturedMediaBlockQueryVariables) => ['CtfFeaturedMediaBlock', variables];
;

useCtfFeaturedMediaBlockQuery.fetcher = (variables: CtfFeaturedMediaBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFeaturedMediaBlockQuery, CtfFeaturedMediaBlockQueryVariables>(CtfFeaturedMediaBlockDocument, variables, options);