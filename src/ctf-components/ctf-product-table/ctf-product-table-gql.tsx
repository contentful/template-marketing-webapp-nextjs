import { Container } from '@material-ui/core';
import { Personalize } from '@ninetailed/experience.js-next';
import React from 'react';
import { useQuery } from 'react-apollo';

import { unwrapVariants } from '../ctf-helpers';
import {
  CtfProductTableQuery,
  CtfProductTableQuery_componentProductTable,
} from './__generated__/CtfProductTableQuery';
import CtfProductTable, { CtfProductTablePropsInterface } from './ctf-product-table';
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
    <Personalize<CtfProductTablePropsInterface>
      component={CtfProductTable}
      {...unwrapVariants<CtfProductTableQuery_componentProductTable>(componentProductTable)}
    />
  );
};

export default CtfProductTableGql;
