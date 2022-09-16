export const localesMap = {
  en: 'en-US',
  de: 'de-DE',
};

const localeToLanguageMap = {
  en: 'English',
  de: 'Deutsch',
};

export const reverseLocalesMap = Object.fromEntries(
  Object.entries(localesMap).map((entry) => entry.reverse()),
);

export type LocaleConfig = { lang: string; locale: string };

export function getLocaleConfig(lang: string): LocaleConfig {
  if (localesMap[lang] === undefined && reverseLocalesMap[lang] === undefined) {
    return { lang, locale: lang };
  }

  if (localesMap[lang] !== undefined) {
    return { lang, locale: localesMap[lang] };
  }

  return {
    lang: reverseLocalesMap[lang],
    locale: lang,
  };
}

export const prettifyLocale = (locale: string) =>
  reverseLocalesMap[locale] || locale.split('-')[0];

export const localeToLanguage = (locale: string): string => {
  if (localeToLanguageMap[locale] !== undefined) {
    return localeToLanguageMap[locale];
  }

  return locale;
};

export default localesMap;
