import * as Types from '../../../../lib/__generated/graphql.types';

export type CategoryLinkFieldsFragment = { __typename: 'Category', slug?: string | null, categoryName?: string | null, sys: { __typename?: 'Sys', id: string } };

export const CategoryLinkFieldsFragmentDoc = `
    fragment CategoryLinkFields on Category {
  __typename
  slug
  categoryName
  sys {
    id
  }
  categoryName
}
    `;
