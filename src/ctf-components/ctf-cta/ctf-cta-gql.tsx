import React from 'react';
import { useQuery } from 'react-apollo';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { Personalize } from '@ninetailed/experience.js-next';
import CtfCta, { CtfCtaPropsInterface } from './ctf-cta';
import { query } from './ctf-cta-query';
import {
  CtfCtaQuery,
  CtfCtaQuery_componentCta,
} from './__generated__/CtfCtaQuery';
import { unwrapVariants } from '../ctf-helpers';

interface CtfCtaGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfCtaGql = ({ id, locale, preview }: CtfCtaGqlPropsInterface) => {
  const queryResult = useQuery<CtfCtaQuery>(query, {
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
    queryResult.data.componentCta === null
  ) {
    return null;
  }

  return (
    <Personalize<CtfCtaPropsInterface>
      component={CtfCta}
      {...unwrapVariants<CtfCtaQuery_componentCta>(
        queryResult.data.componentCta,
      )}
    />
  );
};

export default CtfCtaGql;
