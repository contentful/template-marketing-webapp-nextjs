import React from 'react';
import { useQuery } from 'react-apollo';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { Personalize } from '@ninetailed/experience.js-next';
import CtfDuplex, { CtfDuplexPropsInterface } from './ctf-duplex';
import { query } from './ctf-duplex-query';
import {
  CtfDuplexQuery,
  CtfDuplexQuery_componentDuplex,
} from './__generated__/CtfDuplexQuery';
import { unwrapVariants } from '../ctf-helpers';

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
    queryResult.loading ||
    queryResult.data.componentDuplex === null
  ) {
    return null;
  }

  return (
    <Personalize<CtfDuplexPropsInterface>
      component={CtfDuplex}
      {...unwrapVariants<CtfDuplexQuery_componentDuplex>(
        queryResult.data.componentDuplex,
      )}
    />
  );
};

export default CtfDuplexGql;
