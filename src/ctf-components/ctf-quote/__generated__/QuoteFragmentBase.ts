/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: QuoteFragmentBase
// ====================================================

export interface QuoteFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: QuoteFragmentBase_quote_links_entries_block_Seo_sys;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: QuoteFragmentBase_quote_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: QuoteFragmentBase_quote_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: QuoteFragmentBase_quote_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: QuoteFragmentBase_quote_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface QuoteFragmentBase_quote_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: QuoteFragmentBase_quote_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type QuoteFragmentBase_quote_links_entries_block = QuoteFragmentBase_quote_links_entries_block_Seo | QuoteFragmentBase_quote_links_entries_block_ComponentCta | QuoteFragmentBase_quote_links_entries_block_ComponentDuplex | QuoteFragmentBase_quote_links_entries_block_ComponentFeaturedCards | QuoteFragmentBase_quote_links_entries_block_ComponentHeroBanner | QuoteFragmentBase_quote_links_entries_block_ComponentInfoBlock | QuoteFragmentBase_quote_links_entries_block_ComponentProductTable | QuoteFragmentBase_quote_links_entries_block_ComponentQuote | QuoteFragmentBase_quote_links_entries_block_ComponentTextBlock | QuoteFragmentBase_quote_links_entries_block_TopicBusinessInfo | QuoteFragmentBase_quote_links_entries_block_TopicPerson | QuoteFragmentBase_quote_links_entries_block_TopicProduct | QuoteFragmentBase_quote_links_entries_block_WrapperExternalAsset;

export interface QuoteFragmentBase_quote_links_entries {
  __typename: "ComponentQuoteQuoteEntries";
  block: (QuoteFragmentBase_quote_links_entries_block | null)[];
}

export interface QuoteFragmentBase_quote_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_quote_links_assets_block {
  __typename: "Asset";
  sys: QuoteFragmentBase_quote_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragmentBase_quote_links_assets {
  __typename: "ComponentQuoteQuoteAssets";
  block: (QuoteFragmentBase_quote_links_assets_block | null)[];
}

export interface QuoteFragmentBase_quote_links {
  __typename: "ComponentQuoteQuoteLinks";
  entries: QuoteFragmentBase_quote_links_entries;
  assets: QuoteFragmentBase_quote_links_assets;
}

export interface QuoteFragmentBase_quote {
  __typename: "ComponentQuoteQuote";
  json: any;
  links: QuoteFragmentBase_quote_links;
}

export interface QuoteFragmentBase_image_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragmentBase_image {
  __typename: "Asset";
  sys: QuoteFragmentBase_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragmentBase {
  __typename: "ComponentQuote";
  sys: QuoteFragmentBase_sys;
  internalName: string | null;
  quote: QuoteFragmentBase_quote | null;
  quoteAlignment: boolean | null;
  image: QuoteFragmentBase_image | null;
  imagePosition: boolean | null;
  colorPalette: string | null;
}
