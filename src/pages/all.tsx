import { Container, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
import { useQuery } from 'react-apollo';

import CtfCategory from '@ctf-components/ctf-category/ctf-category';
import { categoryFragment } from '@ctf-components/ctf-category/ctf-category-query';
import CtfCta from '@ctf-components/ctf-cta/ctf-cta';
import { ctaFragment } from '@ctf-components/ctf-cta/ctf-cta-query';
import CtfDuplex from '@ctf-components/ctf-duplex/ctf-duplex';
import { duplexFragment } from '@ctf-components/ctf-duplex/ctf-duplex-query';
import CtfFeaturedCards from '@ctf-components/ctf-featured-cards/ctf-featured-cards';
import { featuredCardsFragment } from '@ctf-components/ctf-featured-cards/ctf-featured-cards-query';
import CtfHeroBanner from '@ctf-components/ctf-hero-banner/ctf-hero-banner';
import { heroBannerFragment } from '@ctf-components/ctf-hero-banner/ctf-hero-banner-query';
import CtfInfoBlock from '@ctf-components/ctf-info-block/ctf-info-block';
import { infoBlockFragment } from '@ctf-components/ctf-info-block/ctf-info-block-query';
import CtfPerson from '@ctf-components/ctf-person/ctf-person';
import { personFragment } from '@ctf-components/ctf-person/ctf-person-query';
import CtfPost from '@ctf-components/ctf-post/ctf-post';
import { postFragment } from '@ctf-components/ctf-post/ctf-post-query';
import CtfProductTable from '@ctf-components/ctf-product-table/ctf-product-table';
import { productTableFragment } from '@ctf-components/ctf-product-table/ctf-product-table-query';
import CtfProduct from '@ctf-components/ctf-product/ctf-product';
import { productFragment } from '@ctf-components/ctf-product/ctf-product-query';
import CtfQuote from '@ctf-components/ctf-quote/ctf-quote';
import { quoteFragment } from '@ctf-components/ctf-quote/ctf-quote-query';
import { useContentfulContext } from '@src/contentful-context';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

const postsQuery = gql`
  query AllPostsQuery($locale: String, $preview: Boolean) {
    postCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...PostFragment
      }
    }
  }
  ${postFragment}
`;
const categoriesQuery = gql`
  query AllCategoriesQuery($locale: String, $preview: Boolean) {
    categoryCollection(locale: $locale, preview: $preview, limit: 15) {
      items {
        ...CategoryFragment
      }
    }
  }
  ${categoryFragment}
`;
const ctasQuery = gql`
  query AllCtasQuery($locale: String, $preview: Boolean) {
    componentCtaCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...CtaFragment
      }
    }
  }
  ${ctaFragment}
`;
const duplexQuery = gql`
  query AllDuplexesQuery($locale: String, $preview: Boolean) {
    componentDuplexCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...DuplexFragment
      }
    }
  }
  ${duplexFragment}
`;
const featuredCardsQuery = gql`
  query AllFeaturedCardsQuery($locale: String, $preview: Boolean) {
    componentFeaturedCardsCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...FeaturedCardsFragment
      }
    }
  }
  ${featuredCardsFragment}
`;
const heroBannersQuery = gql`
  query AllHeroBannersQuery($locale: String, $preview: Boolean) {
    componentHeroBannerCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...HeroBannerFragment
      }
    }
  }
  ${heroBannerFragment}
`;
const infoBlocksQuery = gql`
  query AllInfoBlocksQuery($locale: String, $preview: Boolean) {
    componentInfoBlockCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...InfoBlockFragment
      }
    }
  }
  ${infoBlockFragment}
`;
const quotesQuery = gql`
  query AllQuotesQuery($locale: String, $preview: Boolean) {
    componentQuoteCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...QuoteFragment
      }
    }
  }
  ${quoteFragment}
`;
const personsQuery = gql`
  query AllPersonsQuery($locale: String, $preview: Boolean) {
    topicPersonCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...PersonFragment
      }
    }
  }
  ${personFragment}
`;
const productsQuery = gql`
  query AllProductsQuery($locale: String, $preview: Boolean) {
    topicProductCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...ProductFragment
      }
    }
  }
  ${productFragment}
`;

const productTablesQuery = gql`
  query AllProductTablesQuery($locale: String, $preview: Boolean) {
    componentProductTableCollection(locale: $locale, preview: $preview, limit: 10) {
      items {
        ...ProductTableFragment
      }
    }
  }
  ${productTableFragment}
`;

const entries = [
  {
    query: postsQuery,
    collectionKey: 'postCollection',
    plural: 'posts',
    Component: CtfPost,
  },
  {
    query: categoriesQuery,
    collectionKey: 'categoryCollection',
    plural: 'categories',
    Component: CtfCategory,
  },
  {
    query: ctasQuery,
    collectionKey: 'componentCtaCollection',
    plural: "cta's",
    Component: CtfCta,
  },
  {
    query: duplexQuery,
    collectionKey: 'componentDuplexCollection',
    plural: 'duplexes',
    Component: CtfDuplex,
  },
  {
    query: featuredCardsQuery,
    collectionKey: 'componentFeaturedCardsCollection',
    plural: 'featured cards',
    Component: CtfFeaturedCards,
  },
  {
    query: heroBannersQuery,
    collectionKey: 'componentHeroBannerCollection',
    plural: 'hero banners',
    Component: CtfHeroBanner,
  },
  {
    query: infoBlocksQuery,
    collectionKey: 'componentInfoBlockCollection',
    plural: 'info blocks',
    Component: CtfInfoBlock,
  },
  {
    query: productTablesQuery,
    collectionKey: 'componentProductTableCollection',
    plural: 'product comparison tables',
    Component: CtfProductTable,
  },
  {
    query: personsQuery,
    collectionKey: 'topicPersonCollection',
    plural: 'persons',
    Component: CtfPerson,
  },
  {
    query: productsQuery,
    collectionKey: 'topicProductCollection',
    plural: 'products',
    Component: CtfProduct,
  },
  {
    query: quotesQuery,
    collectionKey: 'componentQuoteCollection',
    plural: 'quotes',
    Component: CtfQuote,
  },
];

const RenderEntry = ({ locale, previewActive, query, collectionKey, plural, Component }) => {
  const queryResult = useQuery(query, {
    variables: { locale, preview: previewActive },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading === true) {
    return null;
  }

  if (
    queryResult.data[collectionKey] === null ||
    queryResult.data[collectionKey].items.length === 0
  ) {
    return (
      <Container>
        <p>No {plural} found...</p>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Typography
          variant="h2"
          style={{
            marginTop: '10rem',
            marginBottom: '4rem',
            color: '#fff',
            backgroundColor: '#427ecf',
            padding: '1rem',
          }}
        >
          {plural}:
        </Typography>
      </Container>
      {queryResult.data[collectionKey].items.map(
        (entry, i) =>
          entry && (
            <div key={entry.sys.id}>
              <Component {...entry} />
              {i !== queryResult.data[collectionKey].items.length - 1 && (
                <div
                  style={{
                    marginBottom: '3rem',
                    marginTop: '3rem',
                    borderBottom: '1px dashed #427ecf',
                  }}
                />
              )}
            </div>
          ),
      )}
    </>
  );
};

const AllPage: NextPage = () => {
  const { previewActive } = useContentfulContext();
  const { locale } = useContentfulContext();

  if (typeof window === 'undefined') {
    return null;
  }

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <LayoutContext.Provider value={layoutConfig}>
      <div style={{ marginTop: '12rem' }}>
        {entries.map(entry => {
          return (
            <RenderEntry
              key={entry.collectionKey}
              {...entry}
              locale={locale}
              previewActive={previewActive}
            />
          );
        })}
      </div>
    </LayoutContext.Provider>
  );
};

const AllPageWithProviders = withProviders()(AllPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: AllPageWithProviders,
});

export default AllPageWithProviders;
