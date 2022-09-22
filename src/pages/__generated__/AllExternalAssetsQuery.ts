/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllExternalAssetsQuery
// ====================================================

export interface AllExternalAssetsQuery_wrapperExternalAssetCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllExternalAssetsQuery_wrapperExternalAssetCollection_items {
  __typename: "WrapperExternalAsset";
  sys: AllExternalAssetsQuery_wrapperExternalAssetCollection_items_sys;
  internalName: string | null;
  title: string | null;
  externalAsset: any | null;
  externalApp: string | null;
  externalUrl: string | null;
}

export interface AllExternalAssetsQuery_wrapperExternalAssetCollection {
  __typename: "WrapperExternalAssetCollection";
  items: (AllExternalAssetsQuery_wrapperExternalAssetCollection_items | null)[];
}

export interface AllExternalAssetsQuery {
  wrapperExternalAssetCollection: AllExternalAssetsQuery_wrapperExternalAssetCollection | null;
}

export interface AllExternalAssetsQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
