import React from 'react';

import { CtfHeroBanner } from './ctf-hero-banner';

import { useCtfHeroBannerQuery } from '@ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated';

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
