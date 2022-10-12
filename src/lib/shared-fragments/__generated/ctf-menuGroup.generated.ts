import * as Types from '../../__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/link/__generated/page-link.generated';
import { CategoryLinkFieldsFragment } from '../../../components/link/__generated/category-link.generated';
import { PostLinkFieldsFragment } from '../../../components/link/__generated/post-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/link/__generated/page-link.generated';
import { CategoryLinkFieldsFragmentDoc } from '../../../components/link/__generated/category-link.generated';
import { PostLinkFieldsFragmentDoc } from '../../../components/link/__generated/post-link.generated';
export type MenuGroupFieldsFragment = { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<(
    { __typename?: 'Category' }
    & CategoryLinkFieldsFragment
  ) | (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | (
    { __typename?: 'Post' }
    & PostLinkFieldsFragment
  ) | null> };

export const MenuGroupFieldsFragmentDoc = `
    fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {
  items {
    ...PageLinkFields
    ...CategoryLinkFields
    ...PostLinkFields
  }
}
    `;