import React from 'react';
import { useQuery } from 'react-apollo';

import {
  CtfDuplexQuery,
} from './__generated__/CtfDuplexQuery';
import CtfDuplex from './ctf-duplex';
import { query } from './ctf-duplex-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfDuplexGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfDuplexGql = ({ id, locale, preview }: CtfDuplexGqlPropsInterface) => {
  const queryResult = useQuery<CtfDuplexQuery>(query, {
    variables: {
      id,
      locale,
      preview,
    },
  });

  useDataForPreview(queryResult);

  if (
    queryResult.data === undefined ||
    queryResult.loading === true ||
    queryResult.data.componentDuplex === null
  ) {
    return null;
  }

  return (
    <CtfDuplex {...queryResult.data.componentDuplex} />
  );
};

export default CtfDuplexGql;
