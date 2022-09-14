/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfDuplexQuery
// ====================================================

export interface CtfDuplexQuery_componentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfDuplexQuery_componentDuplex_targetPage_Page_pageContent_sys;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfDuplexQuery_componentDuplex_targetPage_Page_sys;
  pageContent: CtfDuplexQuery_componentDuplex_targetPage_Page_pageContent | null;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfDuplexQuery_componentDuplex_targetPage_Post_sys;
}

export type CtfDuplexQuery_componentDuplex_targetPage = CtfDuplexQuery_componentDuplex_targetPage_Page | CtfDuplexQuery_componentDuplex_targetPage_Post;

export interface CtfDuplexQuery_componentDuplex_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_image {
  __typename: "Asset";
  sys: CtfDuplexQuery_componentDuplex_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Post_sys;
}

export type CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage = CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Page | CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage_Post;

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection_items {
  __typename: "ComponentDuplex";
  sys: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_targetPage | null;
  image: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntAudience: CtfDuplexQuery_componentDuplex_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfDuplexQuery_componentDuplex_ntVariantsCollection {
  __typename: "ComponentDuplexNt_variantsCollection";
  items: (CtfDuplexQuery_componentDuplex_ntVariantsCollection_items | null)[];
}

export interface CtfDuplexQuery_componentDuplex {
  __typename: "ComponentDuplex";
  sys: CtfDuplexQuery_componentDuplex_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: CtfDuplexQuery_componentDuplex_bodyText | null;
  ctaText: string | null;
  targetPage: CtfDuplexQuery_componentDuplex_targetPage | null;
  image: CtfDuplexQuery_componentDuplex_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntVariantsCollection: CtfDuplexQuery_componentDuplex_ntVariantsCollection | null;
}

export interface CtfDuplexQuery {
  componentDuplex: CtfDuplexQuery_componentDuplex | null;
}

export interface CtfDuplexQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
