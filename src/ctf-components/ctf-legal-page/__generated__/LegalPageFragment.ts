/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LegalPageFragment
// ====================================================

export interface LegalPageFragment_pageContent_TopicArticle_sys {
  __typename: "Sys";
  id: string;
}

export interface LegalPageFragment_pageContent_TopicArticle {
  __typename: "TopicArticle" | "TopicArticleList" | "TopicBrand" | "TopicCampaign" | "TopicCategory" | "TopicProduct";
  sys: LegalPageFragment_pageContent_TopicArticle_sys;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_featuredImage {
  __typename: "Asset";
  sys: LegalPageFragment_pageContent_TopicBusinessInfo_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets_block {
  __typename: "Asset";
  sys: LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets {
  __typename: "TopicBusinessInfoBodyAssets";
  block: (LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets_block | null)[];
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_body_links {
  __typename: "TopicBusinessInfoBodyLinks";
  assets: LegalPageFragment_pageContent_TopicBusinessInfo_body_links_assets;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo_body {
  __typename: "TopicBusinessInfoBody";
  links: LegalPageFragment_pageContent_TopicBusinessInfo_body_links;
  json: any;
}

export interface LegalPageFragment_pageContent_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: LegalPageFragment_pageContent_TopicBusinessInfo_sys;
  title: string | null;
  featuredImage: LegalPageFragment_pageContent_TopicBusinessInfo_featuredImage | null;
  body: LegalPageFragment_pageContent_TopicBusinessInfo_body | null;
}

export type LegalPageFragment_pageContent = LegalPageFragment_pageContent_TopicArticle | LegalPageFragment_pageContent_TopicBusinessInfo;

export interface LegalPageFragment {
  __typename: "Page";
  pageName: string | null;
  pageContent: LegalPageFragment_pageContent | null;
}
