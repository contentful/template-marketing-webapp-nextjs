import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfFeaturedInsightsQuery } from './__generated/ctf-featured-insights.generated';
import { FeaturedInsights } from './ctf-featured-insights';

export const CtfFeaturedInsightsGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfFeaturedInsightsQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amFeaturedInsights);

  if (!content || isLoading) return null;

  return <FeaturedInsights {...content} />;
};
