import * as Types from '../../../lib/__generated/graphql.types';

import { PostFieldsBaseFragment, PostCategoryFieldsFragment } from '../../ctf-post/__generated/ctf-post.generated';
import { AssetFieldsFragment } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PersonFieldsFragment } from '../../ctf-person/__generated/ctf-person.generated';
import { PostFieldsBaseFragmentDoc, PostCategoryFieldsFragmentDoc } from '../../ctf-post/__generated/ctf-post.generated';
import { AssetFieldsFragmentDoc } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
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
export type CtfTagQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfTagQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<(
      { __typename?: 'Post' }
      & PostFieldsBaseFragment
    ) | null> } | null };


export const CtfTagDocument = `
    query CtfTag($id: String!, $locale: String, $preview: Boolean) {
  postCollection(
    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$id]}}}
    locale: $locale
    preview: $preview
    limit: 10
  ) {
    items {
      ...PostFieldsBase
    }
  }
}
    ${PostFieldsBaseFragmentDoc}
${AssetFieldsFragmentDoc}
${PostCategoryFieldsFragmentDoc}
${PersonFieldsFragmentDoc}`;
export const useCtfTagQuery = <
      TData = CtfTagQuery,
      TError = unknown
    >(
      variables: CtfTagQueryVariables,
      options?: UseQueryOptions<CtfTagQuery, TError, TData>
    ) =>
    useQuery<CtfTagQuery, TError, TData>(
      ['CtfTag', variables],
      fetcher<CtfTagQuery, CtfTagQueryVariables>(CtfTagDocument, variables),
      options
    );