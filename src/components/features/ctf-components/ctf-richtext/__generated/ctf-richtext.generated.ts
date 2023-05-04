import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
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
      customFetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables),
      options
    );

useCtfRichTextHyperlinkQuery.getKey = (variables: CtfRichTextHyperlinkQueryVariables) => ['CtfRichTextHyperlink', variables];
;

useCtfRichTextHyperlinkQuery.fetcher = (variables: CtfRichTextHyperlinkQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables, options);