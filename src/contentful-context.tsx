import { useContext, createContext } from 'react';

import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';
const { i18n } = i18nConfig;

export interface ContentfulContextInterface {
  locale: string;
  spaceIds: {
    main: string;
  };
  previewActive: boolean;
}

export const contentfulContextValue: ContentfulContextInterface = {
  locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.space_id,
  },
  previewActive: false,
};

export const ContentfulContext = createContext<ContentfulContextInterface>(contentfulContextValue);

export const useContentfulContext = () => useContext(ContentfulContext);

const ContentfulContentProvider = ({ children, router }) => {
  const previewActive = !!router.query.preview;

  return (
    <ContentfulContext.Provider
      value={{
        locale: typeof router.locale === 'string' ? router.locale : i18n.defaultLocale,
        spaceIds: {
          main: contentfulConfig.contentful.space_id,
        },
        previewActive,
      }}
    >
      {children}
    </ContentfulContext.Provider>
  );
};

export { ContentfulContentProvider };
