/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HeroBannerFragmentBase
// ====================================================

export interface HeroBannerFragmentBase_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragmentBase_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface HeroBannerFragmentBase_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragmentBase_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragmentBase_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: HeroBannerFragmentBase_targetPage_Page_pageContent_sys;
}

export interface HeroBannerFragmentBase_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: HeroBannerFragmentBase_targetPage_Page_sys;
  pageContent: HeroBannerFragmentBase_targetPage_Page_pageContent | null;
}

export interface HeroBannerFragmentBase_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragmentBase_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: HeroBannerFragmentBase_targetPage_Post_sys;
}

export type HeroBannerFragmentBase_targetPage = HeroBannerFragmentBase_targetPage_Page | HeroBannerFragmentBase_targetPage_Post;

export interface HeroBannerFragmentBase_image_sys {
  __typename: "Sys";
  id: string;
}

export interface HeroBannerFragmentBase_image {
  __typename: "Asset";
  sys: HeroBannerFragmentBase_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface HeroBannerFragmentBase {
  __typename: "ComponentHeroBanner";
  sys: HeroBannerFragmentBase_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: HeroBannerFragmentBase_bodyText | null;
  ctaText: string | null;
  targetPage: HeroBannerFragmentBase_targetPage | null;
  image: HeroBannerFragmentBase_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
}
