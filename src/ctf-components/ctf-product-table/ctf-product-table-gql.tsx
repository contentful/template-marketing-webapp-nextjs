import { Container } from '@mui/material';

import { useCtfProductTableQuery } from './__generated/ctf-product-table.generated';
import { CtfProductTable } from './ctf-product-table';

import EntryNotFound from '@src/components/errors/entry-not-found';

interface CtfProductTableGqlPropsInterface {
  id: string;
  locale: string;
  preview?: boolean;
}

export const CtfProductTableGql = (props: CtfProductTableGqlPropsInterface) => {
  const { isLoading, data } = useCtfProductTableQuery({
    ...props,
  });

  if (isLoading || !data?.componentProductTable) {
    return null;
  }

  if (!data.componentProductTable) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const { componentProductTable } = data;

  return <CtfProductTable {...componentProductTable} />;
};
