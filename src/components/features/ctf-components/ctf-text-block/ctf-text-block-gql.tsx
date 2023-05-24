import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfTextBlockQuery } from './__generated/ctf-text-block.generated';
import { CtfTextBlock } from './ctf-text-block';

interface CtfTextBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfTextBlockGql = ({ id, locale, preview }: CtfTextBlockGqlPropsInterface) => {
  const { isLoading, data } = useCtfTextBlockQuery({
    id,
    locale,
    preview,
  });

  const componentTextBlock = useContentfulLiveUpdates(data?.componentTextBlock);

  if (isLoading || !componentTextBlock) {
    return null;
  }

  return <CtfTextBlock {...componentTextBlock} />;
};
