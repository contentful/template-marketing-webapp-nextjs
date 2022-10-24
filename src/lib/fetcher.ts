import { useContentfulContext } from '@src/contentful-context';

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers'],
): ((variables?: TVariables) => Promise<TData>) => {
  const { fetcherUrl, fetchParams } = useContentfulContext();

  return async (variables?: TVariables) => {
    const res = await fetch(fetcherUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...fetchParams.headers,
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error…');
    }

    return json.data;
  };
};
