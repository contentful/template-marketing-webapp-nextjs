/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfHeroBannerQuery
// ====================================================

export interface CtfHeroBannerQuery_componentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_pageContent_sys;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_sys;
  pageContent: CtfHeroBannerQuery_componentHeroBanner_targetPage_Page_pageContent | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfHeroBannerQuery_componentHeroBanner_targetPage_Post_sys;
}

export type CtfHeroBannerQuery_componentHeroBanner_targetPage = CtfHeroBannerQuery_componentHeroBanner_targetPage_Page | CtfHeroBannerQuery_componentHeroBanner_targetPage_Post;

export interface CtfHeroBannerQuery_componentHeroBanner_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_image {
  __typename: "Asset";
  sys: CtfHeroBannerQuery_componentHeroBanner_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Post_sys;
}

export type CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage = CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Page | CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage_Post;

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items {
  __typename: "ComponentHeroBanner";
  sys: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_targetPage | null;
  image: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntAudience: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items_ntAudience | null;
}

export interface CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection {
  __typename: "ComponentHeroBannerNt_variantsCollection";
  items: (CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection_items | null)[];
}

export interface CtfHeroBannerQuery_componentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: CtfHeroBannerQuery_componentHeroBanner_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: CtfHeroBannerQuery_componentHeroBanner_bodyText | null;
  ctaText: string | null;
  targetPage: CtfHeroBannerQuery_componentHeroBanner_targetPage | null;
  image: CtfHeroBannerQuery_componentHeroBanner_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntVariantsCollection: CtfHeroBannerQuery_componentHeroBanner_ntVariantsCollection | null;
}

export interface CtfHeroBannerQuery {
  componentHeroBanner: CtfHeroBannerQuery_componentHeroBanner | null;
}

export interface CtfHeroBannerQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
