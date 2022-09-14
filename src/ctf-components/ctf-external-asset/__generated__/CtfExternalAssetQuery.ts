/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfExternalAssetQuery
// ====================================================

export interface CtfExternalAssetQuery_wrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items {
  __typename: "WrapperExternalAsset";
  sys: CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_sys;
  internalName: string | null;
  title: string | null;
  externalAsset: any | null;
  externalApp: string | null;
  externalUrl: string | null;
  ntAudience: CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection {
  __typename: "WrapperExternalAssetNt_variantsCollection";
  items: (CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection_items | null)[];
}

export interface CtfExternalAssetQuery_wrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: CtfExternalAssetQuery_wrapperExternalAsset_sys;
  internalName: string | null;
  title: string | null;
  externalAsset: any | null;
  externalApp: string | null;
  externalUrl: string | null;
  ntVariantsCollection: CtfExternalAssetQuery_wrapperExternalAsset_ntVariantsCollection | null;
}

export interface CtfExternalAssetQuery {
  wrapperExternalAsset: CtfExternalAssetQuery_wrapperExternalAsset | null;
}

export interface CtfExternalAssetQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
