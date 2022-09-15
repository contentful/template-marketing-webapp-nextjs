import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import {
  ApolloClient,
  IntrospectionResultData,
  NormalizedCacheObject,
} from 'apollo-boost';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ThemeProvider } from '@material-ui/styles';
import colorfulTheme from '@src/theme';
import {
  createCfulUrl,
  createClientWithLink,
  createLink,
} from '@src/lib/init-apollo';
import getContentfulConfig from '@src/get-contentful-config';
import { NinetailedProvider } from '@ninetailed/experience.js-next';

import mainIntrospection from '../../introspection/main-introspection.json';
import legalIntrospection from '../../introspection/legal-introspection.json';

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

const contentfulConfig = getContentfulConfig();

function initApolloClient(
  config: CfulApolloConfig,
  connectToDevTools?: boolean,
) {
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
    const PageWithProviders: NextPage<WithProvidersPropsInterface> = (
      props,
    ) => {
      const { pageProps, apolloConfigs, apolloClients, ssrQuery } = props;

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
            <Page {...pageProps} ssrQuery={ssrQuery} />
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
  async (ctx) => {
    const error: null | { code: number; message?: string } = null;
    const pageProps = (customGetServerSideProps != null)
      ? await customGetServerSideProps(ctx)
      : { props: {} };

    if (ctx.res?.finished) {
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
      await getDataFromTree(
        <NinetailedProvider
          clientId={process.env.NEXT_PUBLIC_NINETAILED_API_KEY ?? ''}
          environment="main"
          plugins={[]}
          // profile={ninetailed.profile}
        >
          <ApolloProvider client={mainApolloClient}>
            <ApolloContext.Provider value={apolloContextValue}>
              <ThemeProvider theme={colorfulTheme}>
                <Page
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
        </NinetailedProvider>,
      );
    } catch (e) {
      console.log('Pre-render error:', e);
    }

    apolloConfigs.main.state = mainApolloClient.extract();
    apolloConfigs.legal.state = legalApolloClient.extract();

    // Head.rewind();

    return {
      props: {
        pageProps: {
          ...pageProps,
          props: newProps,
        },
        apolloConfigs,
        error,
      },
    };
  };
