import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { NavigationFieldsFragment } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { Link } from '@src/components/shared/link';

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
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li key={menuItem.sys.id}>
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      onClose={onCloseClick}
      role="dialog"
      id="mobile-menu"
      aria-modal={true}
    >
      {mobileMenuContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul className={classes.menu}>
            {mobileMenuContent.menuItemsCollection.items.map(
              menuItem =>
                menuItem && (
                  <li key={menuItem.sys.id} className={classes.menuItem}>
                    {!menuItem.link ? (
                      menuItem.groupName
                    ) : (
                      <Link href={`/${menuItem.link.slug}`}>{menuItem.groupName}</Link>
                    )}
                    {!menuItem.link && menuItem.children && (
                      <ul className={classes.submenu}>
                        {renderMobileMenuLinks(menuItem.children)}
                      </ul>
                    )}
                  </li>
                ),
            )}
          </ul>
        </nav>
      )}
    </Drawer>
  );
};
