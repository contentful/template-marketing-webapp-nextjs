export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const res =
      typeof window === 'undefined'
        ? await (await import('./serverFetchConfig')).fetchContentful(query, variables, options)
        : await fetch('/api/contentful', {
            method: 'POST',
            ...options,
            body: JSON.stringify({ query, variables }),
          });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
