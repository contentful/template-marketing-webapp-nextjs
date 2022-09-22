/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllInfoBlocksQuery
// ====================================================

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Image {
  __typename: "Asset";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items {
  __typename: "ComponentInfoBlock";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Image | null;
  block1Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block1Body | null;
  block2Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Image | null;
  block2Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block2Body | null;
  block3Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Image | null;
  block3Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_block3Body | null;
  colorPalette: string | null;
  ntAudience: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection {
  __typename: "ComponentInfoBlockNt_variantsCollection";
  items: (AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection_items {
  __typename: "ComponentInfoBlock";
  sys: AllInfoBlocksQuery_componentInfoBlockCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Image | null;
  block1Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_block1Body | null;
  block2Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Image | null;
  block2Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_block2Body | null;
  block3Image: AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Image | null;
  block3Body: AllInfoBlocksQuery_componentInfoBlockCollection_items_block3Body | null;
  colorPalette: string | null;
  ntVariantsCollection: AllInfoBlocksQuery_componentInfoBlockCollection_items_ntVariantsCollection | null;
}

export interface AllInfoBlocksQuery_componentInfoBlockCollection {
  __typename: "ComponentInfoBlockCollection";
  items: (AllInfoBlocksQuery_componentInfoBlockCollection_items | null)[];
}

export interface AllInfoBlocksQuery {
  componentInfoBlockCollection: AllInfoBlocksQuery_componentInfoBlockCollection | null;
}

export interface AllInfoBlocksQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
