import * as Types from '../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetchData } from '@src/lib/fetcher';
export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type HeroBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type HeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: (
    { __typename?: 'ComponentHeroBanner' }
    & HeroBannerFieldsFragment
  ) | null };

export const HeroBannerFieldsFragmentDoc = `
    fragment HeroBannerFields on ComponentHeroBanner {
  sys {
    id
  }
  internalName
  __typename
  headline
  bodyText {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  image {
    ...AssetFields
  }
  imageStyle
  heroSize
  colorPalette
}
    `;
export const HeroBannerDocument = `
    query HeroBanner($id: String!, $locale: String, $preview: Boolean) {
  componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
    ...HeroBannerFields
  }
}
    ${HeroBannerFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useHeroBannerQuery = <
      TData = HeroBannerQuery,
      TError = unknown
    >(
      variables: HeroBannerQueryVariables,
      options?: UseQueryOptions<HeroBannerQuery, TError, TData>
    ) =>
    useQuery<HeroBannerQuery, TError, TData>(
      ['HeroBanner', variables],
      useFetchData<HeroBannerQuery, HeroBannerQueryVariables>(HeroBannerDocument).bind(null, variables),
      options
    );