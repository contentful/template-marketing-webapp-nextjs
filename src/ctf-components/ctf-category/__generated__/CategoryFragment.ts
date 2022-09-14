/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryFragment
// ====================================================

export interface CategoryFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface CategoryFragment_seo_image_sys {
  __typename: "Sys";
  id: string;
}

export interface CategoryFragment_seo_image {
  __typename: "Asset";
  sys: CategoryFragment_seo_image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CategoryFragment_seo {
  __typename: "Seo";
  title: string | null;
  description: string | null;
  image: CategoryFragment_seo_image | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface CategoryFragment {
  __typename: "Category";
  sys: CategoryFragment_sys;
  internalName: string | null;
  slug: string | null;
  seo: CategoryFragment_seo | null;
  categoryName: string | null;
}
