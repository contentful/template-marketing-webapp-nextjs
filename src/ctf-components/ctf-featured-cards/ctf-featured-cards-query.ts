import gql from 'graphql-tag';

import { postFragmentBase } from '@ctf-components/ctf-post/ctf-post-query';

export const featuredCardsFragment = gql`
  fragment FeaturedCardsFragment on ComponentFeaturedCards {
    internalName
    headline
    subline
    featuredPostsCollection(limit: 3) {
      items {
        ...PostFragmentBase
      }
    }
  }

  ${postFragmentBase}
`;

export const query = gql`
  query CtfFeaturedCardsQuery(
    $id: String!
    $locale: String
    $preview: Boolean
  ) {
    componentFeaturedCards(id: $id, preview: $preview, locale: $locale) {
      ...FeaturedCardsFragment
    }
  }
  ${featuredCardsFragment}
`;
