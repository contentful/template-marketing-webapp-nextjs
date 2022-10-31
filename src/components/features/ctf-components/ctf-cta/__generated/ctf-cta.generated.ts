import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
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
export type CtaFieldsFragment = { __typename: 'ComponentCta', internalName?: string | null, headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null };

export type CtfCtaQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCtaQuery = { __typename?: 'Query', componentCta?: (
    { __typename?: 'ComponentCta' }
    & CtaFieldsFragment
  ) | null };

export const CtaFieldsFragmentDoc = `
    fragment CtaFields on ComponentCta {
  sys {
    id
  }
  __typename
  internalName
  headline
  subline {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  urlParameters
  colorPalette
}
    `;
export const CtfCtaDocument = `
    query CtfCta($id: String!, $locale: String, $preview: Boolean) {
  componentCta(id: $id, locale: $locale, preview: $preview) {
    ...CtaFields
  }
}
    ${CtaFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;
export const useCtfCtaQuery = <
      TData = CtfCtaQuery,
      TError = unknown
    >(
      variables: CtfCtaQueryVariables,
      options?: UseQueryOptions<CtfCtaQuery, TError, TData>
    ) =>
    useQuery<CtfCtaQuery, TError, TData>(
      ['CtfCta', variables],
      fetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables),
      options
    );

useCtfCtaQuery.getKey = (variables: CtfCtaQueryVariables) => ['CtfCta', variables];
;

useCtfCtaQuery.fetcher = (variables: CtfCtaQueryVariables) => fetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables);