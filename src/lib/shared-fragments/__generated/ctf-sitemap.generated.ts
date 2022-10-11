import * as Types from '../../__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/link/__generated/page-link.generated';
import { PostLinkFieldsFragment } from '../../../components/link/__generated/post-link.generated';
import { CategoryLinkFieldsFragment } from '../../../components/link/__generated/category-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/link/__generated/page-link.generated';
import { PostLinkFieldsFragmentDoc } from '../../../components/link/__generated/post-link.generated';
import { CategoryLinkFieldsFragmentDoc } from '../../../components/link/__generated/category-link.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://graphql.contentful.com/content/v1/spaces/vw5be3ki3sdd", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json","Authorization":"Bearer GM7NHP-8LZDbI758jw1ze9OYJV9rVpKcJfyjRP30ang"}}),
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
export type SitemapFieldsFragment = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & PageLinkFieldsFragment
    ) | null> } | null, postCollection?: { __typename?: 'PostCollection', items: Array<(
      { __typename?: 'Post' }
      & PostLinkFieldsFragment
    ) | null> } | null, categoryCollection?: { __typename?: 'CategoryCollection', items: Array<(
      { __typename?: 'Category' }
      & CategoryLinkFieldsFragment
    ) | null> } | null };

export type SitemapQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type SitemapQuery = (
  { __typename?: 'Query' }
  & SitemapFieldsFragment
);

export const SitemapFieldsFragmentDoc = `
    fragment SitemapFields on Query {
  pageCollection(locale: $locale, preview: $preview) {
    items {
      ...PageLinkFields
    }
  }
  postCollection(locale: $locale, preview: $preview) {
    items {
      ...PostLinkFields
    }
  }
  categoryCollection(locale: $locale, preview: $preview) {
    items {
      ...CategoryLinkFields
    }
  }
}
    `;
export const SitemapDocument = `
    query Sitemap($locale: String, $preview: Boolean) {
  ...SitemapFields
}
    ${SitemapFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${PostLinkFieldsFragmentDoc}
${CategoryLinkFieldsFragmentDoc}`;
export const useSitemapQuery = <
      TData = SitemapQuery,
      TError = unknown
    >(
      variables?: SitemapQueryVariables,
      options?: UseQueryOptions<SitemapQuery, TError, TData>
    ) =>
    useQuery<SitemapQuery, TError, TData>(
      variables === undefined ? ['Sitemap'] : ['Sitemap', variables],
      fetcher<SitemapQuery, SitemapQueryVariables>(SitemapDocument, variables),
      options
    );