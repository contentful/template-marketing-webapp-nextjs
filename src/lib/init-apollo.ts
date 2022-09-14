/* eslint-disable prefer-template */
// This file was created after this exapmple:
// https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js

/* eslint-disable dot-notation */
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  IntrospectionFragmentMatcher,
  NormalizedCacheObject,
} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

export function createCfulUrl(
  spaceId: string,
  apiKey: string,
  spaceEnv?: string,
) {
  const link = `https://graphql.contentful.com/content/v1/spaces/${spaceId}${
    spaceEnv ? '/environments/' + spaceEnv : ''
  }?access_token=${apiKey}`;
  return link;
}

export function createLink(url: string) {
  return new HttpLink({
    uri: url,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: !process['browser'] && (fetch as any),
  });
}

export function createClientWithLink(
  link: ApolloLink,
  introspectionQueryResultData?: any,
  initialState?: NormalizedCacheObject,
  connectToDevTools = false,
) {
  const fragmentMatcher = introspectionQueryResultData
    ? new IntrospectionFragmentMatcher({ introspectionQueryResultData })
    : undefined;

  const cacheInstance = new InMemoryCache(
    fragmentMatcher ? { fragmentMatcher } : undefined,
  ).restore(initialState || {});

  return new ApolloClient({
    connectToDevTools,
    defaultOptions: {
      query: { errorPolicy: 'all' },
      watchQuery: { errorPolicy: 'all' },
    },
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link,
    cache: cacheInstance,
  });
}

export function createCfulClient(
  spaceId: string,
  apiKey: string,
  spaceEnv?: string,
  introspectionQueryResultData?: any,
  initialState?: NormalizedCacheObject,
  connectToDevTools = false,
) {
  const link = createLink(createCfulUrl(spaceId, apiKey, spaceEnv));
  return createClientWithLink(
    link,
    introspectionQueryResultData,
    initialState,
    connectToDevTools,
  );
}

export async function introspect(url: string) {
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: `{ __schema { types { kind name possibleTypes { name } } } }`,
    }),
  });
  const json = await resp.json();
  try {
    json.data.__schema.types = json.data.__schema.types.filter(
      (type) => type.possibleTypes !== null,
    );
  } catch (err) {
    console.error(`error while getting introspection for ${url}`, err);
  }
  return json.data;
}
