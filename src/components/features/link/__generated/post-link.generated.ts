import * as Types from '../../../../lib/__generated/graphql.types';

export type PostLinkFieldsFragment = { __typename: 'Post', slug?: string | null, postName?: string | null, sys: { __typename?: 'Sys', id: string } };

export const PostLinkFieldsFragmentDoc = `
    fragment PostLinkFields on Post {
  __typename
  slug
  postName
  sys {
    id
  }
}
    `;
