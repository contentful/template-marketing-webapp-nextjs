import gql from 'graphql-tag';

import { assetFragment } from '../ctf-asset/ctf-asset-query';

import { pageForPageLinkFragment } from '@src/components/link/page-link-query';
import { postForPostLinkFragment } from '@src/components/link/post-link-query';

export const duplexFragment = gql`
  fragment DuplexFragment on ComponentDuplex {
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
