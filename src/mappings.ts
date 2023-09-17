import dynamic from 'next/dynamic';

const pageTopicMap = {
  TopicProduct: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-product/ctf-product-gql').then(
      module => module.CtfProductGql,
    ),
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
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex').then(
      module => module.CtfDuplex,
    ),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner').then(
      module => module.CtfHeroBanner,
    ),
  ),
  WhyAmBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-am-why-am/ctf-am-why-am').then(
      module => module.CtfAmWhyAm,
    ),
  ),
  AmHero: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-am-hero/ctf-am-hero').then(
      module => module.AmHero,
    ),
  ),
  AmCtaFeatureBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-cta-feature-block/ctf-cta-feature-block'
    ).then(module => module.CtaFeatureBlock),
  ),
  AmFeaturedMediaBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-featured-media-block/ctf-featured-media-block'
    ).then(module => module.FeaturedMediaBlock),
  ),
  AmFeaturedInsights: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-featured-insights/ctf-featured-insights'
    ).then(module => module.FeaturedInsights),
  ),
  AmTestimonial: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-testimonial/ctf-testimonial').then(
      module => module.Testimonial,
    ),
  ),
  AmTestimonialsBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-testimonials-block/ctf-testimonials-block'
    ).then(module => module.TestimonialsBlock),
  ),
  AmValueProp: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-value-prop/ctf-value-prop').then(
      module => module.ValueProp,
    ),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block').then(
      module => module.CtfInfoBlock,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote').then(
      module => module.CtfQuote,
    ),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block').then(
      module => module.CtfTextBlock,
    ),
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/ctf-person').then(
      module => module.CtfPerson,
    ),
  ),
};

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/ctf-cta-gql').then(
      module => module.CtfCtaGql,
    ),
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex-gql').then(
      module => module.CtfDuplexGql,
    ),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner-gql').then(
      module => module.CtfHeroGql,
    ),
  ),
  WhyAmBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-am-why-am/ctf-am-why-am-gql').then(
      module => module.CtfAmWhyAmGql,
    ),
  ),
  AmHero: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-am-hero/ctf-am-hero-gql').then(
      module => module.CtfAmHeroGql,
    ),
  ),
  AmCtaFeatureBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-cta-feature-block/ctf-cta-feature-block-gql'
    ).then(module => module.CtfCtaFeatureBlockGql),
  ),
  AmFeaturedMediaBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-featured-media-block/ctf-featured-media-block-gql'
    ).then(module => module.CtfFeaturedMediaBlockGql),
  ),
  AmFeaturedInsights: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-featured-insights/ctf-featured-insights-gql'
    ).then(module => module.CtfFeaturedInsightsGql),
  ),
  AmTestimonial: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-testimonial/ctf-testimonial-gql').then(
      module => module.CtfTestimonialGql,
    ),
  ),
  AmTestimonialsBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-testimonials-block/ctf-testimonials-block-gql'
    ).then(module => module.CtfTestimonialsBlockGql),
  ),
  AmValueProp: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-value-prop/ctf-value-prop-gql').then(
      module => module.CtfValuePropGql,
    ),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block-gql').then(
      module => module.CtfInfoBlockGql,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote-gql').then(
      module => module.CtfQuoteGql,
    ),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/ctf-person-gql').then(
      module => module.CtfPersonGql,
    ),
  ),
  ComponentFooter: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-footer/ctf-footer-gql').then(
      module => module.CtfFooterGql,
    ),
  ),
};
