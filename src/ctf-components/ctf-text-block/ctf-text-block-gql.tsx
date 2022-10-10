import React from 'react';

import { useCtfTextBlockQuery } from './__generated/ctf-text-block.generated';
import { CtfTextBlock } from './ctf-text-block';

interface CtfTextBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfTextBlockGql = (props: CtfTextBlockGqlPropsInterface) => {
  const { id, locale, preview } = props;

  const { isLoading, data } = useCtfTextBlockQuery({
    id,
    locale,
    preview,
  });

  if (isLoading || !data || !data?.componentTextBlock) {
    return null;
  }

  return <CtfTextBlock {...data.componentTextBlock} />;
};
