/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProductTablesQuery
// ====================================================

export interface AllProductTablesQuery_componentProductTableCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection_items | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items {
  __typename: "TopicProduct";
  sys: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_sys;
  name: string | null;
  featuredImage: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuredImage | null;
  description: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items_featuresCollection | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items_productsCollection_items | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection_items | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items {
  __typename: "TopicProduct";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_sys;
  name: string | null;
  featuredImage: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuredImage | null;
  description: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items_featuresCollection | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection_items | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items {
  __typename: "ComponentProductTable";
  sys: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_productsCollection | null;
  ntAudience: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection {
  __typename: "ComponentProductTableNt_variantsCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllProductTablesQuery_componentProductTableCollection_items {
  __typename: "ComponentProductTable";
  sys: AllProductTablesQuery_componentProductTableCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: AllProductTablesQuery_componentProductTableCollection_items_productsCollection | null;
  ntVariantsCollection: AllProductTablesQuery_componentProductTableCollection_items_ntVariantsCollection | null;
}

export interface AllProductTablesQuery_componentProductTableCollection {
  __typename: "ComponentProductTableCollection";
  items: (AllProductTablesQuery_componentProductTableCollection_items | null)[];
}

export interface AllProductTablesQuery {
  componentProductTableCollection: AllProductTablesQuery_componentProductTableCollection | null;
}

export interface AllProductTablesQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
