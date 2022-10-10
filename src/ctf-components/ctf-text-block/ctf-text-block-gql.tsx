import { CtfTextBlock } from './ctf-text-block';

import { useCtfTextBlockQuery } from '@ctf-components/ctf-text-block/__generated/ctf-text-block.generated';

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

  if (isLoading || !data?.componentTextBlock) {
    return null;
  }

  return <CtfTextBlock {...data.componentTextBlock} />;
};
