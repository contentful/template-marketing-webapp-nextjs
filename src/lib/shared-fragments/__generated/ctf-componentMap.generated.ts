import * as Types from '../../__generated/graphql.types';

import { fetchConfig } from '@src/lib/fetchConfig';
export type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_ComponentDuplex_Fragment | ComponentReferenceFields_ComponentHeroBanner_Fragment | ComponentReferenceFields_ComponentQuote_Fragment | ComponentReferenceFields_FooterMenu_Fragment | ComponentReferenceFields_Page_Fragment;

export const ComponentReferenceFieldsFragmentDoc = `
    fragment ComponentReferenceFields on Entry {
  __typename
  sys {
    id
  }
  ... on ComponentDuplex {
    internalName
  }
  ... on ComponentHeroBanner {
    internalName
  }
  ... on ComponentQuote {
    internalName
  }
}
    `;