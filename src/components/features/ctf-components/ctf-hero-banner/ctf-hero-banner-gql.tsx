import React from 'react';

import { useCtfHeroBannerQuery } from './__generated/ctf-hero-banner.generated';
import { CtfHeroBanner } from './ctf-hero-banner';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfHeroGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfHeroBannerQuery({
    id,
    locale,
    preview,
  });

  if (!data?.componentHeroBanner || isLoading) return null;

  return <CtfHeroBanner {...data.componentHeroBanner} />;
};
