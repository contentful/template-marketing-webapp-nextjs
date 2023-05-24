import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfCtaQuery } from './__generated/ctf-cta.generated';
import { CtfCta } from './ctf-cta';

interface CtfCtaGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCtaGql = ({ id, locale, preview }: CtfCtaGqlPropsInterface) => {
  const { data, isLoading } = useCtfCtaQuery({
    id,
    locale,
    preview,
  });

  const componentCta = useContentfulLiveUpdates(data?.componentCta);

  if (isLoading || !componentCta) {
    return null;
  }

  return <CtfCta {...componentCta} />;
};
