import gql from 'graphql-tag';

import { postFragmentBase } from '../ctf-post/ctf-post-query';

export const query = gql`
  query CtfTagQuery($id: String!, $locale: String, $preview: Boolean) {
    postCollection(
      where: {
        contentfulMetadata: {
          tags_exists: true
          tags: { id_contains_some: [$id] }
        }
      }
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...PostFragmentBase
      }
    }
  }
  ${postFragmentBase}
`;
