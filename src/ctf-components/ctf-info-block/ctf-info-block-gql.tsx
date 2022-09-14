import React from 'react';
import { useQuery } from 'react-apollo';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { Personalize } from '@ninetailed/experience.js-next';
import CtfInfoBlock, { CtfInfoBlockPropsInterface } from './ctf-info-block';
import { query } from './ctf-info-block-query';
import {
  CtfInfoBlockQuery,
  CtfInfoBlockQuery_componentInfoBlock,
} from './__generated__/CtfInfoBlockQuery';
import { unwrapVariants } from '../ctf-helpers';

interface CtfInfoBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

const CtfInfoBlockGql = ({
  id,
  locale,
  preview,
  previousComponent,
}: CtfInfoBlockGqlPropsInterface) => {
  const queryResult = useQuery<CtfInfoBlockQuery>(query, {
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
    queryResult.data.componentInfoBlock === null
  ) {
    return null;
  }

  let componentWithVariants =
    unwrapVariants<CtfInfoBlockQuery_componentInfoBlock>(
      queryResult.data.componentInfoBlock,
    );

  componentWithVariants = {
    ...componentWithVariants,
    variants: componentWithVariants.variants.map((variant) => ({
      ...variant,
      previousComponent,
    })),
  };
  return (
    <Personalize<CtfInfoBlockPropsInterface>
      component={CtfInfoBlock}
      {...componentWithVariants}
      previousComponent={previousComponent}
    />
  );
};

export default CtfInfoBlockGql;
