/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RichTextEntryHyperlinkQuery
// ====================================================

export interface RichTextEntryHyperlinkQuery_page_sys {
  __typename: "Sys";
  id: string;
}

export interface RichTextEntryHyperlinkQuery_page {
  __typename: "Page";
  sys: RichTextEntryHyperlinkQuery_page_sys;
  slug: string | null;
}

export interface RichTextEntryHyperlinkQuery_post_sys {
  __typename: "Sys";
  id: string;
}

export interface RichTextEntryHyperlinkQuery_post {
  __typename: "Post";
  sys: RichTextEntryHyperlinkQuery_post_sys;
  slug: string | null;
}

export interface RichTextEntryHyperlinkQuery {
  page: RichTextEntryHyperlinkQuery_page | null;
  post: RichTextEntryHyperlinkQuery_post | null;
}

export interface RichTextEntryHyperlinkQueryVariables {
  id: string;
  preview?: boolean | null;
}
