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
export type FeaturedCardsFieldsFragment = { __typename?: 'ComponentFeaturedCards', internalName?: string | null, headline?: string | null, subline?: string | null, featuredPostsCollection?: { __typename?: 'ComponentFeaturedCardsFeaturedPostsCollection', items: Array<(
      { __typename?: 'Post' }
      & PostFieldsBaseFragment
    ) | null> } | null };

export type CtfFeaturedCardsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfFeaturedCardsQuery = { __typename?: 'Query', componentFeaturedCards?: (
    { __typename?: 'ComponentFeaturedCards' }
    & FeaturedCardsFieldsFragment
  ) | null };

export const FeaturedCardsFieldsFragmentDoc = `
    fragment FeaturedCardsFields on ComponentFeaturedCards {
  internalName
  headline
  subline
  featuredPostsCollection(limit: 3) {
    items {
      ...PostFieldsBase
    }
  }
}
    `;
export const CtfFeaturedCardsDocument = `
    query CtfFeaturedCards($id: String!, $locale: String, $preview: Boolean) {
  componentFeaturedCards(id: $id, preview: $preview, locale: $locale) {
    ...FeaturedCardsFields
  }
}
    ${FeaturedCardsFieldsFragmentDoc}
${PostFieldsBaseFragmentDoc}
${AssetFieldsFragmentDoc}
${PostCategoryFieldsFragmentDoc}
${PersonFieldsFragmentDoc}`;
export const useCtfFeaturedCardsQuery = <
      TData = CtfFeaturedCardsQuery,
      TError = unknown
    >(
      variables: CtfFeaturedCardsQueryVariables,
      options?: UseQueryOptions<CtfFeaturedCardsQuery, TError, TData>
    ) =>
    useQuery<CtfFeaturedCardsQuery, TError, TData>(
      ['CtfFeaturedCards', variables],
      fetcher<CtfFeaturedCardsQuery, CtfFeaturedCardsQueryVariables>(CtfFeaturedCardsDocument, variables),
      options
    );