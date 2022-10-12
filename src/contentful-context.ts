import React, { useContext } from 'react';

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
};

export const ContentfulContext = React.createContext(contentfulContextValue);

export const useContentfulContext = () => useContext(ContentfulContext);
