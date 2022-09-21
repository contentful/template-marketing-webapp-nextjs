/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPostsQuery
// ====================================================

export interface AllPostsQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllPostsQuery_postCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPostsQuery_postCollection_items_category_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_category {
  __typename: "Category";
  sys: AllPostsQuery_postCollection_items_category_sys;
  categoryName: string | null;
  slug: string | null;
}

export interface AllPostsQuery_postCollection_items_author_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_author_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface AllPostsQuery_postCollection_items_author_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_author_avatar {
  __typename: "Asset";
  sys: AllPostsQuery_postCollection_items_author_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPostsQuery_postCollection_items_author {
  __typename: "TopicPerson";
  sys: AllPostsQuery_postCollection_items_author_sys;
  internalName: string | null;
  name: string | null;
  bio: AllPostsQuery_postCollection_items_author_bio | null;
  avatar: AllPostsQuery_postCollection_items_author_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_Seo_sys;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: AllPostsQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type AllPostsQuery_postCollection_items_introText_links_entries_block = AllPostsQuery_postCollection_items_introText_links_entries_block_Seo | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentCta | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentDuplex | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentFeaturedCards | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentHeroBanner | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentInfoBlock | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentProductTable | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentQuote | AllPostsQuery_postCollection_items_introText_links_entries_block_ComponentTextBlock | AllPostsQuery_postCollection_items_introText_links_entries_block_TopicBusinessInfo | AllPostsQuery_postCollection_items_introText_links_entries_block_TopicPerson | AllPostsQuery_postCollection_items_introText_links_entries_block_TopicProduct | AllPostsQuery_postCollection_items_introText_links_entries_block_WrapperExternalAsset;

export interface AllPostsQuery_postCollection_items_introText_links_entries {
  __typename: "PostIntroTextEntries";
  block: (AllPostsQuery_postCollection_items_introText_links_entries_block | null)[];
}

export interface AllPostsQuery_postCollection_items_introText_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_introText_links_assets_block {
  __typename: "Asset";
  sys: AllPostsQuery_postCollection_items_introText_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPostsQuery_postCollection_items_introText_links_assets {
  __typename: "PostIntroTextAssets";
  block: (AllPostsQuery_postCollection_items_introText_links_assets_block | null)[];
}

export interface AllPostsQuery_postCollection_items_introText_links {
  __typename: "PostIntroTextLinks";
  entries: AllPostsQuery_postCollection_items_introText_links_entries;
  assets: AllPostsQuery_postCollection_items_introText_links_assets;
}

export interface AllPostsQuery_postCollection_items_introText {
  __typename: "PostIntroText";
  json: any;
  links: AllPostsQuery_postCollection_items_introText_links;
}

export interface AllPostsQuery_postCollection_items_contentfulMetadata_tags {
  __typename: "ContentfulTag";
  id: string | null;
  name: string | null;
}

export interface AllPostsQuery_postCollection_items_contentfulMetadata {
  __typename: "ContentfulMetadata";
  tags: (AllPostsQuery_postCollection_items_contentfulMetadata_tags | null)[];
}

export interface AllPostsQuery_postCollection_items_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_seo_image {
  __typename: "Asset";
  sys: AllPostsQuery_postCollection_items_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPostsQuery_postCollection_items_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: AllPostsQuery_postCollection_items_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_Seo_sys;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: AllPostsQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type AllPostsQuery_postCollection_items_body_links_entries_block = AllPostsQuery_postCollection_items_body_links_entries_block_Seo | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentCta | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentDuplex | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentFeaturedCards | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentHeroBanner | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentInfoBlock | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentProductTable | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentQuote | AllPostsQuery_postCollection_items_body_links_entries_block_ComponentTextBlock | AllPostsQuery_postCollection_items_body_links_entries_block_TopicBusinessInfo | AllPostsQuery_postCollection_items_body_links_entries_block_TopicPerson | AllPostsQuery_postCollection_items_body_links_entries_block_TopicProduct | AllPostsQuery_postCollection_items_body_links_entries_block_WrapperExternalAsset;

export interface AllPostsQuery_postCollection_items_body_links_entries {
  __typename: "PostBodyEntries";
  block: (AllPostsQuery_postCollection_items_body_links_entries_block | null)[];
}

export interface AllPostsQuery_postCollection_items_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_body_links_assets_block {
  __typename: "Asset";
  sys: AllPostsQuery_postCollection_items_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPostsQuery_postCollection_items_body_links_assets {
  __typename: "PostBodyAssets";
  block: (AllPostsQuery_postCollection_items_body_links_assets_block | null)[];
}

export interface AllPostsQuery_postCollection_items_body_links {
  __typename: "PostBodyLinks";
  entries: AllPostsQuery_postCollection_items_body_links_entries;
  assets: AllPostsQuery_postCollection_items_body_links_assets;
}

export interface AllPostsQuery_postCollection_items_body {
  __typename: "PostBody";
  json: any;
  links: AllPostsQuery_postCollection_items_body_links;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPostsQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: AllPostsQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type AllPostsQuery_postCollection_items_extraSectionCollection_items = AllPostsQuery_postCollection_items_extraSectionCollection_items_PersonalizationContainer | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentCta | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentDuplex | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentFeaturedCards | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentHeroBanner | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentInfoBlock | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentQuote | AllPostsQuery_postCollection_items_extraSectionCollection_items_ComponentTextBlock | AllPostsQuery_postCollection_items_extraSectionCollection_items_WrapperExternalAsset;

export interface AllPostsQuery_postCollection_items_extraSectionCollection {
  __typename: "PostExtraSectionCollection";
  items: (AllPostsQuery_postCollection_items_extraSectionCollection_items | null)[];
}

export interface AllPostsQuery_postCollection_items {
  __typename: "Post";
  sys: AllPostsQuery_postCollection_items_sys;
  internalName: string | null;
  postName: string | null;
  publishedDate: any | null;
  featuredImage: AllPostsQuery_postCollection_items_featuredImage | null;
  slug: string | null;
  category: AllPostsQuery_postCollection_items_category | null;
  author: AllPostsQuery_postCollection_items_author | null;
  introText: AllPostsQuery_postCollection_items_introText | null;
  contentfulMetadata: AllPostsQuery_postCollection_items_contentfulMetadata;
  seo: AllPostsQuery_postCollection_items_seo | null;
  body: AllPostsQuery_postCollection_items_body | null;
  extraSectionCollection: AllPostsQuery_postCollection_items_extraSectionCollection | null;
}

export interface AllPostsQuery_postCollection {
  __typename: "PostCollection";
  items: (AllPostsQuery_postCollection_items | null)[];
}

export interface AllPostsQuery {
  postCollection: AllPostsQuery_postCollection | null;
}

export interface AllPostsQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
