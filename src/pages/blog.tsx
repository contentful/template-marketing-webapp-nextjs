import { Container, Typography, makeStyles, Theme } from '@material-ui/core';
import gql from 'graphql-tag';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo';

import { contentfulConfig } from '../../contentful.config.mjs';
import { CtfBlogQuery } from './__generated__/CtfBlogQuery';

import CategoriesMenu from '@ctf-components/ctf-categories-menu/ctf-categories-menu';
import { postFragmentBase } from '@ctf-components/ctf-post/ctf-post-query';
import CardPostExtended from '@src/components/card-post-extended/card-post-extended';
import EntryNotFound from '@src/components/errors/entry-not-found';
import CategoryContainer from '@src/components/layout/category-container';
import { ContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(18),
    paddingTop: theme.spacing(18),
  },
  titleContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
    },
  },
  title: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
      marginRight: theme.spacing(6),
    },
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126.2rem',
  },
  containerNarrow: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '77rem',
  },
  postWrap: {
    '& + &': {
      marginTop: theme.spacing(20),
    },
  },
}));

const query = gql`
  query CtfBlogQuery($locale: String, $preview: Boolean) {
    postCollection(locale: $locale, preview: $preview, limit: 10, order: publishedDate_DESC) {
      items {
        ...PostFragmentBase
      }
    }
  }
  ${postFragmentBase}
`;

const BlogPage: NextPage = () => {
  const { locale } = useRouter();
  const { previewActive } = useContext(ContentfulContext);
  const queryResult = useQuery<CtfBlogQuery>(query, {
    variables: { locale, preview: previewActive },
  });

  useDataForPreview(queryResult);

  const classes = useStyles();

  if (queryResult.data === undefined || queryResult.loading === true) {
    return null;
  }

  const blogHead = () => {
    return (
      <Head>
        <title key="title">Blog</title>
        <meta key="og:title" property="og:title" content="Blog" />
        <meta key="description" name="description" content={contentfulConfig.meta.description} />
        <meta
          key="og:description"
          property="og:description"
          content={contentfulConfig.meta.description}
        />
        <meta key="og:url" property="og:url" content={`${contentfulConfig.meta.url}/blog`} />
        <meta key="og:locale" property="og:locale" content={locale.replace('-', '_')} />
      </Head>
    );
  };

  if (
    queryResult.data.postCollection === null ||
    queryResult.data.postCollection.items.length === 0
  ) {
    return (
      <>
        {blogHead()}
        <Container>
          <EntryNotFound />
        </Container>
      </>
    );
  }

  return (
    <>
      {blogHead()}
      <CategoryContainer>
        <Container maxWidth={false}>
          <div className={classes.root}>
            <div>
              <div className={classes.container}>
                <div className={classes.containerNarrow}>
                  <div className={classes.titleContainer}>
                    <Typography variant="h1" className={classes.title}>
                      Blog
                    </Typography>
                    <CategoriesMenu />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.containerNarrow}>
              {queryResult.data.postCollection.items
                .filter(post => post !== null)
                .map(post => (
                  <div className={classes.postWrap} key={post!.sys.id}>
                    <CardPostExtended {...post!} />
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </CategoryContainer>
    </>
  );
};

const BlogPageWithProviders = withProviders()(BlogPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: BlogPageWithProviders,
});

export default BlogPageWithProviders;
