/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InfoBlockFragmentBase
// ====================================================

export interface InfoBlockFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragmentBase_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragmentBase_block1Image {
  __typename: "Asset";
  sys: InfoBlockFragmentBase_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragmentBase_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface InfoBlockFragmentBase_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragmentBase_block2Image {
  __typename: "Asset";
  sys: InfoBlockFragmentBase_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragmentBase_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface InfoBlockFragmentBase_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragmentBase_block3Image {
  __typename: "Asset";
  sys: InfoBlockFragmentBase_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragmentBase_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface InfoBlockFragmentBase {
  __typename: "ComponentInfoBlock";
  sys: InfoBlockFragmentBase_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: InfoBlockFragmentBase_block1Image | null;
  block1Body: InfoBlockFragmentBase_block1Body | null;
  block2Image: InfoBlockFragmentBase_block2Image | null;
  block2Body: InfoBlockFragmentBase_block2Body | null;
  block3Image: InfoBlockFragmentBase_block3Image | null;
  block3Body: InfoBlockFragmentBase_block3Body | null;
  colorPalette: string | null;
}
