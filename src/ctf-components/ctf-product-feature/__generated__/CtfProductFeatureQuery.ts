/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfProductFeatureQuery
// ====================================================

export interface CtfProductFeatureQuery_topicProductFeature_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets_block | null)[];
}

export interface CtfProductFeatureQuery_topicProductFeature_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: CtfProductFeatureQuery_topicProductFeature_longDescription_links_assets;
}

export interface CtfProductFeatureQuery_topicProductFeature_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: CtfProductFeatureQuery_topicProductFeature_longDescription_links;
}

export interface CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets_block | null)[];
}

export interface CtfProductFeatureQuery_topicProductFeature_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: CtfProductFeatureQuery_topicProductFeature_shortDescription_links_assets;
}

export interface CtfProductFeatureQuery_topicProductFeature_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: CtfProductFeatureQuery_topicProductFeature_shortDescription_links;
}

export interface CtfProductFeatureQuery_topicProductFeature {
  __typename: "TopicProductFeature";
  sys: CtfProductFeatureQuery_topicProductFeature_sys;
  name: string | null;
  longDescription: CtfProductFeatureQuery_topicProductFeature_longDescription | null;
  shortDescription: CtfProductFeatureQuery_topicProductFeature_shortDescription | null;
}

export interface CtfProductFeatureQuery {
  topicProductFeature: CtfProductFeatureQuery_topicProductFeature | null;
}

export interface CtfProductFeatureQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
