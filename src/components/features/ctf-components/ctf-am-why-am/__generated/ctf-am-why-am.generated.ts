import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type WhyAmFieldsFragment = { __typename: 'WhyAmBlock', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'WhyAmBlockBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfWhyAmQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfWhyAmQuery = { __typename?: 'Query', whyAmBlock?: (
    { __typename?: 'WhyAmBlock' }
    & WhyAmFieldsFragment
  ) | null };

export const WhyAmFieldsFragmentDoc = `
    fragment WhyAmFields on WhyAmBlock {
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
export const CtfWhyAmDocument = `
    query CtfWhyAm($id: String!, $locale: String, $preview: Boolean) {
  whyAmBlock(id: $id, locale: $locale, preview: $preview) {
    ...WhyAmFields
  }
}
    ${WhyAmFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfWhyAmQuery = <
      TData = CtfWhyAmQuery,
      TError = unknown
    >(
      variables: CtfWhyAmQueryVariables,
      options?: UseQueryOptions<CtfWhyAmQuery, TError, TData>
    ) =>
    useQuery<CtfWhyAmQuery, TError, TData>(
      ['CtfWhyAm', variables],
      customFetcher<CtfWhyAmQuery, CtfWhyAmQueryVariables>(CtfWhyAmDocument, variables),
      options
    );

    useCtfWhyAmQuery.getKey = (variables: CtfWhyAmQueryVariables) => ['CtfWhyAm', variables];
;

useCtfWhyAmQuery.fetcher = (variables: CtfWhyAmQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfWhyAmQuery, CtfWhyAmQueryVariables>(CtfWhyAmDocument, variables, options);
