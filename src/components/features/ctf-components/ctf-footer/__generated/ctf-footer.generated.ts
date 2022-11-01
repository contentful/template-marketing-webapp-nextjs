import * as Types from '../../../../../lib/__generated/graphql.types';

import { MenuGroupFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { MenuGroupFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
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
export type FooterFieldsFragment = { __typename?: 'FooterMenuCollection', items: Array<{ __typename?: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename?: 'MenuGroup', groupName?: string | null, featuredPagesCollection?: (
          { __typename?: 'MenuGroupFeaturedPagesCollection' }
          & MenuGroupFieldsFragment
        ) | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: (
        { __typename?: 'MenuGroupFeaturedPagesCollection' }
        & MenuGroupFieldsFragment
      ) | null } | null } | null> };

export type CtfFooterQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footerMenuCollection?: (
    { __typename?: 'FooterMenuCollection' }
    & FooterFieldsFragment
  ) | null };

export const FooterFieldsFragmentDoc = `
    fragment FooterFields on FooterMenuCollection {
  items {
    menuItemsCollection {
      items {
        groupName
        featuredPagesCollection {
          ...MenuGroupFields
        }
      }
    }
    legalLinks {
      featuredPagesCollection {
        ...MenuGroupFields
      }
    }
    twitterLink
    facebookLink
    linkedinLink
    instagramLink
  }
}
    `;
export const CtfFooterDocument = `
    query CtfFooter($locale: String, $preview: Boolean) {
  footerMenuCollection(locale: $locale, preview: $preview, limit: 1) {
    ...FooterFields
  }
}
    ${FooterFieldsFragmentDoc}
${MenuGroupFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;
export const useCtfFooterQuery = <
      TData = CtfFooterQuery,
      TError = unknown
    >(
      variables?: CtfFooterQueryVariables,
      options?: UseQueryOptions<CtfFooterQuery, TError, TData>
    ) =>
    useQuery<CtfFooterQuery, TError, TData>(
      variables === undefined ? ['CtfFooter'] : ['CtfFooter', variables],
      fetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables),
      options
    );

useCtfFooterQuery.getKey = (variables?: CtfFooterQueryVariables) => variables === undefined ? ['CtfFooter'] : ['CtfFooter', variables];
;

useCtfFooterQuery.fetcher = (variables?: CtfFooterQueryVariables) => fetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables);