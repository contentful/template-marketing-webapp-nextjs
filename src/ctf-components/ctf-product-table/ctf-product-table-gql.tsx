import { Container } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-apollo';

import {
  CtfProductTableQuery,

} from './__generated__/CtfProductTableQuery';
import CtfProductTable from './ctf-product-table';
import { query } from './ctf-product-table-query';

import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfProductTableGqlPropsInterface {
  id: string;
  preview?: boolean;
}

const CtfProductTableGql = (props: CtfProductTableGqlPropsInterface) => {
  const queryResult = useQuery<CtfProductTableQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading === true) {
    return null;
  }

  if (queryResult.data.componentProductTable === null) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const { componentProductTable } = queryResult.data;

  return (
    <CtfProductTable
      {...componentProductTable}
    />
  );
};

export default CtfProductTableGql;
