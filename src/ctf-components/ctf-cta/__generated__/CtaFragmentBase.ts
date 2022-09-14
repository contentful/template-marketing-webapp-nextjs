/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CtaFragmentBase
// ====================================================

export interface CtaFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragmentBase_subline {
  __typename: "ComponentCtaSubline";
  json: any;
}

export interface CtaFragmentBase_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragmentBase_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragmentBase_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtaFragmentBase_targetPage_Page_pageContent_sys;
}

export interface CtaFragmentBase_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtaFragmentBase_targetPage_Page_sys;
  pageContent: CtaFragmentBase_targetPage_Page_pageContent | null;
}

export interface CtaFragmentBase_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtaFragmentBase_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtaFragmentBase_targetPage_Post_sys;
}

export type CtaFragmentBase_targetPage = CtaFragmentBase_targetPage_Page | CtaFragmentBase_targetPage_Post;

export interface CtaFragmentBase {
  __typename: "ComponentCta";
  sys: CtaFragmentBase_sys;
  internalName: string | null;
  headline: string | null;
  subline: CtaFragmentBase_subline | null;
  ctaText: string | null;
  targetPage: CtaFragmentBase_targetPage | null;
  urlParameters: string | null;
  colorPalette: string | null;
}
