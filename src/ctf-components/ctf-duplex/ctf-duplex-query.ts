import gql from 'graphql-tag';
import { postForPostLinkFragment } from '@src/components/link/post-link-query';
import { pageForPageLinkFragment } from '@src/components/link/page-link-query';
import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';
import { assetFragment } from '../ctf-asset/ctf-asset-query';

export const duplexFragment = gql`
  fragment DuplexFragmentBase on ComponentDuplex {
    sys {
      id
    }
    __typename
    internalName
    containerLayout
    headline
    bodyText {
      json
    }
    ctaText
    targetPage {
      ...PageForPageLinkFragment
      ...PostForPostLinkFragment
    }
    image {
      ...AssetFragment
    }
    imageStyle
    imageAlignment
    colorPalette
  }

  fragment DuplexFragment on ComponentDuplex {
    ...DuplexFragmentBase
    ntVariantsCollection(limit: 3) {
      items {
        ...DuplexFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
  ${pageForPageLinkFragment}
  ${assetFragment}
  ${postForPostLinkFragment}
`;

export const query = gql`
  query CtfDuplexQuery($id: String!, $locale: String, $preview: Boolean) {
    componentDuplex(id: $id, locale: $locale, preview: $preview) {
      ...DuplexFragment
    }
  }
  ${duplexFragment}
`;
