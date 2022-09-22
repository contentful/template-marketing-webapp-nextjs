/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SitemapQuery
// ====================================================

export interface SitemapQuery_pageCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface SitemapQuery_pageCollection_items_pageContent_sys {
  __typename: "Sys";
  id: string;
}

export interface SitemapQuery_pageCollection_items_pageContent {
  __typename: "TopicBusinessInfo" | "TopicProduct" | "ComponentProductTable";
  sys: SitemapQuery_pageCollection_items_pageContent_sys;
}

export interface SitemapQuery_pageCollection_items {
  __typename: "Page";
  pageName: string | null;
  slug: string | null;
  sys: SitemapQuery_pageCollection_items_sys;
  pageContent: SitemapQuery_pageCollection_items_pageContent | null;
}

export interface SitemapQuery_pageCollection {
  __typename: "PageCollection";
  items: (SitemapQuery_pageCollection_items | null)[];
}

export interface SitemapQuery_postCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface SitemapQuery_postCollection_items {
  __typename: "Post";
  postName: string | null;
  slug: string | null;
  sys: SitemapQuery_postCollection_items_sys;
}

export interface SitemapQuery_postCollection {
  __typename: "PostCollection";
  items: (SitemapQuery_postCollection_items | null)[];
}

export interface SitemapQuery_categoryCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface SitemapQuery_categoryCollection_items {
  __typename: "Category";
  categoryName: string | null;
  slug: string | null;
  sys: SitemapQuery_categoryCollection_items_sys;
}

export interface SitemapQuery_categoryCollection {
  __typename: "CategoryCollection";
  items: (SitemapQuery_categoryCollection_items | null)[];
}

export interface SitemapQuery {
  pageCollection: SitemapQuery_pageCollection | null;
  postCollection: SitemapQuery_postCollection | null;
  categoryCollection: SitemapQuery_categoryCollection | null;
}

export interface SitemapQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
