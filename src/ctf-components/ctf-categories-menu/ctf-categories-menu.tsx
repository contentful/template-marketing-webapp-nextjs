import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfBlogCategoriesQuery } from './__generated__/CtfBlogCategoriesQuery';

import Link from '@src/components/link/link';
import { useContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';

const categoriesQuery = gql`
  query CtfBlogCategoriesQuery($locale: String, $preview: Boolean) {
    categoryCollection(order: categoryName_ASC, locale: $locale, preview: $preview, limit: 15) {
      items {
        sys {
          id
        }
        slug
        categoryName
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  categories: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(-5),
    width: `calc(100% + ${theme.spacing(5)}px)`,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(8),
    },
  },
  categoryLink: {
    color: '#797979',
    fontSize: '1.6rem',
    fontWeight: 500,
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2.5),
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    '&:hover, &:focus': {
      color: '#000',
      textDecoration: 'underline',
    },
  },
  categoryLinkActive: {
    color: '#000',
  },
}));

interface CtfCategoriesMenuPropsInterface {
  slug?: string;
}

const CtfCategoriesMenu: React.FC<CtfCategoriesMenuPropsInterface> = props => {
  const { slug } = props;
  const { locale } = useContentfulContext();

  const { previewActive } = useContentfulContext();

  const categoriesQueryResult = useQuery<CtfBlogCategoriesQuery>(categoriesQuery, {
    variables: { locale, preview: previewActive },
  });

  useDataForPreview(categoriesQueryResult);

  const classes = useStyles();

  if (
    categoriesQueryResult.data === undefined ||
    categoriesQueryResult.loading === true ||
    categoriesQueryResult.data.categoryCollection === null
  ) {
    return null;
  }

  return (
    <>
      {categoriesQueryResult.data.categoryCollection.items.length > 0 && (
        <div className={classes.categories}>
          {categoriesQueryResult.data.categoryCollection.items.map(
            category =>
              category && (
                <Link
                  key={category.sys.id}
                  href={`/category/${category.slug}`}
                  className={clsx(
                    classes.categoryLink,
                    slug === category.slug ? classes.categoryLinkActive : undefined,
                  )}>
                  {category.categoryName}
                </Link>
              ),
          )}
        </div>
      )}
    </>
  );
};

export default CtfCategoriesMenu;
