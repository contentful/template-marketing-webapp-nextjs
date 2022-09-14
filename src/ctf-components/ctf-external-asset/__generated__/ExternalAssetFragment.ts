/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExternalAssetFragment
// ====================================================

export interface ExternalAssetFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface ExternalAssetFragment {
  __typename: "WrapperExternalAsset";
  sys: ExternalAssetFragment_sys;
  internalName: string | null;
  title: string | null;
  externalAsset: any | null;
  externalApp: string | null;
  externalUrl: string | null;
}
