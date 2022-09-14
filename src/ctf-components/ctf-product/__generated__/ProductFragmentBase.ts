/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragmentBase
// ====================================================

export interface ProductFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragmentBase_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragmentBase_featuredImage {
  __typename: "Asset";
  sys: ProductFragmentBase_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragmentBase_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface ProductFragmentBase_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragmentBase_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragmentBase_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFragmentBase_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragmentBase_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductFragmentBase_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface ProductFragmentBase_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductFragmentBase_featuresCollection_items_longDescription_links_assets;
}

export interface ProductFragmentBase_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductFragmentBase_featuresCollection_items_longDescription_links;
}

export interface ProductFragmentBase_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragmentBase_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFragmentBase_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragmentBase_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductFragmentBase_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface ProductFragmentBase_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductFragmentBase_featuresCollection_items_shortDescription_links_assets;
}

export interface ProductFragmentBase_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductFragmentBase_featuresCollection_items_shortDescription_links;
}

export interface ProductFragmentBase_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: ProductFragmentBase_featuresCollection_items_sys;
  name: string | null;
  longDescription: ProductFragmentBase_featuresCollection_items_longDescription | null;
  shortDescription: ProductFragmentBase_featuresCollection_items_shortDescription | null;
}

export interface ProductFragmentBase_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (ProductFragmentBase_featuresCollection_items | null)[];
}

export interface ProductFragmentBase {
  __typename: "TopicProduct";
  sys: ProductFragmentBase_sys;
  name: string | null;
  featuredImage: ProductFragmentBase_featuredImage | null;
  description: ProductFragmentBase_description | null;
  price: number | null;
  featuresCollection: ProductFragmentBase_featuresCollection | null;
}
