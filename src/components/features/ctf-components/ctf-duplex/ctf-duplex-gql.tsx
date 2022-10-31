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

  if (isLoading || !data?.componentDuplex) {
    return null;
  }

  return <CtfDuplex {...data.componentDuplex} />;
};
