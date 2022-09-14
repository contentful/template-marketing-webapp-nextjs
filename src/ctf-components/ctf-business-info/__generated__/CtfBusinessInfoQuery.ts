/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfBusinessInfoQuery
// ====================================================

export interface CtfBusinessInfoQuery_topicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_featuredImage {
  __typename: "Asset";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_Seo_sys;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block = CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_Seo | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentCta | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentDuplex | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentFeaturedCards | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentHeroBanner | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentInfoBlock | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentProductTable | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentQuote | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_ComponentTextBlock | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicBusinessInfo | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicPerson | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_TopicProduct | CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block_WrapperExternalAsset;

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries {
  __typename: "TopicBusinessInfoBodyEntries";
  block: (CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries_block | null)[];
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets_block {
  __typename: "Asset";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets {
  __typename: "TopicBusinessInfoBodyAssets";
  block: (CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets_block | null)[];
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body_links {
  __typename: "TopicBusinessInfoBodyLinks";
  entries: CtfBusinessInfoQuery_topicBusinessInfo_body_links_entries;
  assets: CtfBusinessInfoQuery_topicBusinessInfo_body_links_assets;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo_body {
  __typename: "TopicBusinessInfoBody";
  json: any;
  links: CtfBusinessInfoQuery_topicBusinessInfo_body_links;
}

export interface CtfBusinessInfoQuery_topicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfBusinessInfoQuery_topicBusinessInfo_sys;
  name: string | null;
  shortDescription: string | null;
  featuredImage: CtfBusinessInfoQuery_topicBusinessInfo_featuredImage | null;
  body: CtfBusinessInfoQuery_topicBusinessInfo_body | null;
}

export interface CtfBusinessInfoQuery {
  topicBusinessInfo: CtfBusinessInfoQuery_topicBusinessInfo | null;
}

export interface CtfBusinessInfoQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
