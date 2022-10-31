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
export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfHeroBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: (
    { __typename?: 'ComponentHeroBanner' }
    & HeroBannerFieldsFragment
  ) | null };

export const HeroBannerFieldsFragmentDoc = `
    fragment HeroBannerFields on ComponentHeroBanner {
  sys {
    id
  }
  internalName
  __typename
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
export const CtfHeroBannerDocument = `
    query CtfHeroBanner($id: String!, $locale: String, $preview: Boolean) {
  componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
    ...HeroBannerFields
  }
}
    ${HeroBannerFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfHeroBannerQuery = <
      TData = CtfHeroBannerQuery,
      TError = unknown
    >(
      variables: CtfHeroBannerQueryVariables,
      options?: UseQueryOptions<CtfHeroBannerQuery, TError, TData>
    ) =>
    useQuery<CtfHeroBannerQuery, TError, TData>(
      ['CtfHeroBanner', variables],
      fetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables),
      options
    );

useCtfHeroBannerQuery.getKey = (variables: CtfHeroBannerQueryVariables) => ['CtfHeroBanner', variables];
;

useCtfHeroBannerQuery.fetcher = (variables: CtfHeroBannerQueryVariables) => fetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables);