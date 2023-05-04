import * as Types from '../../../../../lib/__generated/graphql.types';

import { ProductFieldsFragment } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragment } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { ProductFieldsFragmentDoc } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragmentDoc } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ProductTableFieldsFragment = { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<(
      { __typename?: 'TopicProduct' }
      & ProductFieldsFragment
    ) | null> } | null };

export type CtfProductTableQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfProductTableQuery = { __typename?: 'Query', componentProductTable?: (
    { __typename?: 'ComponentProductTable' }
    & ProductTableFieldsFragment
  ) | null };

export const ProductTableFieldsFragmentDoc = `
    fragment ProductTableFields on ComponentProductTable {
  __typename
  sys {
    id
  }
  headline
  subline
  productsCollection(limit: 3) {
    items {
      ...ProductFields
    }
  }
}
    `;
export const CtfProductTableDocument = `
    query CtfProductTable($id: String!, $locale: String, $preview: Boolean) {
  componentProductTable(id: $id, preview: $preview, locale: $locale) {
    ...ProductTableFields
  }
}
    ${ProductTableFieldsFragmentDoc}
${ProductFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ProductFeatureFieldsFragmentDoc}`;
export const useCtfProductTableQuery = <
      TData = CtfProductTableQuery,
      TError = unknown
    >(
      variables: CtfProductTableQueryVariables,
      options?: UseQueryOptions<CtfProductTableQuery, TError, TData>
    ) =>
    useQuery<CtfProductTableQuery, TError, TData>(
      ['CtfProductTable', variables],
      customFetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables),
      options
    );

useCtfProductTableQuery.getKey = (variables: CtfProductTableQueryVariables) => ['CtfProductTable', variables];
;

useCtfProductTableQuery.fetcher = (variables: CtfProductTableQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables, options);