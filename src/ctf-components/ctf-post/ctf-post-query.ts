import gql from 'graphql-tag';

import { assetFragment } from '@ctf-components/ctf-asset/ctf-asset-query';
import { personFragment } from '@ctf-components/ctf-person/ctf-person-query';
import { componentReferenceFragment } from '@ctf-components/fragments';

export const categoryFragment = gql`
  fragment PostCategoryFragment on Category {
    sys {
      id
    }
    categoryName
    slug
  }
`;

export const postFragmentBase = gql`
  fragment PostFragmentBase on Post {
    __typename
    sys {
      id
    }
    internalName
    postName
    publishedDate
    featuredImage {
      ...AssetFragment
    }
    slug
    category {
      ...PostCategoryFragment
    }
    author {
      ...PersonFragment
    }
    introText {
      json
    }
    contentfulMetadata {
      tags {
        id
        name
      }
    }
  }
  ${assetFragment}
  ${personFragment}
  ${categoryFragment}
`;

export const postFragment = gql`
  fragment PostFragment on Post {
    ...PostFragmentBase
    seo {
      title
      description
      image {
        ...AssetFragment
      }
      noIndex
      noFollow
    }
    introText {
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
    extraSectionCollection(limit: 20) {
      items {
        ...ComponentReferenceFragment
      }
    }
  }
  ${componentReferenceFragment}
  ${assetFragment}
  ${postFragmentBase}
`;

export const query = gql`
  query CtfPostQuery($slug: String!, $locale: String, $preview: Boolean) {
    postCollection(where: { slug: $slug }, locale: $locale, preview: $preview, limit: 1) {
      items {
        ...PostFragment
      }
    }
  }
  ${postFragment}
`;
