import gql from 'graphql-tag';

import { assetFragment } from '../ctf-asset/ctf-asset-query';
import { productFeatureFragment } from '../ctf-product-feature/ctf-product-feature-query';

export const productFragment = gql`
  fragment ProductFragment on TopicProduct {
    sys {
      id
    }
    name
    featuredImage {
      ...AssetFragment
    }
    description {
      json
    }
    price
    featuresCollection(limit: 30) {
      items {
        ...ProductFeatureFragment
      }
    }
  }

  ${assetFragment}
  ${productFeatureFragment}
`;

export const query = gql`
  query CtfProductQuery($id: String!, $locale: String, $preview: Boolean) {
    topicProduct(id: $id, preview: $preview, locale: $locale) {
      ...ProductFragment
    }
  }
  ${productFragment}
`;
