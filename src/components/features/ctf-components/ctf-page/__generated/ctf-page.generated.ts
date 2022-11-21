import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint as string, {
    method: "POST",
    ...(fetchConfig.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type CtfPageFieldsFragment = { __typename?: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<(
      { __typename?: 'ComponentCta' }
      & ComponentReferenceFields_ComponentCta_Fragment
    ) | (
      { __typename?: 'ComponentDuplex' }
      & ComponentReferenceFields_ComponentDuplex_Fragment
    ) | (
      { __typename?: 'ComponentHeroBanner' }
      & ComponentReferenceFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename?: 'ComponentInfoBlock' }
      & ComponentReferenceFields_ComponentInfoBlock_Fragment
    ) | (
      { __typename?: 'ComponentQuote' }
      & ComponentReferenceFields_ComponentQuote_Fragment
    ) | (
      { __typename?: 'ComponentTextBlock' }
      & ComponentReferenceFields_ComponentTextBlock_Fragment
    ) | null> } | null, pageContent?: (
    { __typename?: 'ComponentProductTable' }
    & ComponentReferenceFields_ComponentProductTable_Fragment
  ) | (
    { __typename?: 'TopicBusinessInfo' }
    & ComponentReferenceFields_TopicBusinessInfo_Fragment
  ) | (
    { __typename?: 'TopicProduct' }
    & ComponentReferenceFields_TopicProduct_Fragment
  ) | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<(
      { __typename?: 'ComponentCta' }
      & ComponentReferenceFields_ComponentCta_Fragment
    ) | (
      { __typename?: 'ComponentDuplex' }
      & ComponentReferenceFields_ComponentDuplex_Fragment
    ) | (
      { __typename?: 'ComponentHeroBanner' }
      & ComponentReferenceFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename?: 'ComponentInfoBlock' }
      & ComponentReferenceFields_ComponentInfoBlock_Fragment
    ) | (
      { __typename?: 'ComponentQuote' }
      & ComponentReferenceFields_ComponentQuote_Fragment
    ) | (
      { __typename?: 'ComponentTextBlock' }
      & ComponentReferenceFields_ComponentTextBlock_Fragment
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

export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
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
      ...ComponentReferenceFields
    }
  }
  pageContent {
    ...ComponentReferenceFields
  }
  extraSectionCollection(limit: 20) {
    items {
      ...ComponentReferenceFields
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
${ComponentReferenceFieldsFragmentDoc}`;
export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables: CtfPageQueryVariables,
      options?: UseQueryOptions<CtfPageQuery, TError, TData>
    ) =>
    useQuery<CtfPageQuery, TError, TData>(
      ['CtfPage', variables],
      fetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
      options
    );

useCtfPageQuery.getKey = (variables: CtfPageQueryVariables) => ['CtfPage', variables];
;

useCtfPageQuery.fetcher = (variables: CtfPageQueryVariables) => fetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables);