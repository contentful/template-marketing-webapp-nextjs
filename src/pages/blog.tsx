import { Container, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { CtfCategoriesMenu } from '@ctf-components/ctf-categories-menu/ctf-categories-menu';
import CardPostExtended from '@src/components/card-post-extended/card-post-extended';
import EntryNotFound from '@src/components/errors/entry-not-found';
import CategoryContainer from '@src/components/layout/category-container';
import { useContentfulContext } from '@src/contentful-context';
import { useCtfBlogQuery } from '@src/ctf-components/ctf-post/__generated/ctf-post.generated';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import contentfulConfig from 'contentful.config';

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

const BlogPage: NextPage = () => {
  const { locale, previewActive } = useContentfulContext();
  const { isLoading, data } = useCtfBlogQuery({
    locale,
    preview: previewActive,
  });

  const classes = useStyles();

  if (!data || isLoading) {
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

  if (!data.postCollection?.items?.[0]) {
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
                    <CtfCategoriesMenu />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.containerNarrow}>
              {data.postCollection.items
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

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default BlogPage;
