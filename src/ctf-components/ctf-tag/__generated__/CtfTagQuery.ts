/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfTagQuery
// ====================================================

export interface CtfTagQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfTagQuery_postCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfTagQuery_postCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfTagQuery_postCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfTagQuery_postCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfTagQuery_postCollection_items_category {
  __typename: "Category";
  sys: CtfTagQuery_postCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfTagQuery_postCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfTagQuery_postCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfTagQuery_postCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfTagQuery_postCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfTagQuery_postCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfTagQuery_postCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfTagQuery_postCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfTagQuery_postCollection_items_author_bio | null;
  avatar: CtfTagQuery_postCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfTagQuery_postCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface CtfTagQuery_postCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfTagQuery_postCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfTagQuery_postCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfTagQuery_postCollection_items {
  __typename: "Post";
  sys: CtfTagQuery_postCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfTagQuery_postCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfTagQuery_postCollection_items_category | null;
  author: CtfTagQuery_postCollection_items_author | null;
  introText: CtfTagQuery_postCollection_items_introText | null;
  contentfulMetadata: CtfTagQuery_postCollection_items_contentfulMetadata;
}

export interface CtfTagQuery_postCollection {
  __typename: "PostCollection";
  items: (CtfTagQuery_postCollection_items | null)[];
}

export interface CtfTagQuery {
  postCollection: CtfTagQuery_postCollection | null;
}

export interface CtfTagQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
