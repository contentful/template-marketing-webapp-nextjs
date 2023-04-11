import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_Page_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
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
export type CtfPageFieldsFragment = { __typename?: 'Page', pageName?: string | null, internalName?: string | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<(
      { __typename?: 'ComponentDuplex' }
      & ComponentReferenceFields_ComponentDuplex_Fragment
    ) | (
      { __typename?: 'ComponentHeroBanner' }
      & ComponentReferenceFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename?: 'ComponentQuote' }
      & ComponentReferenceFields_ComponentQuote_Fragment
    ) | null> } | null };

export type CtfPageQueryVariables = Types.Exact<{
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
  topSectionCollection(limit: 20) {
    items {
      ...ComponentReferenceFields
    }
  }
}
    `;
export const CtfPageDocument = `
    query CtfPage($locale: String, $preview: Boolean) {
  pageCollection(locale: $locale, preview: $preview, limit: 1) {
    items {
      ...CtfPageFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;
export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables?: CtfPageQueryVariables,
      options?: UseQueryOptions<CtfPageQuery, TError, TData>
    ) =>
    useQuery<CtfPageQuery, TError, TData>(
      variables === undefined ? ['CtfPage'] : ['CtfPage', variables],
      fetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
      options
    );

useCtfPageQuery.getKey = (variables?: CtfPageQueryVariables) => variables === undefined ? ['CtfPage'] : ['CtfPage', variables];
;

useCtfPageQuery.fetcher = (variables?: CtfPageQueryVariables) => fetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables);