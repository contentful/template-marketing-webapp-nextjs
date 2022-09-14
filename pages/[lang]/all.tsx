import React, { useContext } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { Container, Typography } from '@material-ui/core';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { ContentfulContext } from '@pages/_app';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { categoryFragment } from '@ctf-components/ctf-category/ctf-category-query';
import CtfCategory from '@ctf-components/ctf-category/ctf-category';
import { postFragment } from '@ctf-components/ctf-post/ctf-post-query';
import CtfPost from '@ctf-components/ctf-post/ctf-post';
import { personFragment } from '@ctf-components/ctf-person/ctf-person-query';
import CtfPerson from '@ctf-components/ctf-person/ctf-person';
import { ctaFragment } from '@ctf-components/ctf-cta/ctf-cta-query';
import CtfCta from '@ctf-components/ctf-cta/ctf-cta';
import { duplexFragment } from '@ctf-components/ctf-duplex/ctf-duplex-query';
import CtfDuplex from '@ctf-components/ctf-duplex/ctf-duplex';
import { featuredCardsFragment } from '@ctf-components/ctf-featured-cards/ctf-featured-cards-query';
import CtfFeaturedCards from '@ctf-components/ctf-featured-cards/ctf-featured-cards';
import { heroBannerFragment } from '@ctf-components/ctf-hero-banner/ctf-hero-banner-query';
import CtfHeroBanner from '@ctf-components/ctf-hero-banner/ctf-hero-banner';
import { infoBlockFragment } from '@ctf-components/ctf-info-block/ctf-info-block-query';
import CtfInfoBlock from '@ctf-components/ctf-info-block/ctf-info-block';
import { quoteFragment } from '@ctf-components/ctf-quote/ctf-quote-query';
import CtfQuote from '@ctf-components/ctf-quote/ctf-quote';
import { productTableFragment } from '@src/ctf-components/ctf-product-table/ctf-product-table-query';
import CtfProductTable from '@src/ctf-components/ctf-product-table/ctf-product-table';
import { productFragment } from '@ctf-components/ctf-product/ctf-product-query';
import CtfProduct from '@ctf-components/ctf-product/ctf-product';
import { externalAssetFragment } from '@ctf-components/ctf-external-asset/ctf-external-asset-query';
import CtfExternalAsset from '@ctf-components/ctf-external-asset/ctf-external-asset';
import withProviders, {
  generateGetServerSideProps,
} from '@src/lib/with-providers';

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
    componentFeaturedCardsCollection(
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...FeaturedCardsFragment
      }
    }
  }
  ${featuredCardsFragment}
`;
const heroBannersQuery = gql`
  query AllHeroBannersQuery($locale: String, $preview: Boolean) {
    componentHeroBannerCollection(
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...HeroBannerFragment
      }
    }
  }
  ${heroBannerFragment}
`;
const infoBlocksQuery = gql`
  query AllInfoBlocksQuery($locale: String, $preview: Boolean) {
    componentInfoBlockCollection(
      locale: $locale
      preview: $preview
      limit: 10
    ) {
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
const externalAssetsQuery = gql`
  query AllExternalAssetsQuery($locale: String, $preview: Boolean) {
    wrapperExternalAssetCollection(
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...ExternalAssetFragment
      }
    }
  }
  ${externalAssetFragment}
`;
const productTablesQuery = gql`
  query AllProductTablesQuery($locale: String, $preview: Boolean) {
    componentProductTableCollection(
      locale: $locale
      preview: $preview
      limit: 10
    ) {
      items {
        ...ProductTableFragment
      }
    }
  }
  ${productTableFragment}
`;

const renderAllEntries = ({
  locale,
  previewActive,
  query,
  collectionKey,
  plural,
  Component,
}) => {
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
  if (typeof window === 'undefined') {
    return null;
  }

  const { locale, previewActive } = useContext(ContentfulContext);

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <LayoutContext.Provider value={layoutConfig}>
      <div style={{ marginTop: '12rem' }}>
        {renderAllEntries({
          locale,
          previewActive,
          query: postsQuery,
          collectionKey: 'postCollection',
          plural: 'posts',
          Component: CtfPost,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: categoriesQuery,
          collectionKey: 'categoryCollection',
          plural: 'categories',
          Component: CtfCategory,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: ctasQuery,
          collectionKey: 'componentCtaCollection',
          plural: "cta's",
          Component: CtfCta,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: duplexQuery,
          collectionKey: 'componentDuplexCollection',
          plural: 'duplexes',
          Component: CtfDuplex,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: externalAssetsQuery,
          collectionKey: 'wrapperExternalAssetCollection',
          plural: 'external assets',
          Component: CtfExternalAsset,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: featuredCardsQuery,
          collectionKey: 'componentFeaturedCardsCollection',
          plural: 'featured cards',
          Component: CtfFeaturedCards,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: heroBannersQuery,
          collectionKey: 'componentHeroBannerCollection',
          plural: 'hero banners',
          Component: CtfHeroBanner,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: infoBlocksQuery,
          collectionKey: 'componentInfoBlockCollection',
          plural: 'info blocks',
          Component: CtfInfoBlock,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: productTablesQuery,
          collectionKey: 'componentProductTableCollection',
          plural: 'product comparison tables',
          Component: CtfProductTable,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: personsQuery,
          collectionKey: 'topicPersonCollection',
          plural: 'persons',
          Component: CtfPerson,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: productsQuery,
          collectionKey: 'topicProductCollection',
          plural: 'products',
          Component: CtfProduct,
        })}
        {renderAllEntries({
          locale,
          previewActive,
          query: quotesQuery,
          collectionKey: 'componentQuoteCollection',
          plural: 'quotes',
          Component: CtfQuote,
        })}
      </div>
    </LayoutContext.Provider>
  );
};

const AllPageWithProviders = withProviders()(AllPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps(
  {
    Page: AllPageWithProviders,
  },
);

export default AllPageWithProviders;
