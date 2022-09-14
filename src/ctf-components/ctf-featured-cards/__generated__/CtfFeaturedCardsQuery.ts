/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfFeaturedCardsQuery
// ====================================================

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_bio | null;
  avatar: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items {
  __typename: "Post";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_category | null;
  author: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_author | null;
  introText: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_introText | null;
  contentfulMetadata: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items_contentfulMetadata;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection_items | null)[];
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_bio | null;
  avatar: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items {
  __typename: "Post";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_category | null;
  author: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_author | null;
  introText: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_introText | null;
  contentfulMetadata: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection_items | null)[];
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_featuredPostsCollection | null;
  ntAudience: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection {
  __typename: "ComponentFeaturedCardsNt_variantsCollection";
  items: (CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection_items | null)[];
}

export interface CtfFeaturedCardsQuery_componentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: CtfFeaturedCardsQuery_componentFeaturedCards_featuredPostsCollection | null;
  ntVariantsCollection: CtfFeaturedCardsQuery_componentFeaturedCards_ntVariantsCollection | null;
}

export interface CtfFeaturedCardsQuery {
  componentFeaturedCards: CtfFeaturedCardsQuery_componentFeaturedCards | null;
}

export interface CtfFeaturedCardsQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
