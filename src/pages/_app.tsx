import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import '@src/components/templates/layout/layout.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import { Settings } from '@src/components/features/settings';
import { Layout } from '@src/components/templates/layout/layout';
import { useContentfulContext, ContentfulContentProvider } from '@src/contentful-context';
import { gqlQueryClient } from '@src/lib/gql-client';
import colorfulTheme from '@src/theme';
import contentfulConfig from 'contentful.config';
import nextI18nConfig from 'next-i18next.config';

const CustomApp = (props: AppProps) => {
  const { Component, pageProps, router } = props;
  const { previewActive } = useContentfulContext();
  useEffect(() => {
    // when component is mounting we remove server side rendered css:
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    router.events.on('routeChangeComplete', () => null);

    return () => {
      router.events.off('routeChangeComplete', () => null);
    };
  }, [router.events]);

  return (
    <ContentfulContentProvider router={router}>
      <QueryClientProvider client={gqlQueryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={colorfulTheme}>
            <Head>
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
              />
              <title key="title">{contentfulConfig.meta.title}</title>
              <meta key="og:title" property="og:title" content={contentfulConfig.meta.title} />
              <meta
                key="description"
                name="description"
                content={contentfulConfig.meta.description}
              />

              <meta
                key="og:description"
                property="og:description"
                content={contentfulConfig.meta.description}
              />
              <meta key="og:image" property="og:image" content={contentfulConfig.meta.image} />
              <meta key="og:image:width" property="og:image:width" content="1200" />
              <meta key="og:image:height" property="og:image:height" content="630" />
              <meta key="og:type" property="og:type" content="website" />
            </Head>
            <Layout preview={previewActive}>
              <Component {...pageProps} err={(props as any).err} />
              <Settings />
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </ContentfulContentProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
