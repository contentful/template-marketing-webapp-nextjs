export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${String(
    process.env.CONTENTFUL_SPACE_ID,
  )}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
};

export function fetchContentful(
  query: string,
  variables?: { preview?: boolean | null },
  options?: RequestInit['headers'],
) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const token = variables?.preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !token) {
    throw new Error('Contentful is not configured');
  }

  return fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options,
    },
    body: JSON.stringify({ query, variables }),
  });
}
