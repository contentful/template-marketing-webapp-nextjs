import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PageTopSectionFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

export type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

export type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

export type PageTopSectionFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

export type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

export type PageTopSectionFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageTopSectionFieldsFragment = PageTopSectionFields_ComponentCta_Fragment | PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentInfoBlock_Fragment | PageTopSectionFields_ComponentQuote_Fragment | PageTopSectionFields_ComponentTextBlock_Fragment;

export type PageContentFields_ComponentHeroCarousel_Fragment = { __typename: 'ComponentHeroCarousel' };

export type PageContentFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable' };

export type PageContentFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo' };

export type PageContentFields_TopicProduct_Fragment = { __typename: 'TopicProduct' };

export type PageContentFieldsFragment = PageContentFields_ComponentHeroCarousel_Fragment | PageContentFields_ComponentProductTable_Fragment | PageContentFields_TopicBusinessInfo_Fragment | PageContentFields_TopicProduct_Fragment;

export type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

export type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

export type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

export type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

export type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

export type PageExtraSectionItemFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageExtraSectionItemFieldsFragment = PageExtraSectionItemFields_ComponentCta_Fragment | PageExtraSectionItemFields_ComponentDuplex_Fragment | PageExtraSectionItemFields_ComponentHeroBanner_Fragment | PageExtraSectionItemFields_ComponentInfoBlock_Fragment | PageExtraSectionItemFields_ComponentQuote_Fragment | PageExtraSectionItemFields_ComponentTextBlock_Fragment;

export type CtfProductDetailPageFieldsFragment = { __typename: 'ProductDetailPage', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, topSectionCollection?: { __typename?: 'ProductDetailPageTopSectionCollection', items: Array<(
      { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentCta_Fragment
    ) | (
      { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentDuplex_Fragment
    ) | (
      { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentInfoBlock_Fragment
    ) | (
      { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentQuote_Fragment
    ) | (
      { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentTextBlock_Fragment
    ) | null> } | null, pageContent?: (
    { __typename: 'ComponentHeroCarousel', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_ComponentHeroCarousel_Fragment
  ) | (
    { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_ComponentProductTable_Fragment
  ) | (
    { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_TopicBusinessInfo_Fragment
  ) | (
    { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_TopicProduct_Fragment
  ) | null, extraSectionCollection?: { __typename?: 'ProductDetailPageExtraSectionCollection', items: Array<(
      { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentCta_Fragment
    ) | (
      { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentDuplex_Fragment
    ) | (
      { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentInfoBlock_Fragment
    ) | (
      { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentQuote_Fragment
    ) | (
      { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      & PageExtraSectionItemFields_ComponentTextBlock_Fragment
    ) | null> } | null };

export type CtfProductDetailPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfProductDetailPageQuery = { __typename?: 'Query', productDetailPageCollection?: { __typename?: 'ProductDetailPageCollection', items: Array<(
      { __typename?: 'ProductDetailPage' }
      & CtfProductDetailPageFieldsFragment
    ) | null> } | null };

export const PageTopSectionFieldsFragmentDoc = `
    fragment PageTopSectionFields on PageTopSectionItem {
  __typename
}
    `;
export const PageContentFieldsFragmentDoc = `
    fragment PageContentFields on PagePageContent {
  __typename
}
    `;
export const PageExtraSectionItemFieldsFragmentDoc = `
    fragment PageExtraSectionItemFields on PageExtraSectionItem {
  __typename
}
    `;
export const CtfProductDetailPageFieldsFragmentDoc = `
    fragment CtfProductDetailPageFields on ProductDetailPage {
  __typename
  sys {
    id
  }
  pageName
  internalName: pageName
  slug
  seo {
    title
    description
    image {
      ...AssetFields
    }
    noIndex
    noFollow
  }
  topSectionCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...PageTopSectionFields
    }
  }
  pageContent {
    ... on Entry {
      __typename
      sys {
        id
      }
    }
    ...PageContentFields
  }
  extraSectionCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...PageExtraSectionItemFields
    }
  }
}
    `;
export const CtfProductDetailPageDocument = `
    query CtfProductDetailPage($slug: String!, $locale: String, $preview: Boolean) {
  productDetailPageCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...CtfProductDetailPageFields
    }
  }
}
    ${CtfProductDetailPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PageTopSectionFieldsFragmentDoc}
${PageContentFieldsFragmentDoc}
${PageExtraSectionItemFieldsFragmentDoc}`;
export const useCtfProductDetailPageQuery = <
      TData = CtfProductDetailPageQuery,
      TError = unknown
    >(
      variables: CtfProductDetailPageQueryVariables,
      options?: UseQueryOptions<CtfProductDetailPageQuery, TError, TData>
    ) =>
    useQuery<CtfProductDetailPageQuery, TError, TData>(
      ['CtfProductDetailPage', variables],
      customFetcher<CtfProductDetailPageQuery, CtfProductDetailPageQueryVariables>(CtfProductDetailPageDocument, variables),
      options
    );

useCtfProductDetailPageQuery.getKey = (variables: CtfProductDetailPageQueryVariables) => ['CtfProductDetailPage', variables];
;

useCtfProductDetailPageQuery.fetcher = (variables: CtfProductDetailPageQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfProductDetailPageQuery, CtfProductDetailPageQueryVariables>(CtfProductDetailPageDocument, variables, options);