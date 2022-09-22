/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllHeroBannersQuery
// ====================================================

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_sys;
  pageContent: AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page_pageContent | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Post_sys;
}

export type AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage = AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Page | AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage_Post;

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_image {
  __typename: "Asset";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_bodyText {
  __typename: "ComponentHeroBannerBodyText";
  json: any;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent_sys;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page {
  __typename: "Page";
  slug: string | null;
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_sys;
  pageContent: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page_pageContent | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Post_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Post {
  __typename: "Post";
  slug: string | null;
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Post_sys;
}

export type AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage = AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Page | AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage_Post;

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_image {
  __typename: "Asset";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items {
  __typename: "ComponentHeroBanner";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_targetPage | null;
  image: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntAudience: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items_ntAudience | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection {
  __typename: "ComponentHeroBannerNt_variantsCollection";
  items: (AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection_items | null)[];
}

export interface AllHeroBannersQuery_componentHeroBannerCollection_items {
  __typename: "ComponentHeroBanner";
  sys: AllHeroBannersQuery_componentHeroBannerCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  bodyText: AllHeroBannersQuery_componentHeroBannerCollection_items_bodyText | null;
  ctaText: string | null;
  targetPage: AllHeroBannersQuery_componentHeroBannerCollection_items_targetPage | null;
  image: AllHeroBannersQuery_componentHeroBannerCollection_items_image | null;
  imageStyle: boolean | null;
  heroSize: boolean | null;
  colorPalette: string | null;
  ntVariantsCollection: AllHeroBannersQuery_componentHeroBannerCollection_items_ntVariantsCollection | null;
}

export interface AllHeroBannersQuery_componentHeroBannerCollection {
  __typename: "ComponentHeroBannerCollection";
  items: (AllHeroBannersQuery_componentHeroBannerCollection_items | null)[];
}

export interface AllHeroBannersQuery {
  componentHeroBannerCollection: AllHeroBannersQuery_componentHeroBannerCollection | null;
}

export interface AllHeroBannersQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
