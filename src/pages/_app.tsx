import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import { useEffect, useState } from 'react';

import { Settings } from '@src/components/features/settings';
import { Layout } from '@src/components/templates/layout/layout';
import { useContentfulContext, ContentfulContentProvider } from '@src/contentful-context';
import { queryConfig } from '@src/lib/gql-client';
import colorfulTheme from '@src/theme';
import contentfulConfig from 'contentful.config';
import nextI18nConfig from 'next-i18next.config';

const LivePreviewProvider = ({ children }) => {
  const { previewActive, locale } = useContentfulContext();

  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

type CustomPageProps = SSRConfig & { dehydratedState: DehydratedState; err: Error };

const CustomApp = ({
  Component,
  router,
  pageProps: originalPageProps,
}: AppProps<CustomPageProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  const { dehydratedState, err, ...pageProps } = originalPageProps;
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
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title key="title">{contentfulConfig.meta.title}</title>
        <meta key="og:title" property="og:title" content={contentfulConfig.meta.title} />
        <meta key="description" name="description" content={contentfulConfig.meta.description} />

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

      <ContentfulContentProvider router={router}>
        <LivePreviewProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={colorfulTheme}>
                <Hydrate state={dehydratedState}>
                  <Layout preview={previewActive}>
                    <Component {...pageProps} err={err} />
                    <Settings />
                  </Layout>
                </Hydrate>
              </ThemeProvider>
            </StyledEngineProvider>
          </QueryClientProvider>
        </LivePreviewProvider>
      </ContentfulContentProvider>
    </>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
