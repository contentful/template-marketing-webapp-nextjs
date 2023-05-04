import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PersonFieldsFragment = { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfPersonQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPersonQuery = { __typename?: 'Query', topicPerson?: (
    { __typename?: 'TopicPerson' }
    & PersonFieldsFragment
  ) | null };

export const PersonFieldsFragmentDoc = `
    fragment PersonFields on TopicPerson {
  __typename
  sys {
    id
  }
  name
  bio {
    json
  }
  avatar {
    ...AssetFields
  }
  website
  location
  cardStyle
}
    `;
export const CtfPersonDocument = `
    query CtfPerson($id: String!, $locale: String, $preview: Boolean) {
  topicPerson(id: $id, preview: $preview, locale: $locale) {
    ...PersonFields
  }
}
    ${PersonFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfPersonQuery = <
      TData = CtfPersonQuery,
      TError = unknown
    >(
      variables: CtfPersonQueryVariables,
      options?: UseQueryOptions<CtfPersonQuery, TError, TData>
    ) =>
    useQuery<CtfPersonQuery, TError, TData>(
      ['CtfPerson', variables],
      customFetcher<CtfPersonQuery, CtfPersonQueryVariables>(CtfPersonDocument, variables),
      options
    );

useCtfPersonQuery.getKey = (variables: CtfPersonQueryVariables) => ['CtfPerson', variables];
;

useCtfPersonQuery.fetcher = (variables: CtfPersonQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPersonQuery, CtfPersonQueryVariables>(CtfPersonDocument, variables, options);