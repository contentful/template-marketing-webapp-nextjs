import React, { useContext } from 'react';

import { getParamHeaders, fetcherHeaderParamsDefault, fetcherGraphqlEndpoint, fetcherGraphqlEndpointFromQueryParams } from '@src/lib/fetcherParams';
import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';
const { i18n } = i18nConfig;

export interface ContentfulContextInterface {
  locale: string;
  spaceIds: {
    main: string;
    legal: string;
  };
  previewActive: boolean;
  xrayActive: boolean;
  appUrl: string;
  spaceEnv: string;
  availableLocales: string[];
  fetcherUrl: string;
  fetcherConfig: (
    { options, query, variables }: { options: RequestInit['headers'], query: string, variables }
  ) => Record<string, unknown>;
}

export const contentfulContextValue: ContentfulContextInterface = {
  locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.main_space_id,
    legal: contentfulConfig.contentful.legal_space_id,
  },
  previewActive: false,
  xrayActive: false,
  appUrl: contentfulConfig.meta.url,
  spaceEnv: 'default',
  availableLocales: contentfulConfig.contentful.available_locales,
  fetcherUrl: fetcherGraphqlEndpoint,
  fetcherConfig: ({ options, query, variables }) => ({
    method: 'POST',
    headers: {
      ...fetcherHeaderParamsDefault.headers,
      ...options,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }),
};

export const ContentfulContext = React.createContext<ContentfulContextInterface>(contentfulContextValue);

export const useContentfulContext = () => useContext(ContentfulContext);

const ContentfulContentProvider = ({ children, router }) => {
  const previewActive = !!router.query.preview;
  const { delivery_token, preview_token, space_id } = router.query;
  const shouldUseSpaceCredsFromParams = !!delivery_token && !!preview_token && !!space_id

  const fetcherConfig = ({ options, query, variables }) => {
    const fetchParamHeaders = getParamHeaders({ previewActive, shouldUseSpaceCredsFromParams, preview_token, delivery_token });
    return {
      method: 'POST',
      headers: {
        ...fetchParamHeaders,
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  }

  return (
    <ContentfulContext.Provider value={{
      locale: typeof router.locale === 'string' ? router.locale : i18n.defaultLocale,
      spaceIds: {
        main: contentfulConfig.contentful.main_space_id,
        legal: contentfulConfig.contentful.legal_space_id,
      },
      previewActive,
      xrayActive: !!router.query.xray,
      appUrl: contentfulConfig.meta.url,
      spaceEnv: router.query.env ?? 'default',
      availableLocales: contentfulConfig.contentful.available_locales,
      fetcherUrl: shouldUseSpaceCredsFromParams ? fetcherGraphqlEndpointFromQueryParams(space_id) : fetcherGraphqlEndpoint,
      fetcherConfig
    }} >
      {children}
    </ContentfulContext.Provider>
  );

};

export { ContentfulContentProvider };
