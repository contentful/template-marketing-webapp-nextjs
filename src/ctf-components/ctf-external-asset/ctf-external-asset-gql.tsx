import React from 'react';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { useQuery } from 'react-apollo';
import { Personalize } from '@ninetailed/experience.js-next';
import CtfExternalAsset, {
  CtfExternalAssetPropsInterface,
} from './ctf-external-asset';
import { query } from './ctf-external-asset-query';
import {
  CtfExternalAssetQuery,
  CtfExternalAssetQuery_wrapperExternalAsset,
} from './__generated__/CtfExternalAssetQuery';
import { unwrapVariants } from '../ctf-helpers';

interface CtfExternalAssetGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfExternalAssetGql = (props: CtfExternalAssetGqlPropsInterface) => {
  const queryResult = useQuery<CtfExternalAssetQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading) {
    return null;
  }

  if (queryResult.data.wrapperExternalAsset === null) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return (
    <Personalize<CtfExternalAssetPropsInterface>
      component={CtfExternalAsset}
      {...unwrapVariants<CtfExternalAssetQuery_wrapperExternalAsset>(
        queryResult.data.wrapperExternalAsset,
      )}
    />
  );
};

export default CtfExternalAssetGql;
