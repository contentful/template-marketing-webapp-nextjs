import gql from 'graphql-tag';

import { productFragment } from '../ctf-product/ctf-product-query';

export const productTableFragment = gql`
  fragment ProductTableFragment on ComponentProductTable {
    sys {
      id
    }
    internalName
    headline
    subline
    productsCollection(limit: 3) {
      items {
        ...ProductFragment
      }
    }
  }

  ${productFragment}
`;

export const query = gql`
  query CtfProductTableQuery($id: String!, $locale: String, $preview: Boolean) {
    componentProductTable(id: $id, preview: $preview, locale: $locale) {
      ...ProductTableFragment
    }
  }
  ${productTableFragment}
`;
