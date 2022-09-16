import { Personalize } from '@ninetailed/experience.js-next';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import React from 'react';
import { useQuery } from 'react-apollo';
import { unwrapVariants } from '../ctf-helpers';
import CtfHeroBanner from './ctf-hero-banner';
import { query } from './ctf-hero-banner-query';
import {
  CtfHeroBannerQuery,
  CtfHeroBannerQuery_componentHeroBanner
} from './__generated__/CtfHeroBannerQuery';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfHeroGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const queryResult = useQuery<CtfHeroBannerQuery>(query, {
    variables: {
      id,
      locale,
      preview,
    },
  });

  useDataForPreview(queryResult);

  const { loading, data } = queryResult;

  if (!data || loading) return null;

  return (
    <Personalize
      component={CtfHeroBanner}
      {...unwrapVariants<CtfHeroBannerQuery_componentHeroBanner>(
        data.componentHeroBanner!,
      )}
    />
  );
};

export default CtfHeroGql;
