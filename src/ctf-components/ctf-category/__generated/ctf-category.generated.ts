import * as Types from '../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PostBaseFieldsFragment, PostCategoryFieldsFragment } from '../../ctf-post/__generated/ctf-post.generated';
import { PersonFieldsFragment } from '../../ctf-person/__generated/ctf-person.generated';
import { AssetFieldsFragmentDoc } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PostBaseFieldsFragmentDoc, PostCategoryFieldsFragmentDoc } from '../../ctf-post/__generated/ctf-post.generated';
import { PersonFieldsFragmentDoc } from '../../ctf-person/__generated/ctf-person.generated';
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
export type CategoryFieldsFragment = { __typename: 'Category', internalName?: string | null, slug?: string | null, categoryName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null };

export type CtfCategoryQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<(
      { __typename?: 'Category' }
      & CategoryFieldsFragment
    ) | null> } | null, postCollection?: { __typename?: 'PostCollection', items: Array<(
      { __typename?: 'Post' }
      & PostBaseFieldsFragment
    ) | null> } | null };

export const CategoryFieldsFragmentDoc = `
    fragment CategoryFields on Category {
  __typename
  sys {
    id
  }
  internalName
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
  categoryName
}
    `;
export const CtfCategoryDocument = `
    query CtfCategory($slug: String!, $locale: String, $preview: Boolean) {
  categoryCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...CategoryFields
    }
  }
  postCollection(
    where: {category: {slug: $slug}}
    locale: $locale
    preview: $preview
    limit: 10
  ) {
    items {
      ...PostBaseFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PostBaseFieldsFragmentDoc}
${PostCategoryFieldsFragmentDoc}
${PersonFieldsFragmentDoc}`;
export const useCtfCategoryQuery = <
      TData = CtfCategoryQuery,
      TError = unknown
    >(
      variables: CtfCategoryQueryVariables,
      options?: UseQueryOptions<CtfCategoryQuery, TError, TData>
    ) =>
    useQuery<CtfCategoryQuery, TError, TData>(
      ['CtfCategory', variables],
      fetcher<CtfCategoryQuery, CtfCategoryQueryVariables>(CtfCategoryDocument, variables),
      options
    );