const serverContentfulConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${String(process.env.CONTENTFUL_SPACE_ID)}`,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
};

export const fetchConfig = {
  endpoint: serverContentfulConfig.endpoint,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${serverContentfulConfig.accessToken}`,
    },
  },
};

export function fetchContentful(
  query: string,
  variables?: { preview?: boolean | null },
  options?: RequestInit['headers'],
) {
  const token = variables?.preview
    ? serverContentfulConfig.previewAccessToken
    : serverContentfulConfig.accessToken;

  if (!serverContentfulConfig.spaceId || !token) {
    throw new Error('Contentful is not configured');
  }

  const headers = new Headers(options);
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${token}`);

  return fetch(serverContentfulConfig.endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
}
