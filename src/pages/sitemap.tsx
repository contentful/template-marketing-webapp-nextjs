import { Container, makeStyles } from '@material-ui/core';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import CtfSectionHeadline from '@ctf-components/ctf-section-headline/ctf-section-headline';
import PageContainer from '@src/components/layout/page-container';
import CategoryLink from '@src/components/link/category-link';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
import { useContentfulContext } from '@src/contentful-context';
import { useSitemapQuery } from '@src/lib/shared-fragments/__generated/ctf-sitemap.generated';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';
import contentfulConfig from 'contentful.config';

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

const SitemapPage: NextPage = () => {
  const { locale } = useContentfulContext();
  const { appUrl, previewActive } = useContentfulContext();

  const { isLoading, data } = useSitemapQuery({
    locale,
    preview: previewActive,
  });

  const classes = useStyles();

  if (isLoading || !data) {
    return null;
  }

  const pages = data.pageCollection?.items
    .filter(page => page !== null && page.slug !== null)
    .map(page => (page!.slug === 'home' ? ({ ...page, slug: '' } as typeof page) : page))
    .sort((a, b) => {
      return a!.slug!.localeCompare(b!.slug!);
    });

  const posts = data.postCollection?.items
    .filter(post => post !== null && post.slug !== null)
    .sort((a, b) => {
      return a!.slug!.localeCompare(b!.slug!);
    });

  const categories = data.categoryCollection?.items
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
              pages.map(
                page =>
                  page && (
                    <li key={page.slug}>
                      <PageLink
                        page={page}
                        render={pathname =>
                          pathname && (
                            <>
                              <strong>{`${appUrl}/${pathname.replace(/^\//, '')}`}</strong>
                              {`  - [${page.pageName}]`}
                            </>
                          )
                        }
                      />
                    </li>
                  ),
              )}
          </ul>
          <ul className={classes.pageList}>
            {posts &&
              posts.map(
                post =>
                  post && (
                    <li key={post.slug}>
                      <PostLink
                        post={post}
                        render={pathname =>
                          pathname && (
                            <>
                              <strong>{`${appUrl}/${pathname.replace(/^\//, '')}`}</strong>
                              {`  - [${post.postName}]`}
                            </>
                          )
                        }
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
                    <li key={category.slug}>
                      <CategoryLink
                        category={category}
                        render={pathname =>
                          pathname && (
                            <>
                              <strong>{`${appUrl}/${pathname.replace(/^\//, '')}`}</strong>
                              {`  - [${category.categoryName}]`}
                            </>
                          )
                        }
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
