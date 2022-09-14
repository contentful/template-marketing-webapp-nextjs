import { gql } from 'apollo-boost';

export const postForPostLinkFragment = gql`
  fragment PostForPostLinkFragment on Post {
    __typename
    slug
    sys {
      id
    }
  }
`;
