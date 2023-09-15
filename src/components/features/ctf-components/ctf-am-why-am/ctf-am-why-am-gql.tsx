import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfAmWhyAmQuery } from './__generated/ctf-am-why-am.generated';
import { CtfAmWhyAm } from './ctf-am-why-am';

interface CtfWhyAmGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfAmWhyAmGql = (props: CtfWhyAmGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfAmWhyAmQuery({
    id,
    locale,
    preview,
  });

  const whyAmBlock = useContentfulLiveUpdates(data?.whyAmBlock);

  if (!whyAmBlock || isLoading) return null;

  return <CtfAmWhyAm {...whyAmBlock} />;
};
