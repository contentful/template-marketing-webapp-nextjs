import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfFeaturedMediaBlockQuery } from './__generated/ctf-featured-media-block.generated';
import { FeaturedMediaBlock } from './ctf-featured-media-block';

export const CtfFeaturedMediaBlockGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfFeaturedMediaBlockQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amFeaturedMediaBlock);

  if (!content || isLoading) return null;

  return <FeaturedMediaBlock {...content} />;
};
