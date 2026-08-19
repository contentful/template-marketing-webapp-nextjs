import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { fetchConfig } from '@src/lib/fetchConfig';

type Domain = 'contentful.com' | 'flinkly.com' | 'quirely.com';

const fetcherGraphqlEndpoint = (space_id, domain: Domain = 'contentful.com') =>
  `https://graphql.${domain}/content/v1/spaces/${space_id}`;

export const useExternalSpaceAndPreview = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { domain, delivery_token, preview_token, space_id, preview } = router.query;

  const previewActive = !!preview;
  const shouldUseSpaceCredsFromParams = !!delivery_token && !!preview_token && !!space_id;
  const requestedDomain = Array.isArray(domain) ? domain[0] : domain;
  const externalDomain =
    requestedDomain === 'flinkly.com' || requestedDomain === 'quirely.com'
      ? requestedDomain
      : 'contentful.com';

  fetchConfig.external = shouldUseSpaceCredsFromParams
    ? {
        endpoint: fetcherGraphqlEndpoint(space_id, externalDomain),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${previewActive ? preview_token : delivery_token}`,
        },
      }
    : undefined;

  useEffect(() => {
    if (shouldUseSpaceCredsFromParams) {
      queryClient.invalidateQueries();
    }
  }, [queryClient, shouldUseSpaceCredsFromParams]);

  return {
    shouldUseSpaceCredsFromParams,
  };
};
