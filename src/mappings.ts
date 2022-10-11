import dynamic from 'next/dynamic';

const pageTopicMap = {
  TopicProduct: dynamic(() =>
    import('./ctf-components/ctf-product/ctf-product-gql').then(module => module.CtfProductGql),
  ),
  TopicBusinessInfo: dynamic(() =>
    import('./ctf-components/ctf-business-info/ctf-business-info-gql').then(
      module => module.CtfBusinessInfoGql,
    ),
  ),
  ComponentProductTable: dynamic(() =>
    import('./ctf-components/ctf-product-table/ctf-product-table-gql').then(
      module => module.CtfProductTableGql,
    ),
  ),
};

export const componentMap = {
  ComponentFeaturedCards: dynamic(() =>
    import('./ctf-components/ctf-featured-cards/ctf-featured-cards').then(
      module => module.CtfFeaturedCards,
    ),
  ),
  ComponentCta: dynamic(() =>
    import('./ctf-components/ctf-cta/ctf-cta').then(module => module.CtfCta),
  ),
  ComponentDuplex: dynamic(() =>
    import('./ctf-components/ctf-duplex/ctf-duplex').then(module => module.CtfDuplex),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('./ctf-components/ctf-hero-banner/ctf-hero-banner').then(module => module.CtfHeroBanner),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('./ctf-components/ctf-info-block/ctf-info-block').then(module => module.CtfInfoBlock),
  ),
  ComponentQuote: dynamic(() =>
    import('./ctf-components/ctf-quote/ctf-quote').then(module => module.CtfQuote),
  ),
  ComponentTextBlock: dynamic(() =>
    import('./ctf-components/ctf-text-block/ctf-text-block').then(module => module.CtfTextBlock),
  ),
  TopicPerson: dynamic(() => import('./ctf-components/ctf-person/ctf-person')),
};

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentFeaturedCards: dynamic(() =>
    import('./ctf-components/ctf-featured-cards/ctf-featured-cards-gql').then(
      module => module.CtfFeaturedCardsGql,
    ),
  ),
  ComponentCta: dynamic(() => import('./ctf-components/ctf-cta/ctf-cta-gql')),
  ComponentDuplex: dynamic(() => import('./ctf-components/ctf-duplex/ctf-duplex-gql')),
  ComponentHeroBanner: dynamic(
    () => import('./ctf-components/ctf-hero-banner/ctf-hero-banner-gql'),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('./ctf-components/ctf-info-block/ctf-info-block-gql').then(
      module => module.CtfInfoBlockGql,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('./ctf-components/ctf-quote/ctf-quote-gql').then(module => module.CtfQuoteGql),
  ),
  ComponentTextBlock: dynamic(() =>
    import('./ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
  TopicPerson: dynamic(() =>
    import('./ctf-components/ctf-person/ctf-person-gql').then(module => module.CtfPersonGql),
  ),
  ComponentFooter: dynamic(() =>
    import('./ctf-components/ctf-footer/ctf-footer-gql').then(module => module.CtfFooterGql),
  ),
};
