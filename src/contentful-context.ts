import React from 'react';

import { contentfulConfig } from 'contentful.config.mjs';

export interface ContentfulContextInterface {
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

export const contentfulContextValue: ContentfulContextInterface = {
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
