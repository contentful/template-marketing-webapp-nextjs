/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProductsQuery
// ====================================================

export interface AllProductsQuery_topicProductCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductsQuery_topicProductCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductsQuery_topicProductCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllProductsQuery_topicProductCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductsQuery_topicProductCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription_links;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription_links;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: AllProductsQuery_topicProductCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: AllProductsQuery_topicProductCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: AllProductsQuery_topicProductCollection_items_featuresCollection_items_shortDescription | null;
}

export interface AllProductsQuery_topicProductCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (AllProductsQuery_topicProductCollection_items_featuresCollection_items | null)[];
}

export interface AllProductsQuery_topicProductCollection_items {
  __typename: "TopicProduct";
  sys: AllProductsQuery_topicProductCollection_items_sys;
  name: string | null;
  featuredImage: AllProductsQuery_topicProductCollection_items_featuredImage | null;
  description: AllProductsQuery_topicProductCollection_items_description | null;
  price: number | null;
  featuresCollection: AllProductsQuery_topicProductCollection_items_featuresCollection | null;
}

export interface AllProductsQuery_topicProductCollection {
  __typename: "TopicProductCollection";
  items: (AllProductsQuery_topicProductCollection_items | null)[];
}

export interface AllProductsQuery {
  topicProductCollection: AllProductsQuery_topicProductCollection | null;
}

export interface AllProductsQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
