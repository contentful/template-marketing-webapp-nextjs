import { prefetchMap } from '@src/lib/prefetch-mappings';

/**
 * Create an array of prefetchQuery functions that can be awaited in our pages to prefetch React Query calls
 * @param inputArr
 * @param queryClient
 * @param locale
 */
export const prefetchPromiseArr = ({ inputArr, queryClient, locale }) =>
  inputArr?.map(item => {
    if (!item) return;

    const { __typename, sys } = item;

    if (!__typename) return;

    const query = prefetchMap?.[__typename];

    if (!query) return;

    return queryClient.prefetchQuery(
      query.getKey({ id: sys.id, locale, preview: false }),
      query.fetcher({ id: sys.id, locale, preview: false }),
    );
  }) || [];
