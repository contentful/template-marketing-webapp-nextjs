import gql from 'graphql-tag';

import { pageForPageLinkFragment } from '@src/components/link/page-link-query';
import { postForPostLinkFragment } from '@src/components/link/post-link-query';

export const ctaFragment = gql`
  fragment CtaFragment on ComponentCta {
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
