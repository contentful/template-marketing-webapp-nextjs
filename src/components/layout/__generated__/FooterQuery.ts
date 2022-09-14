/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FooterQuery
// ====================================================

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_sys {
  __typename: 'Sys';
  id: string;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_sys {
  __typename: 'Sys';
  id: string;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_pageContent_sys {
  __typename: 'Sys';
  id: string;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_pageContent {
  __typename:
    | 'TopicPost'
    | 'TopicPostList'
    | 'TopicBrand'
    | 'TopicBusinessInfo'
    | 'TopicCampaign'
    | 'TopicCategory'
    | 'TopicProduct'
    | 'WrapperExternalDam';
  sys: FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_pageContent_sys;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items {
  __typename: 'Page';
  slug: string | null;
  sys: FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_sys;
  pageContent: FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items_pageContent | null;
  pageName: string | null;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection {
  __typename: 'MenuGroupFeaturedPagesCollection';
  items: (FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection_items | null)[];
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection_items {
  __typename: 'MenuGroup';
  sys: FooterQuery_footerMenuCollection_items_menuItemsCollection_items_sys;
  groupName: string | null;
  featuredPagesCollection: FooterQuery_footerMenuCollection_items_menuItemsCollection_items_featuredPagesCollection | null;
}

export interface FooterQuery_footerMenuCollection_items_menuItemsCollection {
  __typename: 'FooterMenuMenuItemsCollection';
  items: (FooterQuery_footerMenuCollection_items_menuItemsCollection_items | null)[];
}

export interface FooterQuery_footerMenuCollection_items_logo {
  __typename: 'Asset';
  url: string | null;
}

export interface FooterQuery_footerMenuCollection_items {
  __typename: 'FooterMenu';
  menuItemsCollection: FooterQuery_footerMenuCollection_items_menuItemsCollection | null;
  facebookLink: string | null;
  twitterLink: string | null;
  instagramLink: string | null;
  description: string | null;
  logo: FooterQuery_footerMenuCollection_items_logo | null;
}

export interface FooterQuery_footerMenuCollection {
  __typename: 'FooterMenuCollection';
  items: (FooterQuery_footerMenuCollection_items | null)[];
}

export interface FooterQuery_globalMicrocopyCollection_items {
  __typename: 'GlobalMicrocopy';
  findusOnSocialMedia: string | null;
  copyright: string | null;
  signupNewsletter: string | null;
}

export interface FooterQuery_globalMicrocopyCollection {
  __typename: 'GlobalMicrocopyCollection';
  items: (FooterQuery_globalMicrocopyCollection_items | null)[];
}

export interface FooterQuery {
  footerMenuCollection: FooterQuery_footerMenuCollection | null;
  globalMicrocopyCollection: FooterQuery_globalMicrocopyCollection | null;
}

export interface FooterQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
