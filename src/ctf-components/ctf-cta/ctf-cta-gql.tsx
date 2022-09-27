import React from 'react';

import { CtfCta } from './ctf-cta';

import { useCtfCtaQuery } from '@ctf-components/ctf-cta/__generated/ctf-cta.generated';

interface CtfCtaGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfCtaGql = ({ id, locale, preview }: CtfCtaGqlPropsInterface) => {
  const { data, isLoading } = useCtfCtaQuery({
    id,
    locale,
    preview,
  });

  // useDataForPreview(queryResult);

  if (isLoading || !data?.componentCta) {
    return null;
  }

  return <CtfCta {...data.componentCta} />;
};

export default CtfCtaGql;
