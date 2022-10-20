import { QueryCache, QueryClient } from '@tanstack/query-core';
import Router from 'next/router';

export const gqlQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      Router.push({ pathname: '/404', query: { error: (error as Error).message } });

      console.log('---');
      console.log(error);
      console.log(query);
      console.log('---');
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
