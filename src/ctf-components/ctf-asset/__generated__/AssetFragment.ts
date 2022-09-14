/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AssetFragment
// ====================================================

export interface AssetFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface AssetFragment {
  __typename: "Asset";
  sys: AssetFragment_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}
