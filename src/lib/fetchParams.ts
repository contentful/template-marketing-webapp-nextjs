export const fetchGraphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${String(
  process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_ID,
)}`;

export const fetchDefaultHeaderParams = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
  },
};

export const fetchHeaderParamsPreview = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN}`,
  },
};
