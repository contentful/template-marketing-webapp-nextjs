import { I18nextProvider } from 'react-i18next';
import { addDecorator } from '@storybook/react';
import i18n from './i18next';
import { i18n as nextI18nextConfig } from '../next-i18next.config';
import colorfulTheme from '../src/theme';
import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { CssBaseline, Theme } from '@mui/material';

const languageNames = new Intl.DisplayNames([nextI18nextConfig.defaultLocale], {
  type: 'language',
});

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    ...theme.typography.body1,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const WrapperChild = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
};

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={colorfulTheme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap"
        rel="stylesheet"
      />
      <CssBaseline />
      <WrapperChild>{storyFn()}</WrapperChild>
    </ThemeProvider>
  </I18nextProvider>
));

export const parameters = {
  i18n,
  locale: nextI18nextConfig.defaultLocale,
  locales: nextI18nextConfig.locales.reduce((acc, obj) => {
    acc[obj] = languageNames.of(obj);
    return acc;
  }, {}),
  actions: { argTypesRegex: '^on[A-Z].*' },
};
