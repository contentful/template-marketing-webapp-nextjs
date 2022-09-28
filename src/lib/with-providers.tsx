import { ThemeProvider } from '@material-ui/styles';
import { ApolloClient, IntrospectionResultData, NormalizedCacheObject } from 'apollo-boost';
import { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';

import { ContentfulContext, contentfulContextValue } from '@src/contentful-context';
import { createCfulUrl, createClientWithLink, createLink } from '@src/lib/init-apollo';
import colorfulTheme from '@src/theme';
import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';

const legalIntrospection = require('../../introspection/legal-introspection.json');
const mainIntrospection = require('../../introspection/main-introspection.json');

interface CfulApolloConfig {
  url: string;
  introspection?: IntrospectionResultData;
  state?: NormalizedCacheObject;
}

type ApolloKeys = 'main' | 'legal';
type CfulApolloConfigs = Record<ApolloKeys, CfulApolloConfig>;

interface WithProvidersPropsInterface {
  apolloClients?: {
    main: ApolloClient<NormalizedCacheObject>;
    legal: ApolloClient<NormalizedCacheObject>;
  };
  apolloConfigs: CfulApolloConfigs;
  pageProps: any;
  ssrQuery?: {
    [key: string]: string;
  };
}

const { i18n } = i18nConfig;

function initApolloClient(config: CfulApolloConfig, connectToDevTools?: boolean) {
  return createClientWithLink(
    createLink(config.url),
    config.introspection,
    config.state,
    !!connectToDevTools,
  );
}

interface ApolloContextInterface {
  mainClient: ApolloClient<NormalizedCacheObject> | undefined;
  legalClient: ApolloClient<NormalizedCacheObject> | undefined;
}

export const ApolloContext = React.createContext<ApolloContextInterface>({
  mainClient: undefined,
  legalClient: undefined,
});

const withProviders = () => {
  return (Page: any): NextPage<WithProvidersPropsInterface> => {
    const PageWithProviders: NextPage<WithProvidersPropsInterface> = props => {
      const { apolloConfigs, apolloClients, ...rest } = props;

      const mainApolloClient =
        apolloClients === undefined
          ? initApolloClient(apolloConfigs.main, false)
          : apolloClients.main;
      const legalApolloClient =
        apolloClients === undefined
          ? initApolloClient(apolloConfigs.legal, false)
          : apolloClients.legal;

      const apolloContextValue: ApolloContextInterface = {
        mainClient: mainApolloClient,
        legalClient: legalApolloClient,
      };

      return (
        <ApolloProvider client={mainApolloClient}>
          <ApolloContext.Provider value={apolloContextValue}>
            <Page {...rest} />
          </ApolloContext.Provider>
        </ApolloProvider>
      );
    };

    PageWithProviders.displayName = 'PageWithProviders';

    return PageWithProviders;
  };
};

export default withProviders;

export const generateGetServerSideProps =
  ({
    customGetServerSideProps,
    Page,
  }: {
    customGetServerSideProps?: GetServerSideProps;
    Page: any;
  }): GetServerSideProps =>
  async ctx => {
    const error: null | { code: number; message?: string } = null;
    const pageProps = customGetServerSideProps
      ? await customGetServerSideProps(ctx)
      : { props: {} };

    if (ctx.res && ctx.res.finished) {
      return pageProps;
    }

    const apolloConfigs: CfulApolloConfigs = {
      main: {
        url: createCfulUrl(
          contentfulConfig.contentful.main_space_id,
          ctx.query.preview
            ? contentfulConfig.contentful.main_space_preview_token
            : contentfulConfig.contentful.main_space_token,
          (ctx.query.env as string) || undefined,
        ),
        introspection: mainIntrospection,
      },
      legal: {
        url: createCfulUrl(
          contentfulConfig.contentful.legal_space_id,
          contentfulConfig.contentful.legal_space_token,
        ),
        introspection: legalIntrospection,
      },
    };

    const mainApolloClient = initApolloClient(apolloConfigs.main, false);
    const legalApolloClient = initApolloClient(apolloConfigs.legal, false);
    const apolloContextValue: ApolloContextInterface = {
      mainClient: mainApolloClient,
      legalClient: legalApolloClient,
    };

    const newProps = {
      ...(pageProps as any).props,
    };

    try {
      if (ctx.locale) {
        contentfulContextValue.locale = ctx.locale;
      }

      await getDataFromTree(
        <ContentfulContext.Provider value={contentfulContextValue}>
          <ApolloProvider client={mainApolloClient}>
            <ApolloContext.Provider value={apolloContextValue}>
              <ThemeProvider theme={colorfulTheme}>
                <Page
                  locale={ctx.locale}
                  pageProps={{ props: newProps }}
                  apolloConfigs={apolloConfigs}
                  apolloClients={{
                    main: mainApolloClient,
                    legal: legalApolloClient,
                  }}
                  error={error}
                  ssrQuery={ctx.query}
                />
              </ThemeProvider>
            </ApolloContext.Provider>
          </ApolloProvider>
        </ContentfulContext.Provider>,
      );
    } catch (e) {
      console.log('Pre-render error:', e);
    }

    apolloConfigs.main.state = mainApolloClient.extract();
    apolloConfigs.legal.state = legalApolloClient.extract();

    return {
      props: {
        ...(await serverSideTranslations(ctx.locale || i18n.defaultLocale)),
        pageProps: {
          ...pageProps,
          props: newProps,
        },
        apolloConfigs,
        error,
      },
    };
  };
