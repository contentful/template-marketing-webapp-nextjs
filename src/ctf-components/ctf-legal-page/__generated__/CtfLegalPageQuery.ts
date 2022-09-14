/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfLegalPageQuery
// ====================================================

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicArticle_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicArticle {
  __typename: "TopicArticle" | "TopicArticleList" | "TopicBrand" | "TopicCampaign" | "TopicCategory" | "TopicProduct";
  sys: CtfLegalPageQuery_pageCollection_items_pageContent_TopicArticle_sys;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_featuredImage {
  __typename: "Asset";
  sys: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets_block {
  __typename: "Asset";
  sys: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets {
  __typename: "TopicBusinessInfoBodyAssets";
  block: (CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets_block | null)[];
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links {
  __typename: "TopicBusinessInfoBodyLinks";
  assets: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links_assets;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body {
  __typename: "TopicBusinessInfoBody";
  links: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body_links;
  json: any;
}

export interface CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_sys;
  title: string | null;
  featuredImage: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_featuredImage | null;
  body: CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo_body | null;
}

export type CtfLegalPageQuery_pageCollection_items_pageContent = CtfLegalPageQuery_pageCollection_items_pageContent_TopicArticle | CtfLegalPageQuery_pageCollection_items_pageContent_TopicBusinessInfo;

export interface CtfLegalPageQuery_pageCollection_items {
  __typename: "Page";
  pageName: string | null;
  pageContent: CtfLegalPageQuery_pageCollection_items_pageContent | null;
}

export interface CtfLegalPageQuery_pageCollection {
  __typename: "PageCollection";
  items: (CtfLegalPageQuery_pageCollection_items | null)[];
}

export interface CtfLegalPageQuery {
  pageCollection: CtfLegalPageQuery_pageCollection | null;
}

export interface CtfLegalPageQueryVariables {
  slug: string;
  locale?: string | null;
}
