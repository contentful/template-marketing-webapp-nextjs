/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageFragmentBase
// ====================================================

export interface PageFragmentBase_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_seo_image {
  __typename: "Asset";
  sys: PageFragmentBase_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PageFragmentBase_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: PageFragmentBase_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface PageFragmentBase_topSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: PageFragmentBase_topSectionCollection_items_PersonalizationContainer_sys;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: PageFragmentBase_topSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PageFragmentBase_topSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PageFragmentBase_topSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PageFragmentBase_topSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PageFragmentBase_topSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PageFragmentBase_topSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PageFragmentBase_topSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PageFragmentBase_topSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_topSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PageFragmentBase_topSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PageFragmentBase_topSectionCollection_items = PageFragmentBase_topSectionCollection_items_PersonalizationContainer | PageFragmentBase_topSectionCollection_items_ComponentCta | PageFragmentBase_topSectionCollection_items_ComponentDuplex | PageFragmentBase_topSectionCollection_items_ComponentFeaturedCards | PageFragmentBase_topSectionCollection_items_ComponentHeroBanner | PageFragmentBase_topSectionCollection_items_ComponentInfoBlock | PageFragmentBase_topSectionCollection_items_ComponentQuote | PageFragmentBase_topSectionCollection_items_ComponentTextBlock | PageFragmentBase_topSectionCollection_items_WrapperExternalAsset;

export interface PageFragmentBase_topSectionCollection {
  __typename: "PageTopSectionCollection";
  items: (PageFragmentBase_topSectionCollection_items | null)[];
}

export interface PageFragmentBase_pageContent_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_pageContent_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: PageFragmentBase_pageContent_ComponentProductTable_sys;
  internalName: string | null;
}

export interface PageFragmentBase_pageContent_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_pageContent_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: PageFragmentBase_pageContent_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface PageFragmentBase_pageContent_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_pageContent_TopicProduct {
  __typename: "TopicProduct";
  sys: PageFragmentBase_pageContent_TopicProduct_sys;
  internalName: string | null;
}

export type PageFragmentBase_pageContent = PageFragmentBase_pageContent_ComponentProductTable | PageFragmentBase_pageContent_TopicBusinessInfo | PageFragmentBase_pageContent_TopicProduct;

export interface PageFragmentBase_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: PageFragmentBase_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PageFragmentBase_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PageFragmentBase_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragmentBase_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PageFragmentBase_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PageFragmentBase_extraSectionCollection_items = PageFragmentBase_extraSectionCollection_items_PersonalizationContainer | PageFragmentBase_extraSectionCollection_items_ComponentCta | PageFragmentBase_extraSectionCollection_items_ComponentDuplex | PageFragmentBase_extraSectionCollection_items_ComponentFeaturedCards | PageFragmentBase_extraSectionCollection_items_ComponentHeroBanner | PageFragmentBase_extraSectionCollection_items_ComponentInfoBlock | PageFragmentBase_extraSectionCollection_items_ComponentQuote | PageFragmentBase_extraSectionCollection_items_ComponentTextBlock | PageFragmentBase_extraSectionCollection_items_WrapperExternalAsset;

export interface PageFragmentBase_extraSectionCollection {
  __typename: "PageExtraSectionCollection";
  items: (PageFragmentBase_extraSectionCollection_items | null)[];
}

export interface PageFragmentBase {
  __typename: "Page";
  pageName: string | null;
  internalName: string | null;
  slug: string | null;
  seo: PageFragmentBase_seo | null;
  topSectionCollection: PageFragmentBase_topSectionCollection | null;
  pageContent: PageFragmentBase_pageContent | null;
  extraSectionCollection: PageFragmentBase_extraSectionCollection | null;
}
