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
export type BusinessInfoFieldsFragment = { __typename?: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<(
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
        ) | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null };

export type CtfBusinessInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfBusinessInfoQuery = { __typename?: 'Query', topicBusinessInfo?: (
    { __typename?: 'TopicBusinessInfo' }
    & BusinessInfoFieldsFragment
  ) | null };

export const BusinessInfoFieldsFragmentDoc = `
    fragment BusinessInfoFields on TopicBusinessInfo {
  name
  shortDescription
  featuredImage {
    ...AssetFields
  }
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
}
    `;
export const CtfBusinessInfoDocument = `
    query CtfBusinessInfo($id: String!, $locale: String, $preview: Boolean) {
  topicBusinessInfo(id: $id, preview: $preview, locale: $locale) {
    ...BusinessInfoFields
  }
}
    ${BusinessInfoFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;
export const useCtfBusinessInfoQuery = <
      TData = CtfBusinessInfoQuery,
      TError = unknown
    >(
      variables: CtfBusinessInfoQueryVariables,
      options?: UseQueryOptions<CtfBusinessInfoQuery, TError, TData>
    ) =>
    useQuery<CtfBusinessInfoQuery, TError, TData>(
      ['CtfBusinessInfo', variables],
      fetcher<CtfBusinessInfoQuery, CtfBusinessInfoQueryVariables>(CtfBusinessInfoDocument, variables),
      options
    );

useCtfBusinessInfoQuery.getKey = (variables: CtfBusinessInfoQueryVariables) => ['CtfBusinessInfo', variables];
;

useCtfBusinessInfoQuery.fetcher = (variables: CtfBusinessInfoQueryVariables) => fetcher<CtfBusinessInfoQuery, CtfBusinessInfoQueryVariables>(CtfBusinessInfoDocument, variables);