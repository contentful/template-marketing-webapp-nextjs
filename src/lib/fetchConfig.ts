export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${String(
    process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_ID,
  )}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
    },
  },
};
