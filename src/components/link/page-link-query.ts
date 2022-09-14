import { gql } from 'apollo-boost';

export const pageForPageLinkFragment = gql`
  fragment PageForPageLinkFragment on Page {
    __typename
    slug
    sys {
      id
    }
    pageContent(locale: $locale, preview: $preview) {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
`;
