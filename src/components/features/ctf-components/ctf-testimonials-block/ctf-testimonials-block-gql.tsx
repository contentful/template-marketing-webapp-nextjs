import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfTestimonialsBlockQuery } from './__generated/ctf-testimonials-block.generated';
import { TestimonialsBlock } from './ctf-testimonials-block';

export const CtfTestimonialsBlockGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfTestimonialsBlockQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amTestimonialsBlock);

  if (!content || isLoading) return null;

  return <TestimonialsBlock {...content} />;
};
