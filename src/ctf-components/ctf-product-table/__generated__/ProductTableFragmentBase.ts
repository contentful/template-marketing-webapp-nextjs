/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductTableFragmentBase
// ====================================================

export interface ProductTableFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_featuredImage_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_featuredImage {
  __typename: "Asset";
  sys: ProductTableFragmentBase_productsCollection_items_featuredImage_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragmentBase_productsCollection_items_description {
  __typename: "TopicProductDescription";
  json: any;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets {
  __typename: "TopicProductFeatureLongDescriptionAssets";
  block: (ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets_block | null)[];
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links {
  __typename: "TopicProductFeatureLongDescriptionLinks";
  assets: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links_assets;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription {
  __typename: "TopicProductFeatureLongDescription";
  json: any;
  links: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription_links;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block {
  __typename: "Asset";
  sys: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets {
  __typename: "TopicProductFeatureShortDescriptionAssets";
  block: (ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets_block | null)[];
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links {
  __typename: "TopicProductFeatureShortDescriptionLinks";
  assets: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links_assets;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription {
  __typename: "TopicProductFeatureShortDescription";
  json: any;
  links: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription_links;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection_items {
  __typename: "TopicProductFeature";
  sys: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_sys;
  name: string | null;
  longDescription: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_longDescription | null;
  shortDescription: ProductTableFragmentBase_productsCollection_items_featuresCollection_items_shortDescription | null;
}

export interface ProductTableFragmentBase_productsCollection_items_featuresCollection {
  __typename: "TopicProductFeaturesCollection";
  items: (ProductTableFragmentBase_productsCollection_items_featuresCollection_items | null)[];
}

export interface ProductTableFragmentBase_productsCollection_items {
  __typename: "TopicProduct";
  sys: ProductTableFragmentBase_productsCollection_items_sys;
  name: string | null;
  featuredImage: ProductTableFragmentBase_productsCollection_items_featuredImage | null;
  description: ProductTableFragmentBase_productsCollection_items_description | null;
  price: number | null;
  featuresCollection: ProductTableFragmentBase_productsCollection_items_featuresCollection | null;
}

export interface ProductTableFragmentBase_productsCollection {
  __typename: "ComponentProductTableProductsCollection";
  items: (ProductTableFragmentBase_productsCollection_items | null)[];
}

export interface ProductTableFragmentBase {
  __typename: "ComponentProductTable";
  sys: ProductTableFragmentBase_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  productsCollection: ProductTableFragmentBase_productsCollection | null;
}
