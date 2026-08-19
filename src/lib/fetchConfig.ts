type ExternalFetchConfig = {
  endpoint: string;
  headers: RequestInit['headers'];
};

type FetchConfig = {
  external?: ExternalFetchConfig;
};

export const fetchConfig: FetchConfig = {};

export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    let res: Response;

    if (fetchConfig.external) {
      const headers = new Headers(fetchConfig.external.headers);
      headers.set('Content-Type', 'application/json');

      res = await fetch(fetchConfig.external.endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
      });
    } else if (!('window' in globalThis)) {
      const { fetchContentful } = await import('./serverFetchConfig');

      res = await fetchContentful(query, variables, options);
    } else {
      const operationName = query.match(
        /\b(?:query|mutation|subscription)\s+([_A-Za-z][_0-9A-Za-z]*)/,
      )?.[1];
      const headers = new Headers(options);
      headers.set('Content-Type', 'application/json');

      res = await fetch('/api/contentful', {
        method: 'POST',
        headers,
        body: JSON.stringify({ operationName, variables }),
      });
    }

    const json = await res.json();

    if (!res.ok) {
      throw new Error(
        json.error || json.errors?.[0]?.message || `Contentful request failed (${res.status})`,
      );
    }

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
