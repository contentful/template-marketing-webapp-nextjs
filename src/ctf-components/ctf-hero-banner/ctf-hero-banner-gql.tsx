import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfHeroBannerQuery } from './__generated__/CtfHeroBannerQuery';
import CtfHeroBanner from './ctf-hero-banner';
import { query } from './ctf-hero-banner-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

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

  return <CtfHeroBanner {...data.componentHeroBanner!} />;
};

export default CtfHeroGql;
