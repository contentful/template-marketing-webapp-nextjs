import { Drawer, makeStyles } from '@material-ui/core';

import { NavigationFieldsFragment } from '@ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import Link from '@src/components/link/link';

const useStyles = makeStyles(theme => ({
  menu: {
    listStyle: 'none',
    margin: 0,
    padding: theme.spacing(4, 8),
  },
  menuItem: {
    cursor: 'default',
    display: 'block',
    fontSize: '2.1rem',
    lineHeight: '1.8',
    position: 'relative',

    a: {
      cursor: 'pointer',
    },
  },
  submenu: {
    borderLeft: '1px solid #eee',
    listStyle: 'none',
    padding: theme.spacing(0, 0, 0, 2),
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
    return `/${menuItem.slug}`;
  }

  if ('categoryName' in menuItem) {
    return `category/${menuItem.slug}`;
  }

  if ('postName' in menuItem) {
    return `post/${menuItem.slug}`;
  }

  return `/${menuItem.slug}`;
};

interface MobileMenuPropsInterface extends NavigationFieldsFragment {
  isOpen?: boolean;
  onOpenChange: (isOpen: boolean) => any;
}

export const CtfMobileMenu = (props: MobileMenuPropsInterface) => {
  const classes = useStyles();

  const { isOpen, onOpenChange } = props;

  const onCloseClick = (e, reason) => {
    if (reason === 'backdropClick') {
      onOpenChange(false);
    }
  };

  const mobileMenuContent = props.items[0];

  const renderMobileMenuLinks = menuGroup => {
    return menuGroup?.items?.map((menuItem, i) => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li key={i}>
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  return (
    <Drawer open={isOpen} anchor="right" onClose={onCloseClick}>
      {mobileMenuContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul className={classes.menu}>
            {mobileMenuContent.menuItemsCollection.items.map((menuItem, i) => (
              <li key={i} className={classes.menuItem}>
                {menuItem?.link === null ? (
                  menuItem?.label
                ) : (
                  <Link href={`/${menuItem?.link?.slug}`}>{menuItem?.label}</Link>
                )}
                {menuItem?.link === null && menuItem?.children && (
                  <ul className={classes.submenu}>{renderMobileMenuLinks(menuItem.children)}</ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Drawer>
  );
};
