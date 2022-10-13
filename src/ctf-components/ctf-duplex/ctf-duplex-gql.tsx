import React from 'react';

import { CtfDuplex } from './ctf-duplex';

import { useCtfDuplexQuery } from '@ctf-components/ctf-duplex/__generated/ctf-duplex.generated';

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

  if (isLoading || !data?.componentDuplex) {
    return null;
  }

  return <CtfDuplex {...data.componentDuplex} />;
};
