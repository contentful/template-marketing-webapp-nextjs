import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
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
export type DuplexFieldsFragment = { __typename: 'ComponentDuplex', internalName?: string | null, containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfDuplexQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfDuplexQuery = { __typename?: 'Query', componentDuplex?: (
    { __typename?: 'ComponentDuplex' }
    & DuplexFieldsFragment
  ) | null };

export const DuplexFieldsFragmentDoc = `
    fragment DuplexFields on ComponentDuplex {
  sys {
    id
  }
  __typename
  internalName
  containerLayout
  headline
  bodyText {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  image {
    ...AssetFields
  }
  imageStyle
  colorPalette
}
    `;
export const CtfDuplexDocument = `
    query CtfDuplex($id: String!, $locale: String, $preview: Boolean) {
  componentDuplex(id: $id, locale: $locale, preview: $preview) {
    ...DuplexFields
  }
}
    ${DuplexFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfDuplexQuery = <
      TData = CtfDuplexQuery,
      TError = unknown
    >(
      variables: CtfDuplexQueryVariables,
      options?: UseQueryOptions<CtfDuplexQuery, TError, TData>
    ) =>
    useQuery<CtfDuplexQuery, TError, TData>(
      ['CtfDuplex', variables],
      fetcher<CtfDuplexQuery, CtfDuplexQueryVariables>(CtfDuplexDocument, variables),
      options
    );

useCtfDuplexQuery.getKey = (variables: CtfDuplexQueryVariables) => ['CtfDuplex', variables];
;

useCtfDuplexQuery.fetcher = (variables: CtfDuplexQueryVariables) => fetcher<CtfDuplexQuery, CtfDuplexQueryVariables>(CtfDuplexDocument, variables);