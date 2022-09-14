import gql from 'graphql-tag';
import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';
import { assetFragment } from '../ctf-asset/ctf-asset-query';

export const infoBlockFragment = gql`
  fragment InfoBlockFragmentBase on ComponentInfoBlock {
    sys {
      id
    }
    __typename
    internalName
    headline
    subline
    block1Image {
      ...AssetFragment
    }
    block1Body {
      json
    }
    block2Image {
      ...AssetFragment
    }
    block2Body {
      json
    }
    block3Image {
      ...AssetFragment
    }
    block3Body {
      json
    }
    colorPalette
  }

  fragment InfoBlockFragment on ComponentInfoBlock {
    ...InfoBlockFragmentBase
    ntVariantsCollection(limit: 3) {
      items {
        ...InfoBlockFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
  ${assetFragment}
`;

export const query = gql`
  query CtfInfoBlockQuery($id: String!, $locale: String, $preview: Boolean) {
    componentInfoBlock(id: $id, locale: $locale, preview: $preview) {
      ...InfoBlockFragment
    }
  }
  ${infoBlockFragment}
`;
