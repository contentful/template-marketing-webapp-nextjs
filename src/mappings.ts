import dynamic from 'next/dynamic';

const pageTopicMap = {
  TopicProduct: dynamic(() =>
    import('./ctf-components/ctf-product/ctf-product-gql'),
  ),
  TopicBusinessInfo: dynamic(() =>
    import('./ctf-components/ctf-business-info/ctf-business-info-gql'),
  ),
  ComponentProductTable: dynamic(() =>
    import('./ctf-components/ctf-product-table/ctf-product-table-gql'),
  ),
};

export const componentMap = {
  ComponentFeaturedCards: dynamic(() =>
    import('./ctf-components/ctf-featured-cards/ctf-featured-cards'),
  ),
  ComponentCta: dynamic(() => import('./ctf-components/ctf-cta/ctf-cta')),
  ComponentDuplex: dynamic(() =>
    import('./ctf-components/ctf-duplex/ctf-duplex'),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('./ctf-components/ctf-hero-banner/ctf-hero-banner'),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('./ctf-components/ctf-info-block/ctf-info-block'),
  ),
  ComponentQuote: dynamic(() => import('./ctf-components/ctf-quote/ctf-quote')),
  ComponentTextBlock: dynamic(() =>
    import('./ctf-components/ctf-text-block/ctf-text-block'),
  ),
  TopicPerson: dynamic(() => import('./ctf-components/ctf-person/ctf-person')),
  WrapperExternalAsset: dynamic(() =>
    import('./ctf-components/ctf-external-asset/ctf-external-asset'),
  ),
};

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentFeaturedCards: dynamic(() =>
    import('./ctf-components/ctf-featured-cards/ctf-featured-cards-gql'),
  ),
  ComponentCta: dynamic(() => import('./ctf-components/ctf-cta/ctf-cta-gql')),
  ComponentDuplex: dynamic(() =>
    import('./ctf-components/ctf-duplex/ctf-duplex-gql'),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('./ctf-components/ctf-hero-banner/ctf-hero-banner-gql'),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('./ctf-components/ctf-info-block/ctf-info-block-gql'),
  ),
  ComponentQuote: dynamic(() =>
    import('./ctf-components/ctf-quote/ctf-quote-gql'),
  ),
  ComponentTextBlock: dynamic(() =>
    import('./ctf-components/ctf-text-block/ctf-text-block-gql'),
  ),
  TopicPerson: dynamic(() =>
    import('./ctf-components/ctf-person/ctf-person-gql'),
  ),
  WrapperExternalAsset: dynamic(() =>
    import('./ctf-components/ctf-external-asset/ctf-external-asset-gql'),
  ),
};
