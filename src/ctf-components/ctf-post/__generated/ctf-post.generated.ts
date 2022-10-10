import * as Types from '../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PersonFieldsFragment } from '../../ctf-person/__generated/ctf-person.generated';
import { ComponentReferenceFields_Category_Fragment, ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentFeaturedCards_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Post_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment } from '../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PersonFieldsFragmentDoc } from '../../ctf-person/__generated/ctf-person.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
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
export type PostCategoryFieldsFragment = { __typename?: 'Category', categoryName?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PostFieldsBaseFragment = { __typename: 'Post', internalName?: string | null, postName?: string | null, publishedDate?: any | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, category?: (
    { __typename?: 'Category' }
    & PostCategoryFieldsFragment
  ) | null, author?: (
    { __typename?: 'TopicPerson' }
    & PersonFieldsFragment
  ) | null, introText?: { __typename?: 'PostIntroText', json: any } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type PostFieldsFragment = (
  { __typename?: 'Post', seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, introText?: { __typename?: 'PostIntroText', json: any, links: { __typename?: 'PostIntroTextLinks', entries: { __typename?: 'PostIntroTextEntries', block: Array<(
          { __typename?: 'Category' }
          & ComponentReferenceFields_Category_Fragment
        ) | (
          { __typename?: 'ComponentCta' }
          & ComponentReferenceFields_ComponentCta_Fragment
        ) | (
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentFeaturedCards' }
          & ComponentReferenceFields_ComponentFeaturedCards_Fragment
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
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Post' }
          & ComponentReferenceFields_Post_Fragment
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
        ) | null> }, assets: { __typename?: 'PostIntroTextAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, body?: { __typename?: 'PostBody', json: any, links: { __typename?: 'PostBodyLinks', entries: { __typename?: 'PostBodyEntries', block: Array<(
          { __typename?: 'Category' }
          & ComponentReferenceFields_Category_Fragment
        ) | (
          { __typename?: 'ComponentCta' }
          & ComponentReferenceFields_ComponentCta_Fragment
        ) | (
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentFeaturedCards' }
          & ComponentReferenceFields_ComponentFeaturedCards_Fragment
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
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Post' }
          & ComponentReferenceFields_Post_Fragment
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
        ) | null> }, assets: { __typename?: 'PostBodyAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, extraSectionCollection?: { __typename?: 'PostExtraSectionCollection', items: Array<(
      { __typename?: 'ComponentCta' }
      & ComponentReferenceFields_ComponentCta_Fragment
    ) | (
      { __typename?: 'ComponentDuplex' }
      & ComponentReferenceFields_ComponentDuplex_Fragment
    ) | (
      { __typename?: 'ComponentFeaturedCards' }
      & ComponentReferenceFields_ComponentFeaturedCards_Fragment
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
    ) | null> } | null }
  & PostFieldsBaseFragment
);

export type CtfPostQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPostQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<(
      { __typename?: 'Post' }
      & PostFieldsFragment
    ) | null> } | null };

export type CtfBlogQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfBlogQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<(
      { __typename?: 'Post' }
      & PostFieldsBaseFragment
    ) | null> } | null };

export const PostCategoryFieldsFragmentDoc = `
    fragment PostCategoryFields on Category {
  sys {
    id
  }
  categoryName
  slug
}
    `;
export const PostFieldsBaseFragmentDoc = `
    fragment PostFieldsBase on Post {
  __typename
  sys {
    id
  }
  internalName
  postName
  publishedDate
  featuredImage {
    ...AssetFields
  }
  slug
  category {
    ...PostCategoryFields
  }
  author {
    ...PersonFields
  }
  introText {
    json
  }
  contentfulMetadata {
    tags {
      id
      name
    }
  }
}
    `;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  ...PostFieldsBase
  seo {
    title
    description
    image {
      ...AssetFields
    }
    noIndex
    noFollow
  }
  introText {
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
  extraSectionCollection(limit: 20) {
    items {
      ...ComponentReferenceFields
    }
  }
}
    `;
export const CtfPostDocument = `
    query CtfPost($slug: String!, $locale: String, $preview: Boolean) {
  postCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...PostFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${PostFieldsBaseFragmentDoc}
${AssetFieldsFragmentDoc}
${PostCategoryFieldsFragmentDoc}
${PersonFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;
export const useCtfPostQuery = <
      TData = CtfPostQuery,
      TError = unknown
    >(
      variables: CtfPostQueryVariables,
      options?: UseQueryOptions<CtfPostQuery, TError, TData>
    ) =>
    useQuery<CtfPostQuery, TError, TData>(
      ['CtfPost', variables],
      fetcher<CtfPostQuery, CtfPostQueryVariables>(CtfPostDocument, variables),
      options
    );
export const CtfBlogDocument = `
    query CtfBlog($locale: String, $preview: Boolean) {
  postCollection(
    locale: $locale
    preview: $preview
    limit: 10
    order: publishedDate_DESC
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
export const useCtfBlogQuery = <
      TData = CtfBlogQuery,
      TError = unknown
    >(
      variables?: CtfBlogQueryVariables,
      options?: UseQueryOptions<CtfBlogQuery, TError, TData>
    ) =>
    useQuery<CtfBlogQuery, TError, TData>(
      variables === undefined ? ['CtfBlog'] : ['CtfBlog', variables],
      fetcher<CtfBlogQuery, CtfBlogQueryVariables>(CtfBlogDocument, variables),
      options
    );