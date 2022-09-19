import gql from 'graphql-tag';

import { assetFragment } from '../ctf-asset/ctf-asset-query';

export const productFeatureFragment = gql`
  fragment ProductFeatureFragment on TopicProductFeature {
    sys {
      id
    }
    name
    longDescription {
      json
      links {
        assets {
          block {
            ...AssetFragment
          }
        }
      }
    }
    shortDescription {
      json
      links {
        assets {
          block {
            ...AssetFragment
          }
        }
      }
    }
  }
  ${assetFragment}
`;

export const query = gql`
  query CtfProductFeatureQuery(
    $id: String!
    $locale: String
    $preview: Boolean
  ) {
    topicProductFeature(id: $id, preview: $preview, locale: $locale) {
      ...ProductFeatureFragment
    }
  }
  ${productFeatureFragment}
`;
