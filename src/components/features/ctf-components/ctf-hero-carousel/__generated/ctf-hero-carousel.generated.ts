import * as Types from '../../../../../lib/__generated/graphql.types';

import { CtfProductDetailPageFieldsFragment, PageTopSectionFields_ComponentCta_Fragment, PageTopSectionFields_ComponentDuplex_Fragment, PageTopSectionFields_ComponentHeroBanner_Fragment, PageTopSectionFields_ComponentInfoBlock_Fragment, PageTopSectionFields_ComponentQuote_Fragment, PageTopSectionFields_ComponentTextBlock_Fragment, PageContentFields_ComponentHeroCarousel_Fragment, PageContentFields_ComponentProductTable_Fragment, PageContentFields_TopicBusinessInfo_Fragment, PageContentFields_TopicProduct_Fragment, PageExtraSectionItemFields_ComponentCta_Fragment, PageExtraSectionItemFields_ComponentDuplex_Fragment, PageExtraSectionItemFields_ComponentHeroBanner_Fragment, PageExtraSectionItemFields_ComponentInfoBlock_Fragment, PageExtraSectionItemFields_ComponentQuote_Fragment, PageExtraSectionItemFields_ComponentTextBlock_Fragment } from '../../ctf-product-detail-page/__generated/ctf-product-detail-page.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { CtfProductDetailPageFieldsFragmentDoc, PageTopSectionFieldsFragmentDoc, PageContentFieldsFragmentDoc, PageExtraSectionItemFieldsFragmentDoc } from '../../ctf-product-detail-page/__generated/ctf-product-detail-page.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type HeroCarouselFieldsFragment = { __typename: 'ComponentHeroCarousel', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, carouselProductsCollection?: { __typename?: 'ComponentHeroCarouselCarouselProductsCollection', items: Array<{ __typename: 'TopicProduct', internalName?: string | null, name?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename?: 'Asset', title?: string | null, url?: string | null, description?: string | null } | null, targetPage?: (
        { __typename?: 'ProductDetailPage' }
        & CtfProductDetailPageFieldsFragment
      ) | null } | null> } | null };

export type CtfHeroCarouselQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfHeroCarouselQuery = { __typename?: 'Query', componentHeroCarousel?: (
    { __typename?: 'ComponentHeroCarousel' }
    & HeroCarouselFieldsFragment
  ) | null };

export const HeroCarouselFieldsFragmentDoc = `
    fragment HeroCarouselFields on ComponentHeroCarousel {
  __typename
  sys {
    id
  }
  internalName
  carouselProductsCollection {
    items {
      __typename
      sys {
        id
      }
      __typename
      sys {
        id
      }
      internalName
      name
      featuredImage {
        title
        url
        description
      }
      targetPage {
        ...CtfProductDetailPageFields
      }
    }
  }
}
    `;
export const CtfHeroCarouselDocument = `
    query CtfHeroCarousel($id: String!, $locale: String, $preview: Boolean) {
  componentHeroCarousel(id: $id, locale: $locale, preview: $preview) {
    ...HeroCarouselFields
  }
}
    ${HeroCarouselFieldsFragmentDoc}
${CtfProductDetailPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PageTopSectionFieldsFragmentDoc}
${PageContentFieldsFragmentDoc}
${PageExtraSectionItemFieldsFragmentDoc}`;
export const useCtfHeroCarouselQuery = <
      TData = CtfHeroCarouselQuery,
      TError = unknown
    >(
      variables: CtfHeroCarouselQueryVariables,
      options?: UseQueryOptions<CtfHeroCarouselQuery, TError, TData>
    ) =>
    useQuery<CtfHeroCarouselQuery, TError, TData>(
      ['CtfHeroCarousel', variables],
      customFetcher<CtfHeroCarouselQuery, CtfHeroCarouselQueryVariables>(CtfHeroCarouselDocument, variables),
      options
    );

useCtfHeroCarouselQuery.getKey = (variables: CtfHeroCarouselQueryVariables) => ['CtfHeroCarousel', variables];
;

useCtfHeroCarouselQuery.fetcher = (variables: CtfHeroCarouselQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfHeroCarouselQuery, CtfHeroCarouselQueryVariables>(CtfHeroCarouselDocument, variables, options);