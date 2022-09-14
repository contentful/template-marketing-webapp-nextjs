/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfPageQuery
// ====================================================

export interface CtfPageQuery_pageCollection_items_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_seo_image {
  __typename: "Asset";
  sys: CtfPageQuery_pageCollection_items_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPageQuery_pageCollection_items_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: CtfPageQuery_pageCollection_items_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_PersonalizationContainer_sys;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_topSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfPageQuery_pageCollection_items_topSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfPageQuery_pageCollection_items_topSectionCollection_items = CtfPageQuery_pageCollection_items_topSectionCollection_items_PersonalizationContainer | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentCta | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentDuplex | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentFeaturedCards | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentHeroBanner | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentInfoBlock | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentQuote | CtfPageQuery_pageCollection_items_topSectionCollection_items_ComponentTextBlock | CtfPageQuery_pageCollection_items_topSectionCollection_items_WrapperExternalAsset;

export interface CtfPageQuery_pageCollection_items_topSectionCollection {
  __typename: "PageTopSectionCollection";
  items: (CtfPageQuery_pageCollection_items_topSectionCollection_items | null)[];
}

export interface CtfPageQuery_pageCollection_items_pageContent_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_pageContent_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: CtfPageQuery_pageCollection_items_pageContent_ComponentProductTable_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_pageContent_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_pageContent_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_pageContent_TopicProduct {
  __typename: "TopicProduct";
  sys: CtfPageQuery_pageCollection_items_pageContent_TopicProduct_sys;
  internalName: string | null;
}

export type CtfPageQuery_pageCollection_items_pageContent = CtfPageQuery_pageCollection_items_pageContent_ComponentProductTable | CtfPageQuery_pageCollection_items_pageContent_TopicBusinessInfo | CtfPageQuery_pageCollection_items_pageContent_TopicProduct;

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_PersonalizationContainer_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_PersonalizationContainer {
  __typename: "PersonalizationContainer";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_PersonalizationContainer_sys;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentCta {
  __typename: "ComponentCta";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentCta_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentDuplex_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentQuote {
  __typename: "ComponentQuote";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentQuote_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPageQuery_pageCollection_items_extraSectionCollection_items_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfPageQuery_pageCollection_items_extraSectionCollection_items_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type CtfPageQuery_pageCollection_items_extraSectionCollection_items = CtfPageQuery_pageCollection_items_extraSectionCollection_items_PersonalizationContainer | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentCta | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentDuplex | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentFeaturedCards | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentHeroBanner | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentInfoBlock | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentQuote | CtfPageQuery_pageCollection_items_extraSectionCollection_items_ComponentTextBlock | CtfPageQuery_pageCollection_items_extraSectionCollection_items_WrapperExternalAsset;

export interface CtfPageQuery_pageCollection_items_extraSectionCollection {
  __typename: "PageExtraSectionCollection";
  items: (CtfPageQuery_pageCollection_items_extraSectionCollection_items | null)[];
}

export interface CtfPageQuery_pageCollection_items {
  __typename: "Page";
  pageName: string | null;
  internalName: string | null;
  slug: string | null;
  seo: CtfPageQuery_pageCollection_items_seo | null;
  topSectionCollection: CtfPageQuery_pageCollection_items_topSectionCollection | null;
  pageContent: CtfPageQuery_pageCollection_items_pageContent | null;
  extraSectionCollection: CtfPageQuery_pageCollection_items_extraSectionCollection | null;
}

export interface CtfPageQuery_pageCollection {
  __typename: "PageCollection";
  items: (CtfPageQuery_pageCollection_items | null)[];
}

export interface CtfPageQuery {
  pageCollection: CtfPageQuery_pageCollection | null;
}

export interface CtfPageQueryVariables {
  slug: string;
  locale?: string | null;
  preview?: boolean | null;
}
