import { QueryCache } from '@tanstack/query-core';
import Router from 'next/router';

export const queryConfig = {
  queryCache: new QueryCache({
    onError: () => {
      Router.push({ pathname: '/404' });
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
};
