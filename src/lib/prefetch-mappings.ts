import { useCtfDuplexQuery } from '@src/components/features/ctf-components/ctf-duplex/__generated/ctf-duplex.generated';
import { useCtfHeroBannerQuery } from '@src/components/features/ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated';
import { useCtfQuoteQuery } from '@src/components/features/ctf-components/ctf-quote/__generated/ctf-quote.generated';

/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */
export const prefetchMap = {
  ComponentHeroBanner: useCtfHeroBannerQuery,
  ComponentDuplex: useCtfDuplexQuery,
  ComponentQuote: useCtfQuoteQuery,
};
