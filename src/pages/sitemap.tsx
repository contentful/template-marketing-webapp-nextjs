import { Container, makeStyles } from '@material-ui/core';
import gql from 'graphql-tag';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-apollo';

import { contentfulConfig } from '../../contentful.config.mjs';
import { SitemapQuery } from './__generated__/SitemapQuery';

import CtfSectionHeadline from '@ctf-components/ctf-section-headline/ctf-section-headline';
import PageContainer from '@src/components/layout/page-container';
import CategoryLink from '@src/components/link/category-link';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
import { useContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

const useStyles = makeStyles(theme => ({
  sitemapRoot: {
    padding: theme.spacing(6, 0, 25, 0),
  },

  pageList: {
    paddingLeft: theme.spacing(6),
    '& li': {
      lineHeight: '3rem',
      '& > a': {
        color: theme.palette.grey[900],
        '&:hover': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

const query = gql`
  query SitemapQuery($locale: String, $preview: Boolean) {
    pageCollection(locale: $locale, preview: $preview) {
      items {
        pageName
        slug
        sys {
          id
        }
        pageContent(locale: $locale, preview: $preview) {
          ... on Entry {
            __typename
            sys {
              id
            }
          }
        }
      }
    }
    postCollection(locale: $locale, preview: $preview) {
      items {
        postName
        slug
        sys {
          id
        }
      }
    }
    categoryCollection(locale: $locale, preview: $preview) {
      items {
        categoryName
        slug
        sys {
          id
        }
      }
    }
  }
`;

const SitemapPage: NextPage = () => {
  const { locale } = useContentfulContext();

  const { appUrl, previewActive } = useContentfulContext();
  const queryResult = useQuery<SitemapQuery>(query, {
    variables: {
      locale,
      preview: previewActive,
    },
  });

  const classes = useStyles();

  useDataForPreview(queryResult);

  if (queryResult.loading || !queryResult.data) {
    return null;
  }

  const pages =
    queryResult.data.pageCollection === null
      ? null
      : queryResult.data.pageCollection.items
          .filter(page => page !== null && page.slug !== null)
          .map(page => (page!.slug === 'home' ? ({ ...page, slug: '' } as typeof page) : page))
          .sort((a, b) => {
            return a!.slug!.localeCompare(b!.slug!);
          });

  const posts =
    queryResult.data.postCollection === null
      ? null
      : queryResult.data.postCollection.items
          .filter(post => post !== null && post.slug !== null)
          .sort((a, b) => {
            return a!.slug!.localeCompare(b!.slug!);
          });

  const categories =
    queryResult.data.categoryCollection === null
      ? null
      : queryResult.data.categoryCollection.items
          .filter(category => category !== null && category.slug !== null)
          .sort((a, b) => {
            return a!.slug!.localeCompare(b!.slug!);
          });

  return (
    <>
      <Head>
        <title key="title">Sitemap</title>
        <meta key="og:title" property="og:title" content="Sitemap" />
        <meta key="description" name="description" content={contentfulConfig.meta.description} />
        <meta
          key="og:description"
          property="og:description"
          content={contentfulConfig.meta.description}
        />
        <meta
          key="og:url"
          property="og:url"
          content={`${contentfulConfig.meta.url}/${locale}/sitemap`}
        />
        <meta key="og:locale" property="og:locale" content={locale.replace('-', '_')} />
      </Head>
      <PageContainer className={classes.sitemapRoot}>
        <Container>
          <CtfSectionHeadline sectionHeadline="Sitemap" />
          <ul className={classes.pageList}>
            {pages &&
              pages.map(page => (
                <li key={page!.slug!}>
                  <PageLink
                    page={page!}
                    render={pathname => (
                      <>
                        <strong>{`${appUrl}/${pathname!.replace(/^\//, '')}`}</strong>
                        {`  - [${page!.pageName}]`}
                      </>
                    )}
                  />
                </li>
              ))}
          </ul>
          <ul className={classes.pageList}>
            {posts &&
              posts.map(
                post =>
                  post && (
                    <li key={post.slug!}>
                      <PostLink
                        post={post}
                        render={pathname => (
                          <>
                            <strong>{`${appUrl}/${pathname!.replace(/^\//, '')}`}</strong>
                            {`  - [${post.postName}]`}
                          </>
                        )}
                      />
                    </li>
                  ),
              )}
          </ul>
          <ul className={classes.pageList}>
            {categories &&
              categories.map(
                category =>
                  category && (
                    <li key={category.slug!}>
                      <CategoryLink
                        category={category}
                        render={pathname => (
                          <>
                            <strong>{`${appUrl}/${pathname!.replace(/^\//, '')}`}</strong>
                            {`  - [${category.categoryName}]`}
                          </>
                        )}
                      />
                    </li>
                  ),
              )}
          </ul>
        </Container>
      </PageContainer>
    </>
  );
};

const SitemapPageWithProviders = withProviders()(SitemapPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: SitemapPageWithProviders,
});

export default SitemapPageWithProviders;
