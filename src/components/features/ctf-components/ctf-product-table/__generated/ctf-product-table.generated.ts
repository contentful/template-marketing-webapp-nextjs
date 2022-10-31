import * as Types from '../../../../../lib/__generated/graphql.types';

import { ProductFieldsFragment } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragment } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { ProductFieldsFragmentDoc } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragmentDoc } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint as string, {
    method: "POST",
    ...(fetchConfig.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type ProductTableFieldsFragment = { __typename?: 'ComponentProductTable', internalName?: string | null, headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<(
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
  sys {
    id
  }
  internalName
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
      fetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables),
      options
    );

useCtfProductTableQuery.getKey = (variables: CtfProductTableQueryVariables) => ['CtfProductTable', variables];
;

useCtfProductTableQuery.fetcher = (variables: CtfProductTableQueryVariables) => fetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables);