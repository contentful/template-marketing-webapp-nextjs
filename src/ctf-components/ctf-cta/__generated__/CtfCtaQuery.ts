/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfCtaQuery
// ====================================================

export interface CtfCtaQuery_componentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface CtfCtaQuery_componentCta_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfCtaQuery_componentCta_targetPage_Page_pageContent_sys;
}

export interface CtfCtaQuery_componentCta_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfCtaQuery_componentCta_targetPage_Page_sys;
  pageContent: CtfCtaQuery_componentCta_targetPage_Page_pageContent | null;
}

export interface CtfCtaQuery_componentCta_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfCtaQuery_componentCta_targetPage_Post_sys;
}

export type CtfCtaQuery_componentCta_targetPage = CtfCtaQuery_componentCta_targetPage_Page | CtfCtaQuery_componentCta_targetPage_Post;

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Post_sys;
}

export type CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage = CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Page | CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage_Post;

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfCtaQuery_componentCta_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection_items {
  __typename: "ComponentCta";
  sys: CtfCtaQuery_componentCta_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: CtfCtaQuery_componentCta_ntVariantsCollection_items_subline | null;
  ctaText: string | null;
  targetPage: CtfCtaQuery_componentCta_ntVariantsCollection_items_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntAudience: CtfCtaQuery_componentCta_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfCtaQuery_componentCta_ntVariantsCollection {
  __typename: "ComponentCtaNt_variantsCollection";
  items: (CtfCtaQuery_componentCta_ntVariantsCollection_items | null)[];
}

export interface CtfCtaQuery_componentCta {
  __typename: "ComponentCta";
  sys: CtfCtaQuery_componentCta_sys;
  internalName: string | null;
  headline: string | null;
  subline: CtfCtaQuery_componentCta_subline | null;
  ctaText: string | null;
  targetPage: CtfCtaQuery_componentCta_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntVariantsCollection: CtfCtaQuery_componentCta_ntVariantsCollection | null;
}

export interface CtfCtaQuery {
  componentCta: CtfCtaQuery_componentCta | null;
}

export interface CtfCtaQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
