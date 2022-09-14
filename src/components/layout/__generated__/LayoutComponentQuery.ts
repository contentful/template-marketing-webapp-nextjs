/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LayoutComponentQuery
// ====================================================

export interface LayoutComponentQuery_headerMenuCollection_items_logo {
  __typename: 'Asset';
  url: string | null;
}

export interface LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_sys {
  __typename: 'Sys';
  id: string;
}

export interface LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_pageContent_sys {
  __typename: 'Sys';
  id: string;
}

export interface LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_pageContent {
  __typename:
    | 'TopicPost'
    | 'TopicPostList'
    | 'TopicBrand'
    | 'TopicBusinessInfo'
    | 'TopicCampaign'
    | 'TopicCategory'
    | 'TopicProduct'
    | 'WrapperExternalDam';
  sys: LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_pageContent_sys;
}

export interface LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items {
  __typename: 'Page';
  slug: string | null;
  sys: LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_sys;
  pageContent: LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items_pageContent | null;
  pageName: string | null;
}

export interface LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection {
  __typename: 'HeaderMenuFeaturedPagesCollection';
  items: (LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection_items | null)[];
}

export interface LayoutComponentQuery_headerMenuCollection_items {
  __typename: 'HeaderMenu';
  logo: LayoutComponentQuery_headerMenuCollection_items_logo | null;
  featuredPagesCollection: LayoutComponentQuery_headerMenuCollection_items_featuredPagesCollection | null;
}

export interface LayoutComponentQuery_headerMenuCollection {
  __typename: 'HeaderMenuCollection';
  items: (LayoutComponentQuery_headerMenuCollection_items | null)[];
}

export interface LayoutComponentQuery {
  headerMenuCollection: LayoutComponentQuery_headerMenuCollection | null;
}

export interface LayoutComponentQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
