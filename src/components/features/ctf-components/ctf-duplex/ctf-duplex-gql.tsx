import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfDuplexQuery } from './__generated/ctf-duplex.generated';
import { CtfDuplex } from './ctf-duplex';

interface CtfDuplexGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfDuplexGql = ({ id, locale, preview }: CtfDuplexGqlPropsInterface) => {
  const { data, isLoading } = useCtfDuplexQuery({
    id,
    locale,
    preview,
  });

  const componentDuplex = useContentfulLiveUpdates(data?.componentDuplex);

  if (isLoading || !componentDuplex) {
    return null;
  }

  return <CtfDuplex {...componentDuplex} />;
};
