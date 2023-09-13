import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmHeroFieldsFragment = { __typename: 'AmHero', headerCopy?: string | null, subHeaderCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', fileName?: string | null, url?: string | null } | null };

export type CtfAmHeroQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfAmHeroQuery = {
  __typename?: 'Query', amHero?: (
    { __typename?: 'AmHero' }
    & AmHeroFieldsFragment
  ) | null
};

export const AmHeroFieldsFragmentDoc = `
    fragment AmHeroFields on AmHero {
  __typename
  sys {
    id
  }
  headerCopy
  subHeaderCopy
  ctaCopy
  ctaTargetLink
  backgroundImage {
    fileName
    url
  }
}
    `;
export const CtfAmHeroDocument = `
    query CtfAmHero($id: String!, $locale: String, $preview: Boolean) {
  amHero(id: $id, locale: $locale, preview: $preview) {
    ...AmHeroFields
  }
}
    ${AmHeroFieldsFragmentDoc}`;
export const useCtfAmHeroQuery = <
  TData = CtfAmHeroQuery,
  TError = unknown
>(
  variables: CtfAmHeroQueryVariables,
  options?: UseQueryOptions<CtfAmHeroQuery, TError, TData>
) =>
  useQuery<CtfAmHeroQuery, TError, TData>(
    ['CtfAmHero', variables],
    customFetcher<CtfAmHeroQuery, CtfAmHeroQueryVariables>(CtfAmHeroDocument, variables),
    options
  );

useCtfAmHeroQuery.getKey = (variables: CtfAmHeroQueryVariables) => ['CtfAmHero', variables];
;

useCtfAmHeroQuery.fetcher = (variables: CtfAmHeroQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfAmHeroQuery, CtfAmHeroQueryVariables>(CtfAmHeroDocument, variables, options);