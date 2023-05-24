import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfInfoBlockQuery } from './__generated/ctf-info-block.generated';
import { CtfInfoBlock } from './ctf-info-block';

interface CtfInfoBlockGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

export const CtfInfoBlockGql = ({
  id,
  locale,
  preview,
  previousComponent,
}: CtfInfoBlockGqlPropsInterface) => {
  const { isLoading, data } = useCtfInfoBlockQuery({
    id,
    locale,
    preview,
  });

  const componentInfoBlock = useContentfulLiveUpdates(data?.componentInfoBlock);

  if (isLoading || !componentInfoBlock) {
    return null;
  }

  return <CtfInfoBlock {...componentInfoBlock} previousComponent={previousComponent} />;
};
