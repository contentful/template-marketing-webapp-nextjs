import gql from 'graphql-tag';
import { postFragmentBase } from '@ctf-components/ctf-post/ctf-post-query';
import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';

export const featuredCardsFragment = gql`
  fragment FeaturedCardsFragmentBase on ComponentFeaturedCards {
    internalName
    headline
    subline
    featuredPostsCollection(limit: 3) {
      items {
        ...PostFragmentBase
      }
    }
  }

  fragment FeaturedCardsFragment on ComponentFeaturedCards {
    ...FeaturedCardsFragmentBase
    ntVariantsCollection(limit: 0) {
      items {
        ...FeaturedCardsFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
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
