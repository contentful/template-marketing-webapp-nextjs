/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageForPageLinkFragment
// ====================================================

export interface PageForPageLinkFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface PageForPageLinkFragment_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface PageForPageLinkFragment_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: PageForPageLinkFragment_pageContent_sys;
}

export interface PageForPageLinkFragment {
  __typename: "Page";
  slug: string | null;
  sys: PageForPageLinkFragment_sys;
  pageContent: PageForPageLinkFragment_pageContent | null;
}
