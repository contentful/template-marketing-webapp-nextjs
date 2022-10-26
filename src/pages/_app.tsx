import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@src/components/layout/layout.css';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Layout from '@src/components/layout/layout';
import Settings from '@src/components/settings/settings';
import { ContentfulContext, contentfulContextValue } from '@src/contentful-context';
import { queryConfig } from '@src/lib/gql-client';
import colorfulTheme from '@src/theme';
import contentfulConfig from 'contentful.config';
import nextI18nConfig from 'next-i18next.config';

fontawesomeConfig.autoAddCss = false;

type CustomPageProps = SSRConfig & { dehydratedState: DehydratedState; err: Error };

const CustomApp = ({
  Component,
  router,
  pageProps: originalPageProps,
}: AppProps<CustomPageProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  const { dehydratedState, err, ...pageProps } = originalPageProps;

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

  if (typeof router.locale === 'string') {
    contentfulContextValue.locale = router.locale;
  }
  contentfulContextValue.previewActive = !!router.query.preview;
  contentfulContextValue.xrayActive = !!router.query.xray;

  if (router.query.env !== undefined) {
    contentfulContextValue.spaceEnv = router.query.env as string;
  } else {
    contentfulContextValue.spaceEnv = 'default';
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <ContentfulContext.Provider value={contentfulContextValue}>
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
            <Layout preview={contentfulContextValue.previewActive}>
              <Hydrate state={dehydratedState}>
                <Component {...pageProps} err={err} />
              </Hydrate>
              <Settings />
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </ContentfulContext.Provider>
    </QueryClientProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
