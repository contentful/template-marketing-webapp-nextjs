import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmWhyAmFieldsFragment = { __typename: 'WhyAmBlock', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'WhyAmBlockBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfAmWhyAmQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfAmWhyAmQuery = { __typename?: 'Query', whyAmBlock?: (
    { __typename?: 'WhyAmBlock' }
    & AmWhyAmFieldsFragment
  ) | null };

export const AmWhyAmFieldsFragmentDoc = `
    fragment AmWhyAmFields on WhyAmBlock {
  __typename
  sys {
    id
  }
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
  heroSize
  colorPalette
}
    `;
export const CtfAmWhyAmDocument = `
    query CtfAmWhyAm($id: String!, $locale: String, $preview: Boolean) {
  whyAmBlock(id: $id, locale: $locale, preview: $preview) {
    ...AmWhyAmFields
  }
}
    ${AmWhyAmFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfAmWhyAmQuery = <
      TData = CtfAmWhyAmQuery,
      TError = unknown
    >(
      variables: CtfAmWhyAmQueryVariables,
      options?: UseQueryOptions<CtfAmWhyAmQuery, TError, TData>
    ) =>
    useQuery<CtfAmWhyAmQuery, TError, TData>(
      ['CtfAmWhyAm', variables],
      customFetcher<CtfAmWhyAmQuery, CtfAmWhyAmQueryVariables>(CtfAmWhyAmDocument, variables),
      options
    );

useCtfAmWhyAmQuery.getKey = (variables: CtfAmWhyAmQueryVariables) => ['CtfAmWhyAm', variables];
;

useCtfAmWhyAmQuery.fetcher = (variables: CtfAmWhyAmQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfAmWhyAmQuery, CtfAmWhyAmQueryVariables>(CtfAmWhyAmDocument, variables, options);