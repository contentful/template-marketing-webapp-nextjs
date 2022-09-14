/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeaturedCardsFragment
// ====================================================

export interface FeaturedCardsFragment_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: FeaturedCardsFragment_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: FeaturedCardsFragment_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: FeaturedCardsFragment_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: FeaturedCardsFragment_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: FeaturedCardsFragment_featuredPostsCollection_items_author_bio | null;
  avatar: FeaturedCardsFragment_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface FeaturedCardsFragment_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (FeaturedCardsFragment_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface FeaturedCardsFragment_featuredPostsCollection_items {
  __typename: "Post";
  sys: FeaturedCardsFragment_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: FeaturedCardsFragment_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: FeaturedCardsFragment_featuredPostsCollection_items_category | null;
  author: FeaturedCardsFragment_featuredPostsCollection_items_author | null;
  introText: FeaturedCardsFragment_featuredPostsCollection_items_introText | null;
  contentfulMetadata: FeaturedCardsFragment_featuredPostsCollection_items_contentfulMetadata;
}

export interface FeaturedCardsFragment_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (FeaturedCardsFragment_featuredPostsCollection_items | null)[];
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage {
  __typename: "Asset";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_category {
  __typename: "Category";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar {
  __typename: "Asset";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author {
  __typename: "TopicPerson";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_bio | null;
  avatar: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata_tags | null)[];
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items {
  __typename: "Post";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_featuredImage | null;
  slug: string | null;
  category: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_category | null;
  author: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_author | null;
  introText: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_introText | null;
  contentfulMetadata: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items_contentfulMetadata;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection {
  __typename: "ComponentFeaturedCardsFeaturedPostsCollection";
  items: (FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection_items | null)[];
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: FeaturedCardsFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection_items {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: FeaturedCardsFragment_ntVariantsCollection_items_featuredPostsCollection | null;
  ntAudience: FeaturedCardsFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface FeaturedCardsFragment_ntVariantsCollection {
  __typename: "ComponentFeaturedCardsNt_variantsCollection";
  items: (FeaturedCardsFragment_ntVariantsCollection_items | null)[];
}

export interface FeaturedCardsFragment {
  __typename: "ComponentFeaturedCards";
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  featuredPostsCollection: FeaturedCardsFragment_featuredPostsCollection | null;
  ntVariantsCollection: FeaturedCardsFragment_ntVariantsCollection | null;
}
