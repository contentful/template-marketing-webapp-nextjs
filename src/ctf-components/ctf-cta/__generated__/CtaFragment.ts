/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CtaFragment
// ====================================================

export interface CtaFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface CtaFragment_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtaFragment_targetPage_Page_pageContent_sys;
}

export interface CtaFragment_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtaFragment_targetPage_Page_sys;
  pageContent: CtaFragment_targetPage_Page_pageContent | null;
}

export interface CtaFragment_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtaFragment_targetPage_Post_sys;
}

export type CtaFragment_targetPage = CtaFragment_targetPage_Page | CtaFragment_targetPage_Post;

export interface CtaFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_ntVariantsCollection_items_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtaFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtaFragment_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: CtaFragment_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtaFragment_ntVariantsCollection_items_targetPage_Post_sys;
}

export type CtaFragment_ntVariantsCollection_items_targetPage = CtaFragment_ntVariantsCollection_items_targetPage_Page | CtaFragment_ntVariantsCollection_items_targetPage_Post;

export interface CtaFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtaFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtaFragment_ntVariantsCollection_items {
  __typename: "ComponentCta";
  sys: CtaFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: CtaFragment_ntVariantsCollection_items_subline | null;
  ctaText: string | null;
  targetPage: CtaFragment_ntVariantsCollection_items_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntAudience: CtaFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface CtaFragment_ntVariantsCollection {
  __typename: "ComponentCtaNt_variantsCollection";
  items: (CtaFragment_ntVariantsCollection_items | null)[];
}

export interface CtaFragment {
  __typename: "ComponentCta";
  sys: CtaFragment_sys;
  internalName: string | null;
  headline: string | null;
  subline: CtaFragment_subline | null;
  ctaText: string | null;
  targetPage: CtaFragment_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
  ntVariantsCollection: CtaFragment_ntVariantsCollection | null;
}
