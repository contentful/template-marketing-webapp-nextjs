/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeaturedCardsFragmentBase
// ====================================================

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: FeaturedCardsFragmentBase_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: FeaturedCardsFragmentBase_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: FeaturedCardsFragmentBase_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: FeaturedCardsFragmentBase_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: FeaturedCardsFragmentBase_featuredPostsCollection_items_author_bio | null;
  avatar: FeaturedCardsFragmentBase_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (FeaturedCardsFragmentBase_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection_items {
  __typename: "Post";
  sys: FeaturedCardsFragmentBase_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: FeaturedCardsFragmentBase_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: FeaturedCardsFragmentBase_featuredPostsCollection_items_category | null;
  author: FeaturedCardsFragmentBase_featuredPostsCollection_items_author | null;
  introText: FeaturedCardsFragmentBase_featuredPostsCollection_items_introText | null;
  contentfulMetadata: FeaturedCardsFragmentBase_featuredPostsCollection_items_contentfulMetadata;
}

export interface FeaturedCardsFragmentBase_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (FeaturedCardsFragmentBase_featuredPostsCollection_items | null)[];
}

export interface FeaturedCardsFragmentBase {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: FeaturedCardsFragmentBase_featuredPostsCollection | null;
}
