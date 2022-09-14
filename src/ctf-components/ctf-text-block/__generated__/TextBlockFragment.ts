/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TextBlockFragment
// ====================================================

export interface TextBlockFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: TextBlockFragment_body_links_entries_block_Seo_sys;
}

export interface TextBlockFragment_body_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: TextBlockFragment_body_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: TextBlockFragment_body_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: TextBlockFragment_body_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: TextBlockFragment_body_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: TextBlockFragment_body_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: TextBlockFragment_body_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: TextBlockFragment_body_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: TextBlockFragment_body_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: TextBlockFragment_body_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: TextBlockFragment_body_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: TextBlockFragment_body_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface TextBlockFragment_body_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: TextBlockFragment_body_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type TextBlockFragment_body_links_entries_block = TextBlockFragment_body_links_entries_block_Seo | TextBlockFragment_body_links_entries_block_ComponentCta | TextBlockFragment_body_links_entries_block_ComponentDuplex | TextBlockFragment_body_links_entries_block_ComponentFeaturedCards | TextBlockFragment_body_links_entries_block_ComponentHeroBanner | TextBlockFragment_body_links_entries_block_ComponentInfoBlock | TextBlockFragment_body_links_entries_block_ComponentProductTable | TextBlockFragment_body_links_entries_block_ComponentQuote | TextBlockFragment_body_links_entries_block_ComponentTextBlock | TextBlockFragment_body_links_entries_block_TopicBusinessInfo | TextBlockFragment_body_links_entries_block_TopicPerson | TextBlockFragment_body_links_entries_block_TopicProduct | TextBlockFragment_body_links_entries_block_WrapperExternalAsset;

export interface TextBlockFragment_body_links_entries {
  __typename: "ComponentTextBlockBodyEntries";
  block: (TextBlockFragment_body_links_entries_block | null)[];
}

export interface TextBlockFragment_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface TextBlockFragment_body_links_assets_block {
  __typename: "Asset";
  sys: TextBlockFragment_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface TextBlockFragment_body_links_assets {
  __typename: "ComponentTextBlockBodyAssets";
  block: (TextBlockFragment_body_links_assets_block | null)[];
}

export interface TextBlockFragment_body_links {
  __typename: "ComponentTextBlockBodyLinks";
  entries: TextBlockFragment_body_links_entries;
  assets: TextBlockFragment_body_links_assets;
}

export interface TextBlockFragment_body {
  __typename: "ComponentTextBlockBody";
  json: any;
  links: TextBlockFragment_body_links;
}

export interface TextBlockFragment {
  __typename: "ComponentTextBlock";
  sys: TextBlockFragment_sys;
  headline: string | null;
  subline: string | null;
  body: TextBlockFragment_body | null;
  colorPalette: string | null;
}
