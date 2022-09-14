/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfProductTableQuery
// ====================================================

export interface CtfProductTableQuery_componentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection_items | null)[];
}

export interface CtfProductTableQuery_componentProductTable_productsCollection_items {
  __typename: "TopicProduct";
  sys: CtfProductTableQuery_componentProductTable_productsCollection_items_sys;
  name: string | null;
  featuredImage: CtfProductTableQuery_componentProductTable_productsCollection_items_featuredImage | null;
  description: CtfProductTableQuery_componentProductTable_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: CtfProductTableQuery_componentProductTable_productsCollection_items_featuresCollection | null;
}

export interface CtfProductTableQuery_componentProductTable_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (CtfProductTableQuery_componentProductTable_productsCollection_items | null)[];
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection_items | null)[];
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items {
  __typename: "TopicProduct";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_sys;
  name: string | null;
  featuredImage: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuredImage | null;
  description: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items_featuresCollection | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection_items | null)[];
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection_items {
  __typename: "ComponentProductTable";
  sys: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_productsCollection | null;
  ntAudience: CtfProductTableQuery_componentProductTable_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfProductTableQuery_componentProductTable_ntVariantsCollection {
  __typename: "ComponentProductTableNt_variantsCollection";
  items: (CtfProductTableQuery_componentProductTable_ntVariantsCollection_items | null)[];
}

export interface CtfProductTableQuery_componentProductTable {
  __typename: "ComponentProductTable";
  sys: CtfProductTableQuery_componentProductTable_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: CtfProductTableQuery_componentProductTable_productsCollection | null;
  ntVariantsCollection: CtfProductTableQuery_componentProductTable_ntVariantsCollection | null;
}

export interface CtfProductTableQuery {
  componentProductTable: CtfProductTableQuery_componentProductTable | null;
}

export interface CtfProductTableQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
