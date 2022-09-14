/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageFragment
// ====================================================

export interface PageFragment_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_seo_image {
  __typename: "Asset";
  sys: PageFragment_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PageFragment_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: PageFragment_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface PageFragment_topSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: PageFragment_topSectionCollection_items_PersonalizationContainer_sys;
}

export interface PageFragment_topSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: PageFragment_topSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PageFragment_topSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PageFragment_topSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PageFragment_topSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PageFragment_topSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PageFragment_topSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PageFragment_topSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PageFragment_topSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_topSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PageFragment_topSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PageFragment_topSectionCollection_items = PageFragment_topSectionCollection_items_PersonalizationContainer | PageFragment_topSectionCollection_items_ComponentCta | PageFragment_topSectionCollection_items_ComponentDuplex | PageFragment_topSectionCollection_items_ComponentFeaturedCards | PageFragment_topSectionCollection_items_ComponentHeroBanner | PageFragment_topSectionCollection_items_ComponentInfoBlock | PageFragment_topSectionCollection_items_ComponentQuote | PageFragment_topSectionCollection_items_ComponentTextBlock | PageFragment_topSectionCollection_items_WrapperExternalAsset;

export interface PageFragment_topSectionCollection {
  __typename: "PageTopSectionCollection";
  items: (PageFragment_topSectionCollection_items | null)[];
}

export interface PageFragment_pageContent_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_pageContent_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: PageFragment_pageContent_ComponentProductTable_sys;
  internalName: string | null;
}

export interface PageFragment_pageContent_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_pageContent_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: PageFragment_pageContent_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface PageFragment_pageContent_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_pageContent_TopicProduct {
  __typename: "TopicProduct";
  sys: PageFragment_pageContent_TopicProduct_sys;
  internalName: string | null;
}

export type PageFragment_pageContent = PageFragment_pageContent_ComponentProductTable | PageFragment_pageContent_TopicBusinessInfo | PageFragment_pageContent_TopicProduct;

export interface PageFragment_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: PageFragment_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface PageFragment_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: PageFragment_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: PageFragment_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: PageFragment_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: PageFragment_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: PageFragment_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: PageFragment_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: PageFragment_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface PageFragment_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface PageFragment_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: PageFragment_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type PageFragment_extraSectionCollection_items = PageFragment_extraSectionCollection_items_PersonalizationContainer | PageFragment_extraSectionCollection_items_ComponentCta | PageFragment_extraSectionCollection_items_ComponentDuplex | PageFragment_extraSectionCollection_items_ComponentFeaturedCards | PageFragment_extraSectionCollection_items_ComponentHeroBanner | PageFragment_extraSectionCollection_items_ComponentInfoBlock | PageFragment_extraSectionCollection_items_ComponentQuote | PageFragment_extraSectionCollection_items_ComponentTextBlock | PageFragment_extraSectionCollection_items_WrapperExternalAsset;

export interface PageFragment_extraSectionCollection {
  __typename: "PageExtraSectionCollection";
  items: (PageFragment_extraSectionCollection_items | null)[];
}

export interface PageFragment {
  __typename: "Page";
  pageName: string | null;
  internalName: string | null;
  slug: string | null;
  seo: PageFragment_seo | null;
  topSectionCollection: PageFragment_topSectionCollection | null;
  pageContent: PageFragment_pageContent | null;
  extraSectionCollection: PageFragment_extraSectionCollection | null;
}
