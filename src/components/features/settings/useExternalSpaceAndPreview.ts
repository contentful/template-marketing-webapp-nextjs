import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { fetchConfig } from '@src/lib/fetchConfig';

type Domain = 'contentful.com' | 'flinkly.com' | 'quirely.com';

const fetcherGraphqlEndpoint = (space_id, domain = 'contentful.com') =>
  `https://graphql.${domain}/content/v1/spaces/${space_id}`;

const fetcherHeaderParamsDefault = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
};

const fetcherHeaderParamsPreview = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
  },
};

const getFetchParams = ({
  previewActive,
  shouldUseSpaceCredsFromParams,
  preview_token,
  delivery_token,
}) => {
  if (previewActive) {
    if (shouldUseSpaceCredsFromParams) {
      return {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${preview_token}`,
        },
      };
    } else {
      return fetcherHeaderParamsPreview;
    }
  } else if (shouldUseSpaceCredsFromParams) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${delivery_token}`,
      },
    };
  } else {
    return fetcherHeaderParamsDefault;
  }
};

export const useExternalSpaceAndPreview = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { domain, delivery_token, preview_token, space_id, preview } = router.query;

  const previewActive = !!preview;
  const shouldUseSpaceCredsFromParams = !!delivery_token && !!preview_token && !!space_id;

  const fetchParams = getFetchParams({
    previewActive,
    shouldUseSpaceCredsFromParams,
    preview_token,
    delivery_token,
  });

  fetchConfig.params.headers = fetchParams.headers;
  fetchConfig.endpoint = shouldUseSpaceCredsFromParams
    ? fetcherGraphqlEndpoint(space_id, domain as Domain)
    : fetcherGraphqlEndpoint(process.env.CONTENTFUL_SPACE_ID);

  useEffect(() => {
    if (shouldUseSpaceCredsFromParams) {
      queryClient.invalidateQueries();
    }
  }, [queryClient, shouldUseSpaceCredsFromParams]);

  return {
    shouldUseSpaceCredsFromParams,
  };
};
