/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: QuoteFragment
// ====================================================

export interface QuoteFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: QuoteFragment_quote_links_entries_block_Seo_sys;
}

export interface QuoteFragment_quote_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: QuoteFragment_quote_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: QuoteFragment_quote_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: QuoteFragment_quote_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: QuoteFragment_quote_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: QuoteFragment_quote_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: QuoteFragment_quote_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: QuoteFragment_quote_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: QuoteFragment_quote_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: QuoteFragment_quote_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: QuoteFragment_quote_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: QuoteFragment_quote_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface QuoteFragment_quote_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: QuoteFragment_quote_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type QuoteFragment_quote_links_entries_block = QuoteFragment_quote_links_entries_block_Seo | QuoteFragment_quote_links_entries_block_ComponentCta | QuoteFragment_quote_links_entries_block_ComponentDuplex | QuoteFragment_quote_links_entries_block_ComponentFeaturedCards | QuoteFragment_quote_links_entries_block_ComponentHeroBanner | QuoteFragment_quote_links_entries_block_ComponentInfoBlock | QuoteFragment_quote_links_entries_block_ComponentProductTable | QuoteFragment_quote_links_entries_block_ComponentQuote | QuoteFragment_quote_links_entries_block_ComponentTextBlock | QuoteFragment_quote_links_entries_block_TopicBusinessInfo | QuoteFragment_quote_links_entries_block_TopicPerson | QuoteFragment_quote_links_entries_block_TopicProduct | QuoteFragment_quote_links_entries_block_WrapperExternalAsset;

export interface QuoteFragment_quote_links_entries {
  __typename: "ComponentQuoteQuoteEntries";
  block: (QuoteFragment_quote_links_entries_block | null)[];
}

export interface QuoteFragment_quote_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_quote_links_assets_block {
  __typename: "Asset";
  sys: QuoteFragment_quote_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragment_quote_links_assets {
  __typename: "ComponentQuoteQuoteAssets";
  block: (QuoteFragment_quote_links_assets_block | null)[];
}

export interface QuoteFragment_quote_links {
  __typename: "ComponentQuoteQuoteLinks";
  entries: QuoteFragment_quote_links_entries;
  assets: QuoteFragment_quote_links_assets;
}

export interface QuoteFragment_quote {
  __typename: "ComponentQuoteQuote";
  json: any;
  links: QuoteFragment_quote_links;
}

export interface QuoteFragment_image_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_image {
  __typename: "Asset";
  sys: QuoteFragment_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_Seo_sys;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentCta {
  __typename: "ComponentCta";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentCta_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentDuplex_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentProductTable_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentQuote {
  __typename: "ComponentQuote";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentQuote_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicPerson {
  __typename: "TopicPerson";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicPerson_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicProduct {
  __typename: "TopicProduct";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicProduct_sys;
  internalName: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type QuoteFragment_ntVariantsCollection_items_quote_links_entries_block = QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_Seo | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentCta | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentDuplex | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentFeaturedCards | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentHeroBanner | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentInfoBlock | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentProductTable | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentQuote | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_ComponentTextBlock | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicBusinessInfo | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicPerson | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_TopicProduct | QuoteFragment_ntVariantsCollection_items_quote_links_entries_block_WrapperExternalAsset;

export interface QuoteFragment_ntVariantsCollection_items_quote_links_entries {
  __typename: "ComponentQuoteQuoteEntries";
  block: (QuoteFragment_ntVariantsCollection_items_quote_links_entries_block | null)[];
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_assets_block {
  __typename: "Asset";
  sys: QuoteFragment_ntVariantsCollection_items_quote_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links_assets {
  __typename: "ComponentQuoteQuoteAssets";
  block: (QuoteFragment_ntVariantsCollection_items_quote_links_assets_block | null)[];
}

export interface QuoteFragment_ntVariantsCollection_items_quote_links {
  __typename: "ComponentQuoteQuoteLinks";
  entries: QuoteFragment_ntVariantsCollection_items_quote_links_entries;
  assets: QuoteFragment_ntVariantsCollection_items_quote_links_assets;
}

export interface QuoteFragment_ntVariantsCollection_items_quote {
  __typename: "ComponentQuoteQuote";
  json: any;
  links: QuoteFragment_ntVariantsCollection_items_quote_links;
}

export interface QuoteFragment_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: QuoteFragment_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface QuoteFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: QuoteFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface QuoteFragment_ntVariantsCollection_items {
  __typename: "ComponentQuote";
  sys: QuoteFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  quote: QuoteFragment_ntVariantsCollection_items_quote | null;
  quoteAlignment: boolean | null;
  image: QuoteFragment_ntVariantsCollection_items_image | null;
  imagePosition: boolean | null;
  colorPalette: string | null;
  ntAudience: QuoteFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface QuoteFragment_ntVariantsCollection {
  __typename: "ComponentQuoteNt_variantsCollection";
  items: (QuoteFragment_ntVariantsCollection_items | null)[];
}

export interface QuoteFragment {
  __typename: "ComponentQuote";
  sys: QuoteFragment_sys;
  internalName: string | null;
  quote: QuoteFragment_quote | null;
  quoteAlignment: boolean | null;
  image: QuoteFragment_image | null;
  imagePosition: boolean | null;
  colorPalette: string | null;
  ntVariantsCollection: QuoteFragment_ntVariantsCollection | null;
}
