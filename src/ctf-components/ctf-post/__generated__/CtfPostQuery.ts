/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfPostQuery
// ====================================================

export interface CtfPostQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfPostQuery_postCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPostQuery_postCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_category {
  __typename: "Category";
  sys: CtfPostQuery_postCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface CtfPostQuery_postCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfPostQuery_postCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_author_avatar {
  __typename: "Asset";
  sys: CtfPostQuery_postCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPostQuery_postCollection_items_author {
  __typename: "TopicPerson";
  sys: CtfPostQuery_postCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfPostQuery_postCollection_items_author_bio | null;
  avatar: CtfPostQuery_postCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_Seo_sys;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfPostQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfPostQuery_postCollection_items_introText_links_entries_block = CtfPostQuery_postCollection_items_introText_links_entries_block_Seo | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentCta | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentDuplex | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentProductTable | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentQuote | CtfPostQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock | CtfPostQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo | CtfPostQuery_postCollection_items_introText_links_entries_block_TopicPerson | CtfPostQuery_postCollection_items_introText_links_entries_block_TopicProduct | CtfPostQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset;

export interface CtfPostQuery_postCollection_items_introText_links_entries {
  __typename: "PostIntroTextEntries";
  block: (CtfPostQuery_postCollection_items_introText_links_entries_block | null)[];
}

export interface CtfPostQuery_postCollection_items_introText_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_introText_links_assets_block {
  __typename: "Asset";
  sys: CtfPostQuery_postCollection_items_introText_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPostQuery_postCollection_items_introText_links_assets {
  __typename: "PostIntroTextAssets";
  block: (CtfPostQuery_postCollection_items_introText_links_assets_block | null)[];
}

export interface CtfPostQuery_postCollection_items_introText_links {
  __typename: "PostIntroTextLinks";
  entries: CtfPostQuery_postCollection_items_introText_links_entries;
  assets: CtfPostQuery_postCollection_items_introText_links_assets;
}

export interface CtfPostQuery_postCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
  links: CtfPostQuery_postCollection_items_introText_links;
}

export interface CtfPostQuery_postCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface CtfPostQuery_postCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (CtfPostQuery_postCollection_items_contentfulMetadata_tags | null)[];
}

export interface CtfPostQuery_postCollection_items_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_seo_image {
  __typename: "Asset";
  sys: CtfPostQuery_postCollection_items_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPostQuery_postCollection_items_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: CtfPostQuery_postCollection_items_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_Seo_sys;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfPostQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfPostQuery_postCollection_items_body_links_entries_block = CtfPostQuery_postCollection_items_body_links_entries_block_Seo | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentCta | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentDuplex | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentProductTable | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentQuote | CtfPostQuery_postCollection_items_body_links_entries_block_ComponentTextBlock | CtfPostQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo | CtfPostQuery_postCollection_items_body_links_entries_block_TopicPerson | CtfPostQuery_postCollection_items_body_links_entries_block_TopicProduct | CtfPostQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset;

export interface CtfPostQuery_postCollection_items_body_links_entries {
  __typename: "PostBodyEntries";
  block: (CtfPostQuery_postCollection_items_body_links_entries_block | null)[];
}

export interface CtfPostQuery_postCollection_items_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_body_links_assets_block {
  __typename: "Asset";
  sys: CtfPostQuery_postCollection_items_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPostQuery_postCollection_items_body_links_assets {
  __typename: "PostBodyAssets";
  block: (CtfPostQuery_postCollection_items_body_links_assets_block | null)[];
}

export interface CtfPostQuery_postCollection_items_body_links {
  __typename: "PostBodyLinks";
  entries: CtfPostQuery_postCollection_items_body_links_entries;
  assets: CtfPostQuery_postCollection_items_body_links_assets;
}

export interface CtfPostQuery_postCollection_items_body {
  __typename: "PostBody";
  json: any;
  links: CtfPostQuery_postCollection_items_body_links;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPostQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfPostQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfPostQuery_postCollection_items_extraSectionCollection_items = CtfPostQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentCta | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentQuote | CtfPostQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock | CtfPostQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset;

export interface CtfPostQuery_postCollection_items_extraSectionCollection {
  __typename: "PostExtraSectionCollection";
  items: (CtfPostQuery_postCollection_items_extraSectionCollection_items | null)[];
}

export interface CtfPostQuery_postCollection_items {
  __typename: "Post";
  sys: CtfPostQuery_postCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: CtfPostQuery_postCollection_items_featuredImage | null;
  slug: string | null;
  category: CtfPostQuery_postCollection_items_category | null;
  author: CtfPostQuery_postCollection_items_author | null;
  introText: CtfPostQuery_postCollection_items_introText | null;
  contentfulMetadata: CtfPostQuery_postCollection_items_contentfulMetadata;
  seo: CtfPostQuery_postCollection_items_seo | null;
  body: CtfPostQuery_postCollection_items_body | null;
  extraSectionCollection: CtfPostQuery_postCollection_items_extraSectionCollection | null;
}

export interface CtfPostQuery_postCollection {
  __typename: "PostCollection";
  items: (CtfPostQuery_postCollection_items | null)[];
}

export interface CtfPostQuery {
  postCollection: CtfPostQuery_postCollection | null;
}

export interface CtfPostQueryVariables {
  slug: string;
  locale?: string | null;
  preview?: boolean | null;
}
