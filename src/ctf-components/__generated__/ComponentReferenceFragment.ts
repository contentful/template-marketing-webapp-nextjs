/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ComponentReferenceFragment
// ====================================================

export interface ComponentReferenceFragment_Seo_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_Seo {
  __typename: "Seo" | "Page" | "Post" | "PersonalizationContainer" | "NtAudience" | "TopicProductFeature" | "Category" | "Audience" | "NtMergetag" | "ContentFeed" | "ContentMapping";
  sys: ComponentReferenceFragment_Seo_sys;
}

export interface ComponentReferenceFragment_ComponentCta_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentCta {
  __typename: "ComponentCta";
  sys: ComponentReferenceFragment_ComponentCta_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentDuplex_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentDuplex {
  __typename: "ComponentDuplex";
  sys: ComponentReferenceFragment_ComponentDuplex_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentFeaturedCards_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentFeaturedCards {
  __typename: "ComponentFeaturedCards";
  sys: ComponentReferenceFragment_ComponentFeaturedCards_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentHeroBanner_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentHeroBanner {
  __typename: "ComponentHeroBanner";
  sys: ComponentReferenceFragment_ComponentHeroBanner_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentInfoBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentInfoBlock {
  __typename: "ComponentInfoBlock";
  sys: ComponentReferenceFragment_ComponentInfoBlock_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentProductTable_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentProductTable {
  __typename: "ComponentProductTable";
  sys: ComponentReferenceFragment_ComponentProductTable_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentQuote_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentQuote {
  __typename: "ComponentQuote";
  sys: ComponentReferenceFragment_ComponentQuote_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_ComponentTextBlock_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_ComponentTextBlock {
  __typename: "ComponentTextBlock";
  sys: ComponentReferenceFragment_ComponentTextBlock_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_TopicBusinessInfo_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_TopicBusinessInfo {
  __typename: "TopicBusinessInfo";
  sys: ComponentReferenceFragment_TopicBusinessInfo_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_TopicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_TopicPerson {
  __typename: "TopicPerson";
  sys: ComponentReferenceFragment_TopicPerson_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_TopicProduct_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_TopicProduct {
  __typename: "TopicProduct";
  sys: ComponentReferenceFragment_TopicProduct_sys;
  internalName: string | null;
}

export interface ComponentReferenceFragment_WrapperExternalAsset_sys {
  __typename: "Sys";
  id: string;
}

export interface ComponentReferenceFragment_WrapperExternalAsset {
  __typename: "WrapperExternalAsset";
  sys: ComponentReferenceFragment_WrapperExternalAsset_sys;
  internalName: string | null;
}

export type ComponentReferenceFragment = ComponentReferenceFragment_Seo | ComponentReferenceFragment_ComponentCta | ComponentReferenceFragment_ComponentDuplex | ComponentReferenceFragment_ComponentFeaturedCards | ComponentReferenceFragment_ComponentHeroBanner | ComponentReferenceFragment_ComponentInfoBlock | ComponentReferenceFragment_ComponentProductTable | ComponentReferenceFragment_ComponentQuote | ComponentReferenceFragment_ComponentTextBlock | ComponentReferenceFragment_TopicBusinessInfo | ComponentReferenceFragment_TopicPerson | ComponentReferenceFragment_TopicProduct | ComponentReferenceFragment_WrapperExternalAsset;
