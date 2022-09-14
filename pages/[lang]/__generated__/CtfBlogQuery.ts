/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfBlogQuery
// ====================================================

export interface CtfBlogQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogQuery_postCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogQuery_postCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfBlogQuery_postCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfBlogQuery_postCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogQuery_postCollection_items_category {
  __typename: "Category";
  sys: CtfBlogQuery_postCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfBlogQuery_postCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogQuery_postCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfBlogQuery_postCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogQuery_postCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfBlogQuery_postCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfBlogQuery_postCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfBlogQuery_postCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfBlogQuery_postCollection_items_author_bio | null;
  avatar: CtfBlogQuery_postCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfBlogQuery_postCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface CtfBlogQuery_postCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfBlogQuery_postCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfBlogQuery_postCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfBlogQuery_postCollection_items {
  __typename: "Post";
  sys: CtfBlogQuery_postCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfBlogQuery_postCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfBlogQuery_postCollection_items_category | null;
  author: CtfBlogQuery_postCollection_items_author | null;
  introText: CtfBlogQuery_postCollection_items_introText | null;
  contentfulMetadata: CtfBlogQuery_postCollection_items_contentfulMetadata;
}

export interface CtfBlogQuery_postCollection {
  __typename: "PostCollection";
  items: (CtfBlogQuery_postCollection_items | null)[];
}

export interface CtfBlogQuery {
  postCollection: CtfBlogQuery_postCollection | null;
}

export interface CtfBlogQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
