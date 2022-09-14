/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductTableFragment
// ====================================================

export interface ProductTableFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: ProductTableFragment_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: ProductTableFragment_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: ProductTableFragment_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: ProductTableFragment_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface ProductTableFragment_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (ProductTableFragment_productsCollection_items_featuresCollection_items | null)[];
}

export interface ProductTableFragment_productsCollection_items {
  __typename: "TopicProduct";
  sys: ProductTableFragment_productsCollection_items_sys;
  name: string | null;
  featuredImage: ProductTableFragment_productsCollection_items_featuredImage | null;
  description: ProductTableFragment_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: ProductTableFragment_productsCollection_items_featuresCollection | null;
}

export interface ProductTableFragment_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (ProductTableFragment_productsCollection_items | null)[];
}

export interface ProductTableFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection_items | null)[];
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection_items {
  __typename: "TopicProduct";
  sys: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_sys;
  name: string | null;
  featuredImage: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuredImage | null;
  description: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: ProductTableFragment_ntVariantsCollection_items_productsCollection_items_featuresCollection | null;
}

export interface ProductTableFragment_ntVariantsCollection_items_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (ProductTableFragment_ntVariantsCollection_items_productsCollection_items | null)[];
}

export interface ProductTableFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: ProductTableFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface ProductTableFragment_ntVariantsCollection_items {
  __typename: "ComponentProductTable";
  sys: ProductTableFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: ProductTableFragment_ntVariantsCollection_items_productsCollection | null;
  ntAudience: ProductTableFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface ProductTableFragment_ntVariantsCollection {
  __typename: "ComponentProductTableNt_variantsCollection";
  items: (ProductTableFragment_ntVariantsCollection_items | null)[];
}

export interface ProductTableFragment {
  __typename: "ComponentProductTable";
  sys: ProductTableFragment_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: ProductTableFragment_productsCollection | null;
  ntVariantsCollection: ProductTableFragment_ntVariantsCollection | null;
}
