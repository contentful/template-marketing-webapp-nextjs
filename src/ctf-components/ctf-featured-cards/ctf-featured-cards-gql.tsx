import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfFeaturedCardsQuery } from './__generated__/CtfFeaturedCardsQuery';
import CtfFeaturedCards from './ctf-featured-cards';
import { query } from './ctf-featured-cards-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfFeaturedCardsGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfFeaturedCardsGql = ({ id, locale, preview }: CtfFeaturedCardsGqlPropsInterface) => {
  const queryResult = useQuery<CtfFeaturedCardsQuery>(query, {
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
    queryResult.data.componentFeaturedCards === null
  ) {
    return null;
  }

  return <CtfFeaturedCards {...queryResult.data.componentFeaturedCards} />;
};

export default CtfFeaturedCardsGql;
