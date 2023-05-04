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

export type PageContentFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable' };

export type PageContentFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo' };

export type PageContentFields_TopicProduct_Fragment = { __typename: 'TopicProduct' };

export type PageContentFieldsFragment = PageContentFields_ComponentProductTable_Fragment | PageContentFields_TopicBusinessInfo_Fragment | PageContentFields_TopicProduct_Fragment;

export type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

export type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

export type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

export type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

export type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

export type PageExtraSectionItemFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageExtraSectionItemFieldsFragment = PageExtraSectionItemFields_ComponentCta_Fragment | PageExtraSectionItemFields_ComponentDuplex_Fragment | PageExtraSectionItemFields_ComponentHeroBanner_Fragment | PageExtraSectionItemFields_ComponentInfoBlock_Fragment | PageExtraSectionItemFields_ComponentQuote_Fragment | PageExtraSectionItemFields_ComponentTextBlock_Fragment;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<(
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
    { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_ComponentProductTable_Fragment
  ) | (
    { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_TopicBusinessInfo_Fragment
  ) | (
    { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
    & PageContentFields_TopicProduct_Fragment
  ) | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<(
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

export type CtfPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & CtfPageFieldsFragment
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
export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
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
export const CtfPageDocument = `
    query CtfPage($slug: String!, $locale: String, $preview: Boolean) {
  pageCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...CtfPageFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PageTopSectionFieldsFragmentDoc}
${PageContentFieldsFragmentDoc}
${PageExtraSectionItemFieldsFragmentDoc}`;
export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables: CtfPageQueryVariables,
      options?: UseQueryOptions<CtfPageQuery, TError, TData>
    ) =>
    useQuery<CtfPageQuery, TError, TData>(
      ['CtfPage', variables],
      customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
      options
    );

useCtfPageQuery.getKey = (variables: CtfPageQueryVariables) => ['CtfPage', variables];
;

useCtfPageQuery.fetcher = (variables: CtfPageQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables, options);