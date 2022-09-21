/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllDuplexesQuery
// ====================================================

export interface AllDuplexesQuery_componentDuplexCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_sys;
  pageContent: AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page_pageContent | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllDuplexesQuery_componentDuplexCollection_items_targetPage_Post_sys;
}

export type AllDuplexesQuery_componentDuplexCollection_items_targetPage = AllDuplexesQuery_componentDuplexCollection_items_targetPage_Page | AllDuplexesQuery_componentDuplexCollection_items_targetPage_Post;

export interface AllDuplexesQuery_componentDuplexCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_image {
  __typename: "Asset";
  sys: AllDuplexesQuery_componentDuplexCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_bodyText {
  __typename: "ComponentDuplexBodyText";
  json: any;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Post_sys;
}

export type AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage = AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Page | AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage_Post;

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items {
  __typename: "ComponentDuplex";
  sys: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_targetPage | null;
  image: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntAudience: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection {
  __typename: "ComponentDuplexNt_variantsCollection";
  items: (AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllDuplexesQuery_componentDuplexCollection_items {
  __typename: "ComponentDuplex";
  sys: AllDuplexesQuery_componentDuplexCollection_items_sys;
  internalName: string | null;
  containerLayout: boolean | null;
  headline: string | null;
  bodyText: AllDuplexesQuery_componentDuplexCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: AllDuplexesQuery_componentDuplexCollection_items_targetPage | null;
  image: AllDuplexesQuery_componentDuplexCollection_items_image | null;
  imageStyle: boolean | null;
  imageAlignment: string | null;
  colorPalette: string | null;
  ntVariantsCollection: AllDuplexesQuery_componentDuplexCollection_items_ntVariantsCollection | null;
}

export interface AllDuplexesQuery_componentDuplexCollection {
  __typename: "ComponentDuplexCollection";
  items: (AllDuplexesQuery_componentDuplexCollection_items | null)[];
}

export interface AllDuplexesQuery {
  componentDuplexCollection: AllDuplexesQuery_componentDuplexCollection | null;
}

export interface AllDuplexesQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
