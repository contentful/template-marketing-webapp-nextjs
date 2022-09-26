import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfQuoteQuery } from './__generated__/CtfQuoteQuery';
import CtfQuote from './ctf-quote';
import { query } from './ctf-quote-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfQuoteGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfQuoteGql = (props: CtfQuoteGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const queryResult = useQuery<CtfQuoteQuery>(query, {
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
    queryResult.data.componentQuote === null
  ) {
    return null;
  }

  return <CtfQuote {...queryResult.data.componentQuote} />;
};

export default CtfQuoteGql;
