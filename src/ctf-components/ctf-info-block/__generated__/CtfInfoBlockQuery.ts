/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfInfoBlockQuery
// ====================================================

export interface CtfInfoBlockQuery_componentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block1Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block2Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block3Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Image {
  __typename: "Asset";
  sys: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items {
  __typename: "ComponentInfoBlock";
  sys: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Image | null;
  block1Body: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block1Body | null;
  block2Image: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Image | null;
  block2Body: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block2Body | null;
  block3Image: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Image | null;
  block3Body: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_block3Body | null;
  colorPalette: string | null;
  ntAudience: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection {
  __typename: "ComponentInfoBlockNt_variantsCollection";
  items: (CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection_items | null)[];
}

export interface CtfInfoBlockQuery_componentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: CtfInfoBlockQuery_componentInfoBlock_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: CtfInfoBlockQuery_componentInfoBlock_block1Image | null;
  block1Body: CtfInfoBlockQuery_componentInfoBlock_block1Body | null;
  block2Image: CtfInfoBlockQuery_componentInfoBlock_block2Image | null;
  block2Body: CtfInfoBlockQuery_componentInfoBlock_block2Body | null;
  block3Image: CtfInfoBlockQuery_componentInfoBlock_block3Image | null;
  block3Body: CtfInfoBlockQuery_componentInfoBlock_block3Body | null;
  colorPalette: string | null;
  ntVariantsCollection: CtfInfoBlockQuery_componentInfoBlock_ntVariantsCollection | null;
}

export interface CtfInfoBlockQuery {
  componentInfoBlock: CtfInfoBlockQuery_componentInfoBlock | null;
}

export interface CtfInfoBlockQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
