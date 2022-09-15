import React from 'react';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { useQuery } from 'react-apollo';
import { Personalize } from '@ninetailed/experience.js-next';
import CtfProductTable, {
  CtfProductTablePropsInterface,
} from './ctf-product-table';
import { query } from './ctf-product-table-query';
import {
  CtfProductTableQuery,
  CtfProductTableQuery_componentProductTable,
} from './__generated__/CtfProductTableQuery';

import { unwrapVariants } from '../ctf-helpers';

interface CtfProductTableGqlPropsInterface {
  id: string;
  locale?: string;
  preview?: boolean;
}

const CtfProductTableGql = (props: CtfProductTableGqlPropsInterface) => {
  const queryResult = useQuery<CtfProductTableQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading) {
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
    <Personalize<CtfProductTablePropsInterface>
      component={CtfProductTable}
      {...unwrapVariants<CtfProductTableQuery_componentProductTable>(
        componentProductTable,
      )}
    />
  );
};

export default CtfProductTableGql;
