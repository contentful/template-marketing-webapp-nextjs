import gql from 'graphql-tag';

import { assetFragment } from '@ctf-components/ctf-asset/ctf-asset-query';
import { componentReferenceFragment } from '@ctf-components/fragments';

export const textBlockFragment = gql`
  fragment TextBlockFragment on ComponentTextBlock {
    __typename
    sys {
      id
    }
    headline
    subline
    body {
      json
      links {
        entries {
          block {
            ...ComponentReferenceFragment
          }
        }
        assets {
          block {
            ...AssetFragment
          }
        }
      }
    }
    colorPalette
  }
  ${componentReferenceFragment}
  ${assetFragment}
`;

export const query = gql`
  query CtfTextBlockQuery($id: String!, $locale: String, $preview: Boolean) {
    componentTextBlock(id: $id, locale: $locale, preview: $preview) {
      ...TextBlockFragment
    }
  }
  ${textBlockFragment}
`;
