/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFragmentBase
// ====================================================

export interface PostFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragmentBase_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragmentBase_featuredImage {
  __typename: "Asset";
  sys: PostFragmentBase_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragmentBase_category_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragmentBase_category {
  __typename: "Category";
  sys: PostFragmentBase_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface PostFragmentBase_author_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragmentBase_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface PostFragmentBase_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragmentBase_author_avatar {
  __typename: "Asset";
  sys: PostFragmentBase_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragmentBase_author {
  __typename: "TopicPerson";
  sys: PostFragmentBase_author_sys;
  internalName: string | null;
  name: string | null;
  bio: PostFragmentBase_author_bio | null;
  avatar: PostFragmentBase_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface PostFragmentBase_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface PostFragmentBase_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface PostFragmentBase_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (PostFragmentBase_contentfulMetadata_tags | null)[];
}

export interface PostFragmentBase {
  __typename: "Post";
  sys: PostFragmentBase_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: PostFragmentBase_featuredImage | null;
  slug: string | null;
  category: PostFragmentBase_category | null;
  author: PostFragmentBase_author | null;
  introText: PostFragmentBase_introText | null;
  contentfulMetadata: PostFragmentBase_contentfulMetadata;
}
