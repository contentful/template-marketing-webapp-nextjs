import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { useCtfBlogCategoriesQuery } from './__generated/ctf-categories-menu.generated';

import Link from '@src/components/link/link';
import { useContentfulContext } from '@src/contentful-context';

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

export const CtfCategoriesMenu: React.FC<CtfCategoriesMenuPropsInterface> = props => {
  const { slug } = props;
  const { locale } = useContentfulContext();

  const { previewActive } = useContentfulContext();

  const { isLoading, data } = useCtfBlogCategoriesQuery({
    locale,
    preview: previewActive,
  });

  const classes = useStyles();

  if (isLoading || !data?.categoryCollection) {
    return null;
  }

  return (
    <>
      {data.categoryCollection.items.length > 0 && (
        <div className={classes.categories}>
          {data.categoryCollection.items.map(
            category =>
              category && (
                <Link
                  key={category.sys.id}
                  href={`/category/${category.slug}`}
                  className={clsx(
                    classes.categoryLink,
                    slug === category.slug ? classes.categoryLinkActive : undefined,
                  )}
                >
                  {category.categoryName}
                </Link>
              ),
          )}
        </div>
      )}
    </>
  );
};
