/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFeatureFragment
// ====================================================

export interface ProductFeatureFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFeatureFragment_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFeatureFragment_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFeatureFragment_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFeatureFragment_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductFeatureFragment_longDescription_links_assets_block | null)[];
}

export interface ProductFeatureFragment_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductFeatureFragment_longDescription_links_assets;
}

export interface ProductFeatureFragment_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductFeatureFragment_longDescription_links;
}

export interface ProductFeatureFragment_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFeatureFragment_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFeatureFragment_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFeatureFragment_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductFeatureFragment_shortDescription_links_assets_block | null)[];
}

export interface ProductFeatureFragment_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductFeatureFragment_shortDescription_links_assets;
}

export interface ProductFeatureFragment_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductFeatureFragment_shortDescription_links;
}

export interface ProductFeatureFragment {
  __typename: "TopicProductFeature";
  sys: ProductFeatureFragment_sys;
  name: string | null;
  longDescription: ProductFeatureFragment_longDescription | null;
  shortDescription: ProductFeatureFragment_shortDescription | null;
}
