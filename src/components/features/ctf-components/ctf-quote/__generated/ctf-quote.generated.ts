import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_Page_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
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
export type QuoteFieldsFragment = { __typename: 'ComponentQuote', internalName?: string | null, quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<(
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentHeroBanner' }
          & ComponentReferenceFields_ComponentHeroBanner_Fragment
        ) | (
          { __typename?: 'ComponentQuote' }
          & ComponentReferenceFields_ComponentQuote_Fragment
        ) | (
          { __typename?: 'FooterMenu' }
          & ComponentReferenceFields_FooterMenu_Fragment
        ) | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: (
    { __typename?: 'ComponentQuote' }
    & QuoteFieldsFragment
  ) | null };

export const QuoteFieldsFragmentDoc = `
    fragment QuoteFields on ComponentQuote {
  __typename
  sys {
    id
  }
  internalName
  quote {
    json
    links {
      entries {
        block {
          ...ComponentReferenceFields
        }
      }
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  quoteAlignment
  image {
    ...AssetFields
  }
  imagePosition
  colorPalette
}
    `;
export const CtfQuoteDocument = `
    query CtfQuote($id: String!, $locale: String, $preview: Boolean) {
  componentQuote(id: $id, locale: $locale, preview: $preview) {
    ...QuoteFields
  }
}
    ${QuoteFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfQuoteQuery = <
      TData = CtfQuoteQuery,
      TError = unknown
    >(
      variables: CtfQuoteQueryVariables,
      options?: UseQueryOptions<CtfQuoteQuery, TError, TData>
    ) =>
    useQuery<CtfQuoteQuery, TError, TData>(
      ['CtfQuote', variables],
      fetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables),
      options
    );

useCtfQuoteQuery.getKey = (variables: CtfQuoteQueryVariables) => ['CtfQuote', variables];
;

useCtfQuoteQuery.fetcher = (variables: CtfQuoteQueryVariables) => fetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables);