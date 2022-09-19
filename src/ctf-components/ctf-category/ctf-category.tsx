import { Theme, makeStyles, Typography, Container } from '@material-ui/core';
import React, { useContext } from 'react';

import { CategoryFragment } from './__generated__/CategoryFragment';
import { CtfCategoryQuery_postCollection_items } from './__generated__/CtfCategoryQuery';

import CategoriesMenu from '@ctf-components/ctf-categories-menu/ctf-categories-menu';
import CardPostExtended from '@src/components/card-post-extended/card-post-extended';
import CategoryContainer from '@src/components/layout/category-container';
import Link from '@src/components/link/link';
import XrayFrame from '@src/components/xray-frame';
import { ContentfulContext } from '@src/contentful-context';
import { WrapIf } from '@src/jsx-utils';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getLocaleConfig } from '@src/locales-map';

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
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
      marginRight: theme.spacing(6),
    },
    '&:hover, &:focus': {
      textDecoration: 'underline',
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
  introText: {
    marginBottom: '8rem',
    '& p': {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.571,
    },
  },
  postWrap: {
    '& + &': {
      marginTop: theme.spacing(20),
    },
  },
}));

interface CtfCategoryPropsInterface extends CategoryFragment {
  posts: (CtfCategoryQuery_postCollection_items | null)[];
}

const CtfCategory = (props: CtfCategoryPropsInterface) => {
  const { posts, slug } = props;
  const { locale, xrayActive } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale);

  const classes = useStyles();

  return (
    <LayoutContext.Provider value={{ ...defaultLayout, parent: 'category' }}>
      <CategoryContainer>
        <WrapIf
          when={xrayActive}
          wrap={children => (
            <XrayFrame
              className={`xray-${props.__typename}`}
              __typename={props.__typename}
              sys={props.sys}
              internalName={props.internalName || ''}>
              {children}
            </XrayFrame>
          )}>
          <Container maxWidth={false}>
            <div className={classes.root}>
              <div>
                <div className={classes.containerNarrow}>
                  <div className={classes.titleContainer}>
                    <Link
                      href="/[lang]/blog"
                      as={`/${lang}/blog`}
                      withoutMaterial
                      className={classes.title}>
                      <Typography variant="h1">Blog</Typography>
                    </Link>
                    <CategoriesMenu slug={slug ?? undefined} />
                  </div>
                </div>
              </div>

              {posts && posts.length > 0 && (
                <div className={classes.containerNarrow}>
                  {(posts as CtfCategoryQuery_postCollection_items[])
                    .filter(post => post !== null)
                    .map(post => (
                      <div key={post.sys.id} className={classes.postWrap}>
                        <CardPostExtended {...post} />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </Container>
        </WrapIf>
      </CategoryContainer>
    </LayoutContext.Provider>
  );
};

export default CtfCategory;
