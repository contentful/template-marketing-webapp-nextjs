export const fetcherGraphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${String(
  process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_ID,
)}`;

export const fetcherGraphqlEndpointFromQueryParams = (space_id) => `https://graphql.contentful.com/content/v1/spaces/${space_id}`;

export const fetcherHeaderParamsDefault = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN}`,
  },
};

export const fetcherHeaderParamsPreview = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN}`,
  },
};

export const getParamHeaders = ({ previewActive, shouldUseSpaceCredsFromParams, preview_token, delivery_token }) => {
  if (previewActive) {
    if (shouldUseSpaceCredsFromParams) {
      return {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${preview_token}`,
        },
      }
    } else {
      return fetcherHeaderParamsPreview
    }
  } else if (shouldUseSpaceCredsFromParams) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${delivery_token}`,
      },
    }
  }
  else {
    return fetcherHeaderParamsDefault
  }
}