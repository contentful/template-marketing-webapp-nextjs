import gql from 'graphql-tag';

import { ninetailedAudienceFragment } from '@ctf-components/ctf-ninetailed-audience/ctf-ninetailed-audience-query';
import { pageForPageLinkFragment } from '@src/components/link/page-link-query';
import { postForPostLinkFragment } from '@src/components/link/post-link-query';

export const ctaFragment = gql`
  fragment CtaFragmentBase on ComponentCta {
    sys {
      id
    }
    __typename
    internalName
    headline
    subline {
      json
    }
    ctaText
    targetPage {
      ...PageForPageLinkFragment
      ...PostForPostLinkFragment
    }
    urlParameters
    colorPalette
  }

  fragment CtaFragment on ComponentCta {
    ...CtaFragmentBase
    ntVariantsCollection(limit: 8) {
      items {
        ...CtaFragmentBase
        ntAudience {
          ...NinetailedAudienceFragment
        }
      }
    }
  }

  ${ninetailedAudienceFragment}
  ${pageForPageLinkFragment}
  ${postForPostLinkFragment}
`;

export const query = gql`
  query CtfCtaQuery($id: String!, $locale: String, $preview: Boolean) {
    componentCta(id: $id, locale: $locale, preview: $preview) {
      ...CtaFragment
    }
  }
  ${ctaFragment}
`;
