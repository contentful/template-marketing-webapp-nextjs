import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';
import gql from 'graphql-tag';

export const externalAssetFragment = gql`
  fragment ExternalAssetFragment on WrapperExternalAsset {
    sys {
      id
    }
    __typename
    internalName
    title
    externalAsset
    externalApp
    externalUrl
  }
`;

export const query = gql`
  query CtfExternalAssetQuery(
    $id: String!
    $locale: String
    $preview: Boolean
  ) {
    wrapperExternalAsset(id: $id, preview: $preview, locale: $locale) {
      ...ExternalAssetFragment
      ntVariantsCollection(limit: 3) {
        items {
          ...ExternalAssetFragment
          ntAudience {
            ...NinetailedAudienceFragment
          }
        }
      }
    }
  }
  ${externalAssetFragment}
  ${ninetailedAudienceFragment}
`;
