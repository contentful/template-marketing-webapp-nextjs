import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfHeroBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: (
    { __typename?: 'ComponentHeroBanner' }
    & HeroBannerFieldsFragment
  ) | null };

export const HeroBannerFieldsFragmentDoc = `
    fragment HeroBannerFields on ComponentHeroBanner {
  __typename
  sys {
    id
  }
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
export const CtfHeroBannerDocument = `
    query CtfHeroBanner($id: String!, $locale: String, $preview: Boolean) {
  componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
    ...HeroBannerFields
  }
}
    ${HeroBannerFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfHeroBannerQuery = <
      TData = CtfHeroBannerQuery,
      TError = unknown
    >(
      variables: CtfHeroBannerQueryVariables,
      options?: UseQueryOptions<CtfHeroBannerQuery, TError, TData>
    ) =>
    useQuery<CtfHeroBannerQuery, TError, TData>(
      ['CtfHeroBanner', variables],
      customFetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables),
      options
    );

useCtfHeroBannerQuery.getKey = (variables: CtfHeroBannerQueryVariables) => ['CtfHeroBanner', variables];
;

useCtfHeroBannerQuery.fetcher = (variables: CtfHeroBannerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables, options);