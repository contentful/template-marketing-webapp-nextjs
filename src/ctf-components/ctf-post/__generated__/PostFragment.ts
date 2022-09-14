/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFragment
// ====================================================

export interface PostFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_featuredImage {
  __typename: "Asset";
  sys: PostFragment_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragment_category_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_category {
  __typename: "Category";
  sys: PostFragment_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface PostFragment_author_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface PostFragment_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_author_avatar {
  __typename: "Asset";
  sys: PostFragment_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragment_author {
  __typename: "TopicPerson";
  sys: PostFragment_author_sys;
  internalName: string | null;
  name: string | null;
  bio: PostFragment_author_bio | null;
  avatar: PostFragment_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface PostFragment_introText_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: PostFragment_introText_links_entries_block_Seo_sys;
}

export interface PostFragment_introText_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: PostFragment_introText_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PostFragment_introText_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PostFragment_introText_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PostFragment_introText_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PostFragment_introText_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: PostFragment_introText_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PostFragment_introText_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PostFragment_introText_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: PostFragment_introText_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: PostFragment_introText_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: PostFragment_introText_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface PostFragment_introText_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PostFragment_introText_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PostFragment_introText_links_entries_block = PostFragment_introText_links_entries_block_Seo | PostFragment_introText_links_entries_block_ComponentCta | PostFragment_introText_links_entries_block_ComponentDuplex | PostFragment_introText_links_entries_block_ComponentFeaturedCards | PostFragment_introText_links_entries_block_ComponentHeroBanner | PostFragment_introText_links_entries_block_ComponentInfoBlock | PostFragment_introText_links_entries_block_ComponentProductTable | PostFragment_introText_links_entries_block_ComponentQuote | PostFragment_introText_links_entries_block_ComponentTextBlock | PostFragment_introText_links_entries_block_TopicBusinessInfo | PostFragment_introText_links_entries_block_TopicPerson | PostFragment_introText_links_entries_block_TopicProduct | PostFragment_introText_links_entries_block_WrapperExternalAsset;

export interface PostFragment_introText_links_entries {
  __typename: "PostIntroTextEntries";
  block: (PostFragment_introText_links_entries_block | null)[];
}

export interface PostFragment_introText_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_introText_links_assets_block {
  __typename: "Asset";
  sys: PostFragment_introText_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragment_introText_links_assets {
  __typename: "PostIntroTextAssets";
  block: (PostFragment_introText_links_assets_block | null)[];
}

export interface PostFragment_introText_links {
  __typename: "PostIntroTextLinks";
  entries: PostFragment_introText_links_entries;
  assets: PostFragment_introText_links_assets;
}

export interface PostFragment_introText {
  __typename: "PostIntroText";
  json: any;
  links: PostFragment_introText_links;
}

export interface PostFragment_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface PostFragment_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (PostFragment_contentfulMetadata_tags | null)[];
}

export interface PostFragment_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_seo_image {
  __typename: "Asset";
  sys: PostFragment_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragment_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: PostFragment_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface PostFragment_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: PostFragment_body_links_entries_block_Seo_sys;
}

export interface PostFragment_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: PostFragment_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PostFragment_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PostFragment_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PostFragment_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PostFragment_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: PostFragment_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PostFragment_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PostFragment_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: PostFragment_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: PostFragment_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: PostFragment_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface PostFragment_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PostFragment_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PostFragment_body_links_entries_block = PostFragment_body_links_entries_block_Seo | PostFragment_body_links_entries_block_ComponentCta | PostFragment_body_links_entries_block_ComponentDuplex | PostFragment_body_links_entries_block_ComponentFeaturedCards | PostFragment_body_links_entries_block_ComponentHeroBanner | PostFragment_body_links_entries_block_ComponentInfoBlock | PostFragment_body_links_entries_block_ComponentProductTable | PostFragment_body_links_entries_block_ComponentQuote | PostFragment_body_links_entries_block_ComponentTextBlock | PostFragment_body_links_entries_block_TopicBusinessInfo | PostFragment_body_links_entries_block_TopicPerson | PostFragment_body_links_entries_block_TopicProduct | PostFragment_body_links_entries_block_WrapperExternalAsset;

export interface PostFragment_body_links_entries {
  __typename: "PostBodyEntries";
  block: (PostFragment_body_links_entries_block | null)[];
}

export interface PostFragment_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_body_links_assets_block {
  __typename: "Asset";
  sys: PostFragment_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PostFragment_body_links_assets {
  __typename: "PostBodyAssets";
  block: (PostFragment_body_links_assets_block | null)[];
}

export interface PostFragment_body_links {
  __typename: "PostBodyLinks";
  entries: PostFragment_body_links_entries;
  assets: PostFragment_body_links_assets;
}

export interface PostFragment_body {
  __typename: "PostBody";
  json: any;
  links: PostFragment_body_links;
}

export interface PostFragment_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: PostFragment_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface PostFragment_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: PostFragment_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PostFragment_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PostFragment_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PostFragment_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PostFragment_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PostFragment_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PostFragment_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PostFragment_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PostFragment_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PostFragment_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PostFragment_extraSectionCollection_items = PostFragment_extraSectionCollection_items_PersonalizationContainer | PostFragment_extraSectionCollection_items_ComponentCta | PostFragment_extraSectionCollection_items_ComponentDuplex | PostFragment_extraSectionCollection_items_ComponentFeaturedCards | PostFragment_extraSectionCollection_items_ComponentHeroBanner | PostFragment_extraSectionCollection_items_ComponentInfoBlock | PostFragment_extraSectionCollection_items_ComponentQuote | PostFragment_extraSectionCollection_items_ComponentTextBlock | PostFragment_extraSectionCollection_items_WrapperExternalAsset;

export interface PostFragment_extraSectionCollection {
  __typename: "PostExtraSectionCollection";
  items: (PostFragment_extraSectionCollection_items | null)[];
}

export interface PostFragment {
  __typename: "Post";
  sys: PostFragment_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: PostFragment_featuredImage | null;
  slug: string | null;
  category: PostFragment_category | null;
  author: PostFragment_author | null;
  introText: PostFragment_introText | null;
  contentfulMetadata: PostFragment_contentfulMetadata;
  seo: PostFragment_seo | null;
  body: PostFragment_body | null;
  extraSectionCollection: PostFragment_extraSectionCollection | null;
}
