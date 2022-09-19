import gql from 'graphql-tag';

import { componentReferenceFragment } from '../fragments';

import { assetFragment } from '@ctf-components/ctf-asset/ctf-asset-query';

export const pageFragment = gql`
  fragment PageFragmentBase on Page {
    pageName
    internalName: pageName
    slug
    seo {
      title
      description
      image {
        ...AssetFragment
      }
      noIndex
      noFollow
    }
    topSectionCollection(limit: 20) {
      items {
        ...ComponentReferenceFragment
      }
    }
    pageContent {
      ...ComponentReferenceFragment
    }
    extraSectionCollection(limit: 20) {
      items {
        ...ComponentReferenceFragment
      }
    }
  }

  fragment PageFragment on Page {
    ...PageFragmentBase
  }

  ${assetFragment}
  ${componentReferenceFragment}
`;
