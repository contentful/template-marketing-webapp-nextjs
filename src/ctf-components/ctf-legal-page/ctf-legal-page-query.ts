import gql from 'graphql-tag';

const assetFragment = gql`
  fragment AssetFragment on Asset {
    __typename
    sys {
      id
    }
    contentType
    title
    description
    width
    height
    url
  }
`;

export const legalPageFragment = gql`
  fragment LegalPageFragment on Page {
    pageName
    pageContent {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ... on TopicBusinessInfo {
        title
        featuredImage {
          ...AssetFragment
        }
        body {
          links {
            assets {
              block {
                ...AssetFragment
              }
            }
          }
          json
        }
      }
    }
  }
  ${assetFragment}
`;
