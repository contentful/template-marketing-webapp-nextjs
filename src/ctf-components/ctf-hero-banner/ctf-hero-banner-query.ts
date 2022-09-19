import gql from 'graphql-tag';

import { assetFragment } from '../ctf-asset/ctf-asset-query';

import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';
import { pageForPageLinkFragment } from '@src/components/link/page-link-query';
import { postForPostLinkFragment } from '@src/components/link/post-link-query';

export const heroBannerFragment = gql`
  fragment HeroBannerFragmentBase on ComponentHeroBanner {
    sys {
      id
    }
    internalName
    __typename
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
    heroSize
    colorPalette
  }

  fragment HeroBannerFragment on ComponentHeroBanner {
    ...HeroBannerFragmentBase
    ntVariantsCollection(limit: 10) {
      items {
        ...HeroBannerFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
  ${assetFragment}
  ${pageForPageLinkFragment}
  ${postForPostLinkFragment}
`;

export const query = gql`
  query CtfHeroBannerQuery($id: String!, $locale: String, $preview: Boolean) {
    componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
      ...HeroBannerFragment
    }
  }
  ${heroBannerFragment}
`;
