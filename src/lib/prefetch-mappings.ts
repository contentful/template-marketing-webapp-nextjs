import {
  CtfBusinessInfoQuery,
  useCtfBusinessInfoQuery,
} from "@src/components/features/ctf-components/ctf-business-info/__generated/business-info.generated"
import {useCtfCtaQuery} from "@src/components/features/ctf-components/ctf-cta/__generated/ctf-cta.generated"
import {useCtfDuplexQuery} from "@src/components/features/ctf-components/ctf-duplex/__generated/ctf-duplex.generated"
import {useCtfHeroBannerQuery} from "@src/components/features/ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated"
import {useCtfHeroCarouselQuery} from "@src/components/features/ctf-components/ctf-hero-carousel/__generated/ctf-hero-carousel.generated"
import {useCtfInfoBlockQuery} from "@src/components/features/ctf-components/ctf-info-block/__generated/ctf-info-block.generated"
import {
  CtfPersonQuery,
  useCtfPersonQuery,
} from "@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated"
import {
  CtfProductQuery,
  useCtfProductQuery,
} from "@src/components/features/ctf-components/ctf-product/__generated/ctf-product.generated"
import {useCtfProductTableQuery} from "@src/components/features/ctf-components/ctf-product-table/__generated/ctf-product-table.generated"
import {useCtfQuoteQuery} from "@src/components/features/ctf-components/ctf-quote/__generated/ctf-quote.generated"
import {useCtfTextBlockQuery} from "@src/components/features/ctf-components/ctf-text-block/__generated/ctf-text-block.generated"

export type PrefetchMappingTypeFetcher = CtfBusinessInfoQuery | CtfPersonQuery | CtfProductQuery

/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */
export const prefetchMap = {
  ComponentCta: useCtfCtaQuery,
  ComponentHeroBanner: useCtfHeroBannerQuery,
  ComponentHeroCarousel: useCtfHeroCarouselQuery,
  ComponentDuplex: useCtfDuplexQuery,
  ComponentInfoBlock: useCtfInfoBlockQuery,
  ComponentTextBlock: useCtfTextBlockQuery,
  ComponentQuote: useCtfQuoteQuery,
  ComponentProductTable: useCtfProductTableQuery,
  TopicBusinessInfo: useCtfBusinessInfoQuery,
  TopicProduct: useCtfProductQuery,
  TopicPerson: useCtfPersonQuery,
}
