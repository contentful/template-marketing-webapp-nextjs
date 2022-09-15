import dynamic from 'next/dynamic';

const pageTopicMap = {
  TopicProduct: dynamic(async () =>
    await import('./ctf-components/ctf-product/ctf-product-gql'),
  ),
  TopicBusinessInfo: dynamic(async () =>
    await import('./ctf-components/ctf-business-info/ctf-business-info-gql'),
  ),
  ComponentProductTable: dynamic(async () =>
    await import('./ctf-components/ctf-product-table/ctf-product-table-gql'),
  ),
};

export const componentMap = {
  ComponentFeaturedCards: dynamic(async () =>
    await import('./ctf-components/ctf-featured-cards/ctf-featured-cards'),
  ),
  ComponentCta: dynamic(async () => await import('./ctf-components/ctf-cta/ctf-cta')),
  ComponentDuplex: dynamic(async () =>
    await import('./ctf-components/ctf-duplex/ctf-duplex'),
  ),
  ComponentHeroBanner: dynamic(async () =>
    await import('./ctf-components/ctf-hero-banner/ctf-hero-banner'),
  ),
  ComponentInfoBlock: dynamic(async () =>
    await import('./ctf-components/ctf-info-block/ctf-info-block'),
  ),
  ComponentQuote: dynamic(async () => await import('./ctf-components/ctf-quote/ctf-quote')),
  ComponentTextBlock: dynamic(async () =>
    await import('./ctf-components/ctf-text-block/ctf-text-block'),
  ),
  TopicPerson: dynamic(async () => await import('./ctf-components/ctf-person/ctf-person')),
  WrapperExternalAsset: dynamic(async () =>
    await import('./ctf-components/ctf-external-asset/ctf-external-asset'),
  ),
};

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentFeaturedCards: dynamic(async () =>
    await import('./ctf-components/ctf-featured-cards/ctf-featured-cards-gql'),
  ),
  ComponentCta: dynamic(async () => await import('./ctf-components/ctf-cta/ctf-cta-gql')),
  ComponentDuplex: dynamic(async () =>
    await import('./ctf-components/ctf-duplex/ctf-duplex-gql'),
  ),
  ComponentHeroBanner: dynamic(async () =>
    await import('./ctf-components/ctf-hero-banner/ctf-hero-banner-gql'),
  ),
  ComponentInfoBlock: dynamic(async () =>
    await import('./ctf-components/ctf-info-block/ctf-info-block-gql'),
  ),
  ComponentQuote: dynamic(async () =>
    await import('./ctf-components/ctf-quote/ctf-quote-gql'),
  ),
  ComponentTextBlock: dynamic(async () =>
    await import('./ctf-components/ctf-text-block/ctf-text-block-gql'),
  ),
  TopicPerson: dynamic(async () =>
    await import('./ctf-components/ctf-person/ctf-person-gql'),
  ),
  WrapperExternalAsset: dynamic(async () =>
    await import('./ctf-components/ctf-external-asset/ctf-external-asset-gql'),
  ),
  NtMergetag: dynamic(async () =>
    await import(
      './ctf-components/ctf-ninetailed-merge-tag/ctf-ninetailed-merge-tag-gql'
    ),
  ),
};
