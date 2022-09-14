/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DuplexFragment
// ====================================================

export interface DuplexFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface DuplexFragment_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: DuplexFragment_targetPage_Page_pageContent_sys;
}

export interface DuplexFragment_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: DuplexFragment_targetPage_Page_sys;
  pageContent: DuplexFragment_targetPage_Page_pageContent | null;
}

export interface DuplexFragment_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: DuplexFragment_targetPage_Post_sys;
}

export type DuplexFragment_targetPage = DuplexFragment_targetPage_Page | DuplexFragment_targetPage_Post;

export interface DuplexFragment_image_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_image {
  __typename: "Asset";
  sys: DuplexFragment_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface DuplexFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: DuplexFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: DuplexFragment_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: DuplexFragment_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: DuplexFragment_ntVariantsCollection_items_targetPage_Post_sys;
}

export type DuplexFragment_ntVariantsCollection_items_targetPage = DuplexFragment_ntVariantsCollection_items_targetPage_Page | DuplexFragment_ntVariantsCollection_items_targetPage_Post;

export interface DuplexFragment_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: DuplexFragment_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface DuplexFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface DuplexFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: DuplexFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface DuplexFragment_ntVariantsCollection_items {
  __typename: "ComponentDuplex";
  sys: DuplexFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: DuplexFragment_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: DuplexFragment_ntVariantsCollection_items_targetPage | null;
  image: DuplexFragment_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntAudience: DuplexFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface DuplexFragment_ntVariantsCollection {
  __typename: "ComponentDuplexNt_variantsCollection";
  items: (DuplexFragment_ntVariantsCollection_items | null)[];
}

export interface DuplexFragment {
  __typename: "ComponentDuplex";
  sys: DuplexFragment_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: DuplexFragment_bodyText | null;
  ctaText: string | null;
  targetPage: DuplexFragment_targetPage | null;
  image: DuplexFragment_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntVariantsCollection: DuplexFragment_ntVariantsCollection | null;
}
