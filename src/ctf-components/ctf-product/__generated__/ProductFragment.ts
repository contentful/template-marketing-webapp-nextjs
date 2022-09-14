/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragment_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragment_featuredImage {
  __typename: "Asset";
  sys: ProductFragment_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragment_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface ProductFragment_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragment_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragment_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFragment_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragment_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductFragment_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface ProductFragment_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductFragment_featuresCollection_items_longDescription_links_assets;
}

export interface ProductFragment_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductFragment_featuresCollection_items_longDescription_links;
}

export interface ProductFragment_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductFragment_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductFragment_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductFragment_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductFragment_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface ProductFragment_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductFragment_featuresCollection_items_shortDescription_links_assets;
}

export interface ProductFragment_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductFragment_featuresCollection_items_shortDescription_links;
}

export interface ProductFragment_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: ProductFragment_featuresCollection_items_sys;
  name: string | null;
  longDescription: ProductFragment_featuresCollection_items_longDescription | null;
  shortDescription: ProductFragment_featuresCollection_items_shortDescription | null;
}

export interface ProductFragment_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (ProductFragment_featuresCollection_items | null)[];
}

export interface ProductFragment {
  __typename: "TopicProduct";
  sys: ProductFragment_sys;
  name: string | null;
  featuredImage: ProductFragment_featuredImage | null;
  description: ProductFragment_description | null;
  price: number | null;
  featuresCollection: ProductFragment_featuresCollection | null;
}
