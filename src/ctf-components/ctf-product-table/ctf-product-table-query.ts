import gql from 'graphql-tag';

import { productFragment } from '../ctf-product/ctf-product-query';

import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';

export const productTableFragment = gql`
  fragment ProductTableFragmentBase on ComponentProductTable {
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

  fragment ProductTableFragment on ComponentProductTable {
    ...ProductTableFragmentBase
    ntVariantsCollection(limit: 3) {
      items {
        ...ProductTableFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
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
