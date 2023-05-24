import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Container } from '@mui/material';

import { useCtfProductTableQuery } from './__generated/ctf-product-table.generated';
import { CtfProductTable } from './ctf-product-table';

import { EntryNotFound } from '@src/components/features/errors/entry-not-found';

interface CtfProductTableGqlPropsInterface {
  id: string;
  locale: string;
  preview?: boolean;
}

export const CtfProductTableGql = (props: CtfProductTableGqlPropsInterface) => {
  const { isLoading, data } = useCtfProductTableQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  const componentProductTable = useContentfulLiveUpdates(data?.componentProductTable);

  if (isLoading || !componentProductTable) {
    return null;
  }

  if (!componentProductTable) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return <CtfProductTable {...componentProductTable} />;
};
