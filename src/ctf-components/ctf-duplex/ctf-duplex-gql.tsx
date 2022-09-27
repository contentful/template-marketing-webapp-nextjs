import React from 'react';

import { CtfDuplex } from './ctf-duplex';

import { useCtfDuplexQuery } from '@ctf-components/ctf-duplex/__generated/ctf-duplex.generated';

interface CtfDuplexGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfDuplexGql = ({ id, locale, preview }: CtfDuplexGqlPropsInterface) => {
  const { data, isLoading } = useCtfDuplexQuery({
    id,
    locale,
    preview,
  });

  // useDataForPreview(queryResult);

  if (isLoading || !data?.componentDuplex) {
    return null;
  }

  return <CtfDuplex {...data.componentDuplex} />;
};

export default CtfDuplexGql;
