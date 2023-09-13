import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfAmHeroQuery } from './__generated/am-hero.generated';
import { AmHero } from './ctf-am-hero';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfAmHeroGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfAmHeroQuery({
    id,
    locale,
    preview,
  });

  const amHero = useContentfulLiveUpdates(data?.amHero);

  if (!amHero || isLoading) return null;

  return <AmHero {...amHero} />;
};
