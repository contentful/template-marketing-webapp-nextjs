/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllFeaturedCardsQuery
// ====================================================

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_bio | null;
  avatar: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items {
  __typename: "Post";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_category | null;
  author: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_author | null;
  introText: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_introText | null;
  contentfulMetadata: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items_contentfulMetadata;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection_items | null)[];
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_bio | null;
  avatar: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items {
  __typename: "Post";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_category | null;
  author: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_author | null;
  introText: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_introText | null;
  contentfulMetadata: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection_items | null)[];
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_featuredPostsCollection | null;
  ntAudience: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection {
  __typename: "ComponentFeaturedCardsNt_variantsCollection";
  items: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection_items {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_featuredPostsCollection | null;
  ntVariantsCollection: AllFeaturedCardsQuery_componentFeaturedCardsCollection_items_ntVariantsCollection | null;
}

export interface AllFeaturedCardsQuery_componentFeaturedCardsCollection {
  __typename: "ComponentFeaturedCardsCollection";
  items: (AllFeaturedCardsQuery_componentFeaturedCardsCollection_items | null)[];
}

export interface AllFeaturedCardsQuery {
  componentFeaturedCardsCollection: AllFeaturedCardsQuery_componentFeaturedCardsCollection | null;
}

export interface AllFeaturedCardsQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
