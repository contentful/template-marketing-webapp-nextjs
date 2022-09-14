/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BusinessInfoFragment
// ====================================================

export interface BusinessInfoFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_featuredImage {
  __typename: "Asset";
  sys: BusinessInfoFragment_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: BusinessInfoFragment_body_links_entries_block_Seo_sys;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: BusinessInfoFragment_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: BusinessInfoFragment_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: BusinessInfoFragment_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: BusinessInfoFragment_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface BusinessInfoFragment_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: BusinessInfoFragment_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type BusinessInfoFragment_body_links_entries_block = BusinessInfoFragment_body_links_entries_block_Seo | BusinessInfoFragment_body_links_entries_block_ComponentCta | BusinessInfoFragment_body_links_entries_block_ComponentDuplex | BusinessInfoFragment_body_links_entries_block_ComponentFeaturedCards | BusinessInfoFragment_body_links_entries_block_ComponentHeroBanner | BusinessInfoFragment_body_links_entries_block_ComponentInfoBlock | BusinessInfoFragment_body_links_entries_block_ComponentProductTable | BusinessInfoFragment_body_links_entries_block_ComponentQuote | BusinessInfoFragment_body_links_entries_block_ComponentTextBlock | BusinessInfoFragment_body_links_entries_block_TopicBusinessInfo | BusinessInfoFragment_body_links_entries_block_TopicPerson | BusinessInfoFragment_body_links_entries_block_TopicProduct | BusinessInfoFragment_body_links_entries_block_WrapperExternalAsset;

export interface BusinessInfoFragment_body_links_entries {
  __typename: "TopicBusinessInfoBodyEntries";
  block: (BusinessInfoFragment_body_links_entries_block | null)[];
}

export interface BusinessInfoFragment_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface BusinessInfoFragment_body_links_assets_block {
  __typename: "Asset";
  sys: BusinessInfoFragment_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface BusinessInfoFragment_body_links_assets {
  __typename: "TopicBusinessInfoBodyAssets";
  block: (BusinessInfoFragment_body_links_assets_block | null)[];
}

export interface BusinessInfoFragment_body_links {
  __typename: "TopicBusinessInfoBodyLinks";
  entries: BusinessInfoFragment_body_links_entries;
  assets: BusinessInfoFragment_body_links_assets;
}

export interface BusinessInfoFragment_body {
  __typename: "TopicBusinessInfoBody";
  json: any;
  links: BusinessInfoFragment_body_links;
}

export interface BusinessInfoFragment {
  __typename: "TopicBusinessInfo";
  sys: BusinessInfoFragment_sys;
  name: string | null;
  shortDescription: string | null;
  featuredImage: BusinessInfoFragment_featuredImage | null;
  body: BusinessInfoFragment_body | null;
}
