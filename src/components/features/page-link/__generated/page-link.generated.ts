import * as Types from '../../../../lib/__generated/graphql.types';

import { fetchConfig } from '@src/lib/fetchConfig';
export type PageLinkFieldsFragment = { __typename: 'Page', pageName?: string | null, sys: { __typename?: 'Sys', id: string } };

export const PageLinkFieldsFragmentDoc = `
    fragment PageLinkFields on Page {
  __typename
  sys {
    id
  }
  pageName
}
    `;