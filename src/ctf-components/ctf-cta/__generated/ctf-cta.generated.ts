import * as Types from '../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/link/__generated/page-link.generated';
import { PostLinkFieldsFragment } from '../../../components/link/__generated/post-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/link/__generated/page-link.generated';
import { PostLinkFieldsFragmentDoc } from '../../../components/link/__generated/post-link.generated';
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
export type CtaFieldsFragment = { __typename: 'ComponentCta', internalName?: string | null, headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | (
    { __typename?: 'Post' }
    & PostLinkFieldsFragment
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
    ...PostLinkFields
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
${PageLinkFieldsFragmentDoc}
${PostLinkFieldsFragmentDoc}`;
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