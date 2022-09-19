import React from 'react';

import getContentfulConfig from '@src/get-contentful-config';

export interface ContentfulContextInterface {
  locale: string;
  defaultLocale: string;
  spaceIds: {
    main: string;
    legal: string;
  };
  previewActive: boolean;
  xrayActive: boolean;
  appUrl: string;
  spaceEnv: string;
  availableLocales: string[];
  personalizationAudience: string | null;
}

export const contentfulConfig = getContentfulConfig();

export const contentfulContextValue: ContentfulContextInterface = {
  locale: contentfulConfig.contentful.default_locale,
  defaultLocale: contentfulConfig.contentful.default_locale,
  spaceIds: {
    main: contentfulConfig.contentful.main_space_id,
    legal: contentfulConfig.contentful.legal_space_id,
  },
  previewActive: false,
  xrayActive: false,
  appUrl: contentfulConfig.meta.url,
  spaceEnv: 'default',
  availableLocales: contentfulConfig.contentful.available_locales,
  personalizationAudience: null,
};

export const ContentfulContext = React.createContext(contentfulContextValue);
