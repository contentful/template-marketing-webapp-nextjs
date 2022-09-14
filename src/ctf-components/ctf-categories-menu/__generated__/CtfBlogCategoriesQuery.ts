/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfBlogCategoriesQuery
// ====================================================

export interface CtfBlogCategoriesQuery_categoryCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfBlogCategoriesQuery_categoryCollection_items {
  __typename: "Category";
  sys: CtfBlogCategoriesQuery_categoryCollection_items_sys;
  slug: string | null;
  categoryName: string | null;
}

export interface CtfBlogCategoriesQuery_categoryCollection {
  __typename: "CategoryCollection";
  items: (CtfBlogCategoriesQuery_categoryCollection_items | null)[];
}

export interface CtfBlogCategoriesQuery {
  categoryCollection: CtfBlogCategoriesQuery_categoryCollection | null;
}

export interface CtfBlogCategoriesQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
