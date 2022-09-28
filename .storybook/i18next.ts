import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18n as nextI18nextConfig } from '../next-i18next.config';
import Backend from 'i18next-http-backend';

const ns = ['common'];
const resources = ns.reduce((acc, n) => {
  nextI18nextConfig.locales.forEach(lng => {
    try {
      const module = require(`../public/locales/${lng}/${n}.json`);

      if (!acc[lng]) acc[lng] = {};

      acc[lng] = {
        ...acc[lng],
        [n]: module,
      };
    } catch (e) {
      console.error(`STORYBOOK I18N WARNING: `, e);

      return acc;
    }
  });
  return acc;
}, {});

i18n.use(initReactI18next).use(Backend).init({
  lng: nextI18nextConfig.defaultLocale,
  fallbackLng: nextI18nextConfig.defaultLocale,
  defaultNS: ns,
  resources,
  debug: true,
});

export default i18n;
