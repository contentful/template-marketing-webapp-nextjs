/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HeroBannerFragment
// ====================================================

export interface HeroBannerFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface HeroBannerFragment_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: HeroBannerFragment_targetPage_Page_pageContent_sys;
}

export interface HeroBannerFragment_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: HeroBannerFragment_targetPage_Page_sys;
  pageContent: HeroBannerFragment_targetPage_Page_pageContent | null;
}

export interface HeroBannerFragment_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: HeroBannerFragment_targetPage_Post_sys;
}

export type HeroBannerFragment_targetPage = HeroBannerFragment_targetPage_Page | HeroBannerFragment_targetPage_Post;

export interface HeroBannerFragment_image_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_image {
  __typename: "Asset";
  sys: HeroBannerFragment_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface HeroBannerFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: HeroBannerFragment_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: HeroBannerFragment_ntVariantsCollection_items_targetPage_Post_sys;
}

export type HeroBannerFragment_ntVariantsCollection_items_targetPage = HeroBannerFragment_ntVariantsCollection_items_targetPage_Page | HeroBannerFragment_ntVariantsCollection_items_targetPage_Post;

export interface HeroBannerFragment_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: HeroBannerFragment_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface HeroBannerFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: HeroBannerFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface HeroBannerFragment_ntVariantsCollection_items {
  __typename: "ComponentHeroBanner";
  sys: HeroBannerFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: HeroBannerFragment_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: HeroBannerFragment_ntVariantsCollection_items_targetPage | null;
  image: HeroBannerFragment_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntAudience: HeroBannerFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface HeroBannerFragment_ntVariantsCollection {
  __typename: "ComponentHeroBannerNt_variantsCollection";
  items: (HeroBannerFragment_ntVariantsCollection_items | null)[];
}

export interface HeroBannerFragment {
  __typename: "ComponentHeroBanner";
  sys: HeroBannerFragment_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: HeroBannerFragment_bodyText | null;
  ctaText: string | null;
  targetPage: HeroBannerFragment_targetPage | null;
  image: HeroBannerFragment_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntVariantsCollection: HeroBannerFragment_ntVariantsCollection | null;
}
