import { QueryCache, QueryClient } from '@tanstack/query-core';
import Router from 'next/router';

export const gqlQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => {
      Router.push({ pathname: '/404' });
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});
