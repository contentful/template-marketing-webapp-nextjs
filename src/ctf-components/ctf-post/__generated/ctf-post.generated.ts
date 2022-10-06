import * as Types from '../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PersonFieldsFragment } from '../../ctf-person/__generated/ctf-person.generated';
import { AssetFieldsFragmentDoc } from '../../../lib/shared-fragments/__generated/ctf-asset.generated';
import { PersonFieldsFragmentDoc } from '../../ctf-person/__generated/ctf-person.generated';
export type PostCategoryFieldsFragment = { __typename?: 'Category', categoryName?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PostFieldsBaseFragment = { __typename: 'Post', internalName?: string | null, postName?: string | null, publishedDate?: any | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, category?: (
    { __typename?: 'Category' }
    & PostCategoryFieldsFragment
  ) | null, author?: (
    { __typename?: 'TopicPerson' }
    & PersonFieldsFragment
  ) | null, introText?: { __typename?: 'PostIntroText', json: any } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export const PostCategoryFieldsFragmentDoc = `
    fragment PostCategoryFields on Category {
  sys {
    id
  }
  categoryName
  slug
}
    `;
export const PostFieldsBaseFragmentDoc = `
    fragment PostFieldsBase on Post {
  __typename
  sys {
    id
  }
  internalName
  postName
  publishedDate
  featuredImage {
    ...AssetFields
  }
  slug
  category {
    ...PostCategoryFields
  }
  author {
    ...PersonFields
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
    `;