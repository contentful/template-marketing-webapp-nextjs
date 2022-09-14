/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfProductQuery
// ====================================================

export interface CtfProductQuery_topicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductQuery_topicProduct_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductQuery_topicProduct_featuredImage {
  __typename: "Asset";
  sys: CtfProductQuery_topicProduct_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductQuery_topicProduct_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links_assets;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: CtfProductQuery_topicProduct_featuresCollection_items_longDescription_links;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links_assets;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: CtfProductQuery_topicProduct_featuresCollection_items_shortDescription_links;
}

export interface CtfProductQuery_topicProduct_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: CtfProductQuery_topicProduct_featuresCollection_items_sys;
  name: string | null;
  longDescription: CtfProductQuery_topicProduct_featuresCollection_items_longDescription | null;
  shortDescription: CtfProductQuery_topicProduct_featuresCollection_items_shortDescription | null;
}

export interface CtfProductQuery_topicProduct_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (CtfProductQuery_topicProduct_featuresCollection_items | null)[];
}

export interface CtfProductQuery_topicProduct {
  __typename: "TopicProduct";
  sys: CtfProductQuery_topicProduct_sys;
  name: string | null;
  featuredImage: CtfProductQuery_topicProduct_featuredImage | null;
  description: CtfProductQuery_topicProduct_description | null;
  price: number | null;
  featuresCollection: CtfProductQuery_topicProduct_featuresCollection | null;
}

export interface CtfProductQuery {
  topicProduct: CtfProductQuery_topicProduct | null;
}

export interface CtfProductQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
