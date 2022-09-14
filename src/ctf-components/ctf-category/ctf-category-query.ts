import gql from 'graphql-tag';
import { assetFragment } from '@ctf-components/ctf-asset/ctf-asset-query';
import { postFragmentBase } from '../ctf-post/ctf-post-query';

export const categoryFragment = gql`
  fragment CategoryFragment on Category {
    __typename
    sys {
      id
    }
    internalName
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
    categoryName
  }

  ${assetFragment}
`;

export const query = gql`
  query CtfCategoryQuery($slug: String!, $locale: String, $preview: Boolean) {
    categoryCollection(
      where: { slug: $slug }
      locale: $locale
      preview: $preview
      limit: 1
    ) {
      items {
        ...CategoryFragment
      }
    }
    postCollection(
      where: { category: { slug: $slug } }
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...PostFragmentBase
      }
    }
  }
  ${categoryFragment}
  ${postFragmentBase}
`;
