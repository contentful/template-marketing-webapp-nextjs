import * as Types from '../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/link/__generated/page-link.generated';
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