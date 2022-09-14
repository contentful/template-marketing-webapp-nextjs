/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostCategoryFragment
// ====================================================

export interface PostCategoryFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface PostCategoryFragment {
  __typename: "Category";
  sys: PostCategoryFragment_sys;
  categoryName: string | null;
  slug: string | null;
}
