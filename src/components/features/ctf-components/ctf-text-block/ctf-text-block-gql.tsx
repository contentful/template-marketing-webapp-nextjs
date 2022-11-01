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

  if (isLoading || !data?.componentTextBlock) {
    return null;
  }

  return <CtfTextBlock {...data.componentTextBlock} />;
};
