import * as Types from '../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragment } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragmentDoc } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://graphql.contentful.com/content/v1/spaces/vw5be3ki3sdd", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json","Authorization":"Bearer GM7NHP-8LZDbI758jw1ze9OYJV9rVpKcJfyjRP30ang"}}),
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
export type ProductFieldsFragment = { __typename?: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<(
      { __typename?: 'TopicProductFeature' }
      & ProductFeatureFieldsFragment
    ) | null> } | null };

export type CtfProductQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfProductQuery = { __typename?: 'Query', topicProduct?: (
    { __typename?: 'TopicProduct' }
    & ProductFieldsFragment
  ) | null };

export const ProductFieldsFragmentDoc = `
    fragment ProductFields on TopicProduct {
  sys {
    id
  }
  name
  featuredImage {
    ...AssetFields
  }
  description {
    json
  }
  price
  featuresCollection(limit: 30) {
    items {
      ...ProductFeatureFields
    }
  }
}
    `;
export const CtfProductDocument = `
    query CtfProduct($id: String!, $locale: String, $preview: Boolean) {
  topicProduct(id: $id, preview: $preview, locale: $locale) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ProductFeatureFieldsFragmentDoc}`;
export const useCtfProductQuery = <
      TData = CtfProductQuery,
      TError = unknown
    >(
      variables: CtfProductQueryVariables,
      options?: UseQueryOptions<CtfProductQuery, TError, TData>
    ) =>
    useQuery<CtfProductQuery, TError, TData>(
      ['CtfProduct', variables],
      fetcher<CtfProductQuery, CtfProductQueryVariables>(CtfProductDocument, variables),
      options
    );