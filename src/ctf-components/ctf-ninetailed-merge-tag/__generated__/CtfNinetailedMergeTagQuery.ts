/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfNinetailedMergeTagQuery
// ====================================================

export interface CtfNinetailedMergeTagQuery_ntMergetag_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfNinetailedMergeTagQuery_ntMergetag {
  __typename: "NtMergetag";
  sys: CtfNinetailedMergeTagQuery_ntMergetag_sys;
  id: string | null;
}

export interface CtfNinetailedMergeTagQuery {
  ntMergetag: CtfNinetailedMergeTagQuery_ntMergetag | null;
}

export interface CtfNinetailedMergeTagQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
