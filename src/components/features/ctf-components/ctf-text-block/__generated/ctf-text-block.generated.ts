import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type TextBlockFieldsFragment = { __typename: 'ComponentTextBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<(
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
          { __typename?: 'ComponentProductTable' }
          & ComponentReferenceFields_ComponentProductTable_Fragment
        ) | (
          { __typename?: 'ComponentQuote' }
          & ComponentReferenceFields_ComponentQuote_Fragment
        ) | (
          { __typename?: 'ComponentTextBlock' }
          & ComponentReferenceFields_ComponentTextBlock_Fragment
        ) | (
          { __typename?: 'FooterMenu' }
          & ComponentReferenceFields_FooterMenu_Fragment
        ) | (
          { __typename?: 'MenuGroup' }
          & ComponentReferenceFields_MenuGroup_Fragment
        ) | (
          { __typename?: 'NavigationMenu' }
          & ComponentReferenceFields_NavigationMenu_Fragment
        ) | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Seo' }
          & ComponentReferenceFields_Seo_Fragment
        ) | (
          { __typename?: 'TopicBusinessInfo' }
          & ComponentReferenceFields_TopicBusinessInfo_Fragment
        ) | (
          { __typename?: 'TopicPerson' }
          & ComponentReferenceFields_TopicPerson_Fragment
        ) | (
          { __typename?: 'TopicProduct' }
          & ComponentReferenceFields_TopicProduct_Fragment
        ) | (
          { __typename?: 'TopicProductFeature' }
          & ComponentReferenceFields_TopicProductFeature_Fragment
        ) | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null };

export type CtfTextBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfTextBlockQuery = { __typename?: 'Query', componentTextBlock?: (
    { __typename?: 'ComponentTextBlock' }
    & TextBlockFieldsFragment
  ) | null };

export const TextBlockFieldsFragmentDoc = `
    fragment TextBlockFields on ComponentTextBlock {
  __typename
  sys {
    id
  }
  headline
  subline
  body {
    json
    links {
      entries {
        block {
          ...ComponentReferenceFields
        }
      }
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  colorPalette
}
    `;
export const CtfTextBlockDocument = `
    query CtfTextBlock($id: String!, $locale: String, $preview: Boolean) {
  componentTextBlock(id: $id, locale: $locale, preview: $preview) {
    ...TextBlockFields
  }
}
    ${TextBlockFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfTextBlockQuery = <
      TData = CtfTextBlockQuery,
      TError = unknown
    >(
      variables: CtfTextBlockQueryVariables,
      options?: UseQueryOptions<CtfTextBlockQuery, TError, TData>
    ) =>
    useQuery<CtfTextBlockQuery, TError, TData>(
      ['CtfTextBlock', variables],
      customFetcher<CtfTextBlockQuery, CtfTextBlockQueryVariables>(CtfTextBlockDocument, variables),
      options
    );

useCtfTextBlockQuery.getKey = (variables: CtfTextBlockQueryVariables) => ['CtfTextBlock', variables];
;

useCtfTextBlockQuery.fetcher = (variables: CtfTextBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTextBlockQuery, CtfTextBlockQueryVariables>(CtfTextBlockDocument, variables, options);