import { Container } from '@material-ui/core';
import { Personalize } from '@ninetailed/experience.js-next';
import React from 'react';
import { useQuery } from 'react-apollo';

import { unwrapVariants } from '../ctf-helpers';
import {
  CtfExternalAssetQuery,
  CtfExternalAssetQuery_wrapperExternalAsset,
} from './__generated__/CtfExternalAssetQuery';
import CtfExternalAsset, {
  CtfExternalAssetPropsInterface,
} from './ctf-external-asset';
import { query } from './ctf-external-asset-query';

import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';



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

  if (queryResult.data === undefined || queryResult.loading === true) {
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
