/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DuplexFragmentBase
// ====================================================

export interface DuplexFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragmentBase_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface DuplexFragmentBase_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragmentBase_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragmentBase_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: DuplexFragmentBase_targetPage_Page_pageContent_sys;
}

export interface DuplexFragmentBase_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: DuplexFragmentBase_targetPage_Page_sys;
  pageContent: DuplexFragmentBase_targetPage_Page_pageContent | null;
}

export interface DuplexFragmentBase_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragmentBase_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: DuplexFragmentBase_targetPage_Post_sys;
}

export type DuplexFragmentBase_targetPage = DuplexFragmentBase_targetPage_Page | DuplexFragmentBase_targetPage_Post;

export interface DuplexFragmentBase_image_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragmentBase_image {
  __typename: "Asset";
  sys: DuplexFragmentBase_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface DuplexFragmentBase {
  __typename: "ComponentDuplex";
  sys: DuplexFragmentBase_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: DuplexFragmentBase_bodyText | null;
  ctaText: string | null;
  targetPage: DuplexFragmentBase_targetPage | null;
  image: DuplexFragmentBase_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
}
