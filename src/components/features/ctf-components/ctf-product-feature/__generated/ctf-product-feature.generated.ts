import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
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
export type ProductFeatureFieldsFragment = { __typename?: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null };

export type CtfProductFeatureQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfProductFeatureQuery = { __typename?: 'Query', topicProductFeature?: (
    { __typename?: 'TopicProductFeature' }
    & ProductFeatureFieldsFragment
  ) | null };

export const ProductFeatureFieldsFragmentDoc = `
    fragment ProductFeatureFields on TopicProductFeature {
  sys {
    id
  }
  name
  longDescription {
    json
    links {
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  shortDescription {
    json
    links {
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
}
    `;
export const CtfProductFeatureDocument = `
    query CtfProductFeature($id: String!, $locale: String, $preview: Boolean) {
  topicProductFeature(id: $id, preview: $preview, locale: $locale) {
    ...ProductFeatureFields
  }
}
    ${ProductFeatureFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfProductFeatureQuery = <
      TData = CtfProductFeatureQuery,
      TError = unknown
    >(
      variables: CtfProductFeatureQueryVariables,
      options?: UseQueryOptions<CtfProductFeatureQuery, TError, TData>
    ) =>
    useQuery<CtfProductFeatureQuery, TError, TData>(
      ['CtfProductFeature', variables],
      fetcher<CtfProductFeatureQuery, CtfProductFeatureQueryVariables>(CtfProductFeatureDocument, variables),
      options
    );

useCtfProductFeatureQuery.getKey = (variables: CtfProductFeatureQueryVariables) => ['CtfProductFeature', variables];
;

useCtfProductFeatureQuery.fetcher = (variables: CtfProductFeatureQueryVariables) => fetcher<CtfProductFeatureQuery, CtfProductFeatureQueryVariables>(CtfProductFeatureDocument, variables);