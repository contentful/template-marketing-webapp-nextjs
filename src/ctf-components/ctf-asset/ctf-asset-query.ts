import gql from 'graphql-tag';

export const assetFragment = gql`
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
