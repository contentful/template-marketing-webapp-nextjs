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
export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null };

export type CtfRichTextHyperlinkQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfRichTextHyperlinkQuery = (
  { __typename?: 'Query' }
  & RichTextHyperlinkFieldsFragment
);

export const RichTextHyperlinkFieldsFragmentDoc = `
    fragment RichTextHyperlinkFields on Query {
  page(id: $id, preview: $preview, locale: $locale) {
    ...PageLinkFields
  }
}
    `;
export const CtfRichTextHyperlinkDocument = `
    query CtfRichTextHyperlink($id: String!, $locale: String, $preview: Boolean) {
  ...RichTextHyperlinkFields
}
    ${RichTextHyperlinkFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;
export const useCtfRichTextHyperlinkQuery = <
      TData = CtfRichTextHyperlinkQuery,
      TError = unknown
    >(
      variables: CtfRichTextHyperlinkQueryVariables,
      options?: UseQueryOptions<CtfRichTextHyperlinkQuery, TError, TData>
    ) =>
    useQuery<CtfRichTextHyperlinkQuery, TError, TData>(
      ['CtfRichTextHyperlink', variables],
      fetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables),
      options
    );

useCtfRichTextHyperlinkQuery.getKey = (variables: CtfRichTextHyperlinkQueryVariables) => ['CtfRichTextHyperlink', variables];
;

useCtfRichTextHyperlinkQuery.fetcher = (variables: CtfRichTextHyperlinkQueryVariables) => fetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables);