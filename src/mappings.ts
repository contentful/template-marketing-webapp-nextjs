import dynamic from 'next/dynamic';

const pageTopicMap = {
  TopicProduct: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-product/ctf-product-gql').then(module => module.CtfProductGql),
  ),
  TopicBusinessInfo: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-business-info/ctf-business-info-gql').then(
      module => module.CtfBusinessInfoGql,
    ),
  ),
  ComponentProductTable: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-product-table/ctf-product-table-gql').then(
      module => module.CtfProductTableGql,
    ),
  ),
};

export const componentMap = {
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/ctf-cta').then(module => module.CtfCta),
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex').then(module => module.CtfDuplex),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner').then(module => module.CtfHeroBanner),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block').then(module => module.CtfInfoBlock),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote').then(module => module.CtfQuote),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block').then(module => module.CtfTextBlock),
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/ctf-person').then(module => module.CtfPerson),
  ),
};

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/ctf-cta-gql').then(module => module.CtfCtaGql),
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex-gql').then(module => module.CtfDuplexGql),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner-gql').then(
      module => module.CtfHeroGql,
    ),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block-gql').then(
      module => module.CtfInfoBlockGql,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote-gql').then(module => module.CtfQuoteGql),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/ctf-person-gql').then(module => module.CtfPersonGql),
  ),
  ComponentFooter: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-footer/ctf-footer-gql').then(module => module.CtfFooterGql),
  ),
};
