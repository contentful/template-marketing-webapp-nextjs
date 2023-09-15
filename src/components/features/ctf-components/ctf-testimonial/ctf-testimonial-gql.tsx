import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfTestimonialQuery } from './__generated/ctf-testimonial.generated';
import { Testimonial } from './ctf-testimonial';

export const CtfTestimonialGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfTestimonialQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amTestimonial);

  if (!content || isLoading) return null;

  return <Testimonial {...content} />;
};
