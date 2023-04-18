import * as Types from '../../../../../lib/__generated/graphql.types';

import { fetchConfig } from '@src/lib/fetchConfig';
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
export type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', internalName?: string | null };

export type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', internalName?: string | null };

export type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', internalName?: string | null };

export type PageTopSectionFieldsFragment = PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentQuote_Fragment;

export type CtfPageFieldsFragment = { __typename?: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<(
      { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentDuplex_Fragment
    ) | (
      { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentHeroBanner_Fragment
    ) | (
      { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      & PageTopSectionFields_ComponentQuote_Fragment
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
  ... on ComponentDuplex {
    internalName
  }
  ... on ComponentHeroBanner {
    internalName
  }
  ... on ComponentQuote {
    internalName
  }
}
    `;
export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
  pageName
  internalName: pageName
  slug
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
${PageTopSectionFieldsFragmentDoc}`;
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