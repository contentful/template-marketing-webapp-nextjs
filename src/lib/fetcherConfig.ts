export const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${String(
  process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_ID,
)}`;

export const fetchParams = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
  },
};
