import React from 'react';
import { useQuery } from 'react-apollo';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import CtfTextBlock from './ctf-text-block';
import { query } from './ctf-text-block-query';
import { CtfTextBlockQuery } from './__generated__/CtfTextBlockQuery';

interface CtfTextBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfTextBlockGql = (props: CtfTextBlockGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const queryResult = useQuery<CtfTextBlockQuery>(query, {
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
    queryResult.data.componentTextBlock === null
  ) {
    return null;
  }

  return <CtfTextBlock {...queryResult.data.componentTextBlock} />;
};

export default CtfTextBlockGql;
