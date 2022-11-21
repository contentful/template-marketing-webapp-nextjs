import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { MenuGroupFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { MenuGroupFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
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
export type NavigationFieldsFragment = { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename?: 'MenuGroup', label?: string | null, link?: (
          { __typename?: 'Page' }
          & PageLinkFieldsFragment
        ) | null, children?: (
          { __typename?: 'MenuGroupFeaturedPagesCollection' }
          & MenuGroupFieldsFragment
        ) | null } | null> } | null } | null> };

export type CtfNavigationQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfNavigationQuery = { __typename?: 'Query', navigationMenuCollection?: (
    { __typename?: 'NavigationMenuCollection' }
    & NavigationFieldsFragment
  ) | null };

export const NavigationFieldsFragmentDoc = `
    fragment NavigationFields on NavigationMenuCollection {
  items {
    menuItemsCollection {
      items {
        label: groupName
        link: groupLink {
          ...PageLinkFields
        }
        children: featuredPagesCollection {
          ...MenuGroupFields
        }
      }
    }
  }
}
    `;
export const CtfNavigationDocument = `
    query CtfNavigation($locale: String, $preview: Boolean) {
  navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
    ...NavigationFields
  }
}
    ${NavigationFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${MenuGroupFieldsFragmentDoc}`;
export const useCtfNavigationQuery = <
      TData = CtfNavigationQuery,
      TError = unknown
    >(
      variables?: CtfNavigationQueryVariables,
      options?: UseQueryOptions<CtfNavigationQuery, TError, TData>
    ) =>
    useQuery<CtfNavigationQuery, TError, TData>(
      variables === undefined ? ['CtfNavigation'] : ['CtfNavigation', variables],
      fetcher<CtfNavigationQuery, CtfNavigationQueryVariables>(CtfNavigationDocument, variables),
      options
    );

useCtfNavigationQuery.getKey = (variables?: CtfNavigationQueryVariables) => variables === undefined ? ['CtfNavigation'] : ['CtfNavigation', variables];
;

useCtfNavigationQuery.fetcher = (variables?: CtfNavigationQueryVariables) => fetcher<CtfNavigationQuery, CtfNavigationQueryVariables>(CtfNavigationDocument, variables);