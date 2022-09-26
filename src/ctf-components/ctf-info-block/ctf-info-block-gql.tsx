import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfInfoBlockQuery } from './__generated__/CtfInfoBlockQuery';
import CtfInfoBlock from './ctf-info-block';
import { query } from './ctf-info-block-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfInfoBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

const CtfInfoBlockGql = ({
  id,
  locale,
  preview,
  previousComponent,
}: CtfInfoBlockGqlPropsInterface) => {
  const queryResult = useQuery<CtfInfoBlockQuery>(query, {
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
    queryResult.data.componentInfoBlock === null
  ) {
    return null;
  }

  return (
    <CtfInfoBlock {...queryResult.data.componentInfoBlock} previousComponent={previousComponent} />
  );
};

export default CtfInfoBlockGql;
