/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCategoriesQuery
// ====================================================

export interface AllCategoriesQuery_categoryCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCategoriesQuery_categoryCollection_items_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface AllCategoriesQuery_categoryCollection_items_seo_image {
  __typename: "Asset";
  sys: AllCategoriesQuery_categoryCollection_items_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllCategoriesQuery_categoryCollection_items_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: AllCategoriesQuery_categoryCollection_items_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface AllCategoriesQuery_categoryCollection_items {
  __typename: "Category";
  sys: AllCategoriesQuery_categoryCollection_items_sys;
  internalName: string | null;
  slug: string | null;
  seo: AllCategoriesQuery_categoryCollection_items_seo | null;
  categoryName: string | null;
}

export interface AllCategoriesQuery_categoryCollection {
  __typename: "CategoryCollection";
  items: (AllCategoriesQuery_categoryCollection_items | null)[];
}

export interface AllCategoriesQuery {
  categoryCollection: AllCategoriesQuery_categoryCollection | null;
}

export interface AllCategoriesQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
