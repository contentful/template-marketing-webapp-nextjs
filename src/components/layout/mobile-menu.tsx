import { Drawer, SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import Link from '@src/components/link/link';
import contentfulConfig from 'contentful.config';

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

  accountMenu: {
    listStyle: 'none',
    margin: 0,
    padding: theme.spacing(4, 8),
    textAlign: 'center',
  },
  accountMenuItem: {
    '& + &': {
      marginTop: theme.spacing(4),
    },
    '& .MuiButton-startIcon': {
      marginRight: '0.4rem',
    },
    '& .MuiButton-iconSizeSmall > :first-child': {
      fontSize: '1.5rem',
    },
  },
}));

interface MobileMenuPropsInterface {
  isOpen?: boolean;
  onOpenChange: (isOpen: boolean) => any;
}

const MobileMenu = (props: MobileMenuPropsInterface) => {
  const { isOpen, onOpenChange } = props;
  const { t } = useTranslation();
  const onCloseClick = (e, reason) => {
    if (reason === 'backdropClick') {
      onOpenChange(false);
    }
  };

  const renderMenuItem = (menuItem: { label: string; location?: string }): string | JSX.Element => {
    if (menuItem.location === undefined) {
      return menuItem.label;
    }

    return <Link href={menuItem.location}>{menuItem.label}</Link>;
  };

  const renderMenuItemChildren = (menuItem: {
    children?: { label: string; location: string }[];
  }): JSX.Element | null => {
    if (menuItem.children === undefined) {
      return null;
    }

    return (
      <ul className={classes.submenu}>
        {menuItem.children.map((submenuItem, i) => (
          <li key={i}>{renderMenuItem(submenuItem)}</li>
        ))}
      </ul>
    );
  };

  const classes = useStyles();

  return (
    <Drawer open={isOpen} anchor="right" onClose={onCloseClick}>
      {contentfulConfig.header.menu.length > 0 && (
        <nav role="navigation">
          <ul className={classes.menu}>
            {contentfulConfig.header.menu.map((menuItem, i) => (
              <li key={i} className={classes.menuItem}>
                {menuItem.location ? renderMenuItem(menuItem) : menuItem.label}
                {renderMenuItemChildren(menuItem)}
              </li>
            ))}
          </ul>
        </nav>
      )}
      <nav>
        <ul className={classes.accountMenu}>
          <li className={classes.accountMenuItem}>
            <Link href="/sign-up" isButton variant="contained" color="primary" size="small">
              {t('common.signUp')}
            </Link>
          </li>
          <li className={classes.accountMenuItem}>
            <Link
              href="https://dalia.colorfuldemo.com"
              isButton
              variant="text"
              color="primary"
              size="small"
              startIcon={
                <SvgIcon fontSize="inherit" viewBox="0 0 14 16">
                  <g clipPath="url(#clip0)" stroke="#000">
                    <path d="M9.447 15.278h-5.75v-.347h5.75a2.85 2.85 0 0 0 2.847-2.847v-8.39A2.85 2.85 0 0 0 9.447.847h-5.75V.5h5.75a3.2 3.2 0 0 1 3.194 3.194v8.39a3.2 3.2 0 0 1-3.194 3.194z" />
                    <path d="M10.28 7.889L6.83 4.44l-.251.251 3.448 3.449.252-.251z" />
                    <path d="M6.83 11.338l3.449-3.449-.251-.251-3.449 3.448.251.252z" />
                    <path d="M9.972 7.663H.5v.416h9.472v-.416z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h13.141v15.778H0z" />
                    </clipPath>
                  </defs>
                </SvgIcon>
              }
            >
              {t('common.signIn')}
            </Link>
          </li>
        </ul>
      </nav>
    </Drawer>
  );
};

export default MobileMenu;
