import * as Types from '../../../lib/__generated/graphql.types';

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
export type BlogCategoriesFieldsFragment = { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null, categoryName?: string | null, sys: { __typename?: 'Sys', id: string } } | null> };

export type CtfBlogCategoriesQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfBlogCategoriesQuery = { __typename?: 'Query', categoryCollection?: (
    { __typename?: 'CategoryCollection' }
    & BlogCategoriesFieldsFragment
  ) | null };

export const BlogCategoriesFieldsFragmentDoc = `
    fragment BlogCategoriesFields on CategoryCollection {
  items {
    sys {
      id
    }
    slug
    categoryName
  }
}
    `;
export const CtfBlogCategoriesDocument = `
    query CtfBlogCategories($locale: String, $preview: Boolean) {
  categoryCollection(
    order: categoryName_ASC
    locale: $locale
    preview: $preview
    limit: 15
  ) {
    ...BlogCategoriesFields
  }
}
    ${BlogCategoriesFieldsFragmentDoc}`;
export const useCtfBlogCategoriesQuery = <
      TData = CtfBlogCategoriesQuery,
      TError = unknown
    >(
      variables?: CtfBlogCategoriesQueryVariables,
      options?: UseQueryOptions<CtfBlogCategoriesQuery, TError, TData>
    ) =>
    useQuery<CtfBlogCategoriesQuery, TError, TData>(
      variables === undefined ? ['CtfBlogCategories'] : ['CtfBlogCategories', variables],
      fetcher<CtfBlogCategoriesQuery, CtfBlogCategoriesQueryVariables>(CtfBlogCategoriesDocument, variables),
      options
    );