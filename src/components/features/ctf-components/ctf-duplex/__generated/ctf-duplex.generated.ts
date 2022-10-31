import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetchData } from '@src/lib/fetcher';
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
      useFetchData<CtfDuplexQuery, CtfDuplexQueryVariables>(CtfDuplexDocument).bind(null, variables),
      options
    );