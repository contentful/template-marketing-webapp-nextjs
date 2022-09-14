/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCtasQuery
// ====================================================

export interface AllCtasQuery_componentCtaCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllCtasQuery_componentCtaCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllCtasQuery_componentCtaCollection_items_targetPage_Page_sys;
  pageContent: AllCtasQuery_componentCtaCollection_items_targetPage_Page_pageContent | null;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllCtasQuery_componentCtaCollection_items_targetPage_Post_sys;
}

export type AllCtasQuery_componentCtaCollection_items_targetPage = AllCtasQuery_componentCtaCollection_items_targetPage_Page | AllCtasQuery_componentCtaCollection_items_targetPage_Post;

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Post_sys;
}

export type AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage = AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Page | AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage_Post;

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items {
  __typename: "ComponentCta";
  sys: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_subline | null;
  ctaText: string | null;
  targetPage: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntAudience: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllCtasQuery_componentCtaCollection_items_ntVariantsCollection {
  __typename: "ComponentCtaNt_variantsCollection";
  items: (AllCtasQuery_componentCtaCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllCtasQuery_componentCtaCollection_items {
  __typename: "ComponentCta";
  sys: AllCtasQuery_componentCtaCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: AllCtasQuery_componentCtaCollection_items_subline | null;
  ctaText: string | null;
  targetPage: AllCtasQuery_componentCtaCollection_items_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntVariantsCollection: AllCtasQuery_componentCtaCollection_items_ntVariantsCollection | null;
}

export interface AllCtasQuery_componentCtaCollection {
  __typename: "ComponentCtaCollection";
  items: (AllCtasQuery_componentCtaCollection_items | null)[];
}

export interface AllCtasQuery {
  componentCtaCollection: AllCtasQuery_componentCtaCollection | null;
}

export interface AllCtasQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
