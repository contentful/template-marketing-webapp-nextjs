import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { NavigationFieldsFragment } from './__generated/ctf-navigation.generated';

import Link from '@src/components/link/link';

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    alignItems: 'center',
    cursor: 'default',
    display: 'inline-flex',
    fontSize: '2.1rem',
    height: '8rem',
    lineHeight: '1.8',
    marginRight: theme.spacing(8),
    position: 'relative',

    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(10),
    },

    '& a': {
      cursor: 'pointer',
      display: 'inline-block',
      transition: 'transform 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        transform: 'translateY(-4px)',
      },
      '& $submenu': {
        opacity: 1,
        pointerEvents: 'all',
        transform: 'translateY(0)',
      },
    },
  },
  submenu: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px #00000029',
    borderRadius: '14px',
    left: theme.spacing(10) * -1,
    listStyle: 'none',
    opacity: 0,
    padding: theme.spacing(4, 10),
    pointerEvents: 'none',
    position: 'absolute',
    top: 'calc(100% - 2rem)',
    transform: 'translateY(20%)',
    transition: 'all 0.3s ease-in-out',
  },
  submenuItem: {
    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        transform: 'translateY(-4px)',
      },
    },
  },
}));

const getLinkDisplayText = menuItem => {
  if ('pageName' in menuItem) {
    return menuItem.pageName;
  }
  if ('categoryName' in menuItem) {
    return menuItem.categoryName;
  }
  if ('postName' in menuItem) {
    return menuItem.postName;
  }
  return menuItem.slug;
};

const getLinkHrefPrefix = menuItem => {
  if ('pageName' in menuItem) {
    return menuItem.slug;
  }
  if ('categoryName' in menuItem) {
    return `category/${menuItem.slug}`;
  }
  if ('postName' in menuItem) {
    return `post/${menuItem.slug}`;
  }
  return menuItem.slug;
};

export const CtfNavigation = (props: NavigationFieldsFragment) => {
  const classes = useStyles();

  const navigationContent = props.items[0];

  const renderNavigationLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map((menuItem, i) => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li key={i} className={listClassName}>
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      {navigationContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul className={classes.menu}>
            {navigationContent.menuItemsCollection.items.map((menuItem, i) => (
              <li key={i} className={classes.menuItem}>
                {menuItem?.groupName}
                {menuItem?.featuredPagesCollection && (
                  <ul className={classes.submenu}>
                    {renderNavigationLinks(menuItem.featuredPagesCollection, classes.submenuItem)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
