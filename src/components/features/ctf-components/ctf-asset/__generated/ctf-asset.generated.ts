import * as Types from '../../../../../lib/__generated/graphql.types';

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export const AssetFieldsFragmentDoc = `
    fragment AssetFields on Asset {
  __typename
  sys {
    id
  }
  contentType
  title
  description
  width
  height
  url
}
    `;