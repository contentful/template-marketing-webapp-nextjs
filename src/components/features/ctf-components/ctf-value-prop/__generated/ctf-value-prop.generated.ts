import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmValuePropFieldsFragment = { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } };

export type CtfValuePropQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfValuePropQuery = { __typename?: 'Query', amValueProp?: (
    { __typename?: 'AmValueProp' }
    & AmValuePropFieldsFragment
  ) | null };

export const AmValuePropFieldsFragmentDoc = `
    fragment AmValuePropFields on AmValueProp {
  __typename
  sys {
    id
  }
}
    `;
export const CtfValuePropDocument = `
    query CtfValueProp($id: String!, $locale: String, $preview: Boolean) {
  amValueProp(id: $id, locale: $locale, preview: $preview) {
    ...AmValuePropFields
  }
}
    ${AmValuePropFieldsFragmentDoc}`;
export const useCtfValuePropQuery = <
      TData = CtfValuePropQuery,
      TError = unknown
    >(
      variables: CtfValuePropQueryVariables,
      options?: UseQueryOptions<CtfValuePropQuery, TError, TData>
    ) =>
    useQuery<CtfValuePropQuery, TError, TData>(
      ['CtfValueProp', variables],
      customFetcher<CtfValuePropQuery, CtfValuePropQueryVariables>(CtfValuePropDocument, variables),
      options
    );

useCtfValuePropQuery.getKey = (variables: CtfValuePropQueryVariables) => ['CtfValueProp', variables];
;

useCtfValuePropQuery.fetcher = (variables: CtfValuePropQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfValuePropQuery, CtfValuePropQueryVariables>(CtfValuePropDocument, variables, options);