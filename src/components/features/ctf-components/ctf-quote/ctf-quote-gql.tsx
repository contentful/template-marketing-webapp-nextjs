import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfQuoteQuery } from './__generated/ctf-quote.generated';
import { CtfQuote } from './ctf-quote';

interface CtfQuoteGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfQuoteGql = (props: CtfQuoteGqlPropsInterface) => {
  const { id, locale, preview } = props;

  const { isLoading, data } = useCtfQuoteQuery({
    id,
    locale,
    preview,
  });

  const componentQuote = useContentfulLiveUpdates(data?.componentQuote);

  if (isLoading || !componentQuote) {
    return null;
  }

  return <CtfQuote {...componentQuote} />;
};
