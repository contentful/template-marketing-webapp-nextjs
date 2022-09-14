/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfCategoryQuery
// ====================================================

export interface CtfCategoryQuery_categoryCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_categoryCollection_items_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_categoryCollection_items_seo_image {
  __typename: "Asset";
  sys: CtfCategoryQuery_categoryCollection_items_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfCategoryQuery_categoryCollection_items_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: CtfCategoryQuery_categoryCollection_items_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface CtfCategoryQuery_categoryCollection_items {
  __typename: "Category";
  sys: CtfCategoryQuery_categoryCollection_items_sys;
  internalName: string | null;
  slug: string | null;
  seo: CtfCategoryQuery_categoryCollection_items_seo | null;
  categoryName: string | null;
}

export interface CtfCategoryQuery_categoryCollection {
  __typename: "CategoryCollection";
  items: (CtfCategoryQuery_categoryCollection_items | null)[];
}

export interface CtfCategoryQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_postCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_postCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfCategoryQuery_postCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfCategoryQuery_postCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_postCollection_items_category {
  __typename: "Category";
  sys: CtfCategoryQuery_postCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfCategoryQuery_postCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_postCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfCategoryQuery_postCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCategoryQuery_postCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfCategoryQuery_postCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfCategoryQuery_postCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfCategoryQuery_postCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfCategoryQuery_postCollection_items_author_bio | null;
  avatar: CtfCategoryQuery_postCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfCategoryQuery_postCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface CtfCategoryQuery_postCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfCategoryQuery_postCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfCategoryQuery_postCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfCategoryQuery_postCollection_items {
  __typename: "Post";
  sys: CtfCategoryQuery_postCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfCategoryQuery_postCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfCategoryQuery_postCollection_items_category | null;
  author: CtfCategoryQuery_postCollection_items_author | null;
  introText: CtfCategoryQuery_postCollection_items_introText | null;
  contentfulMetadata: CtfCategoryQuery_postCollection_items_contentfulMetadata;
}

export interface CtfCategoryQuery_postCollection {
  __typename: "PostCollection";
  items: (CtfCategoryQuery_postCollection_items | null)[];
}

export interface CtfCategoryQuery {
  categoryCollection: CtfCategoryQuery_categoryCollection | null;
  postCollection: CtfCategoryQuery_postCollection | null;
}

export interface CtfCategoryQueryVariables {
  slug: string;
  locale?: string | null;
  preview?: boolean | null;
}
