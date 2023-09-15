import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfCtaFeatureBlockQuery } from './__generated/ctf-cta-feature-block.generated';
import { CtaFeatureBlock } from './ctf-cta-feature-block';

export const CtfCtaFeatureBlockGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfCtaFeatureBlockQuery({
    id,
    locale,
    preview,
  });

  const ctaFeatureBlock = useContentfulLiveUpdates(data?.amCtaFeatureBlock);

  if (!ctaFeatureBlock || isLoading) return null;

  return <CtaFeatureBlock {...ctaFeatureBlock} />;
};
