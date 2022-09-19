import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  Theme,
  Toolbar,
  Box,
  SvgIcon,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useContext, useMemo } from 'react';

import Link from '@src/components/link/link';
import { ContentfulContext } from '@src/contentful-context';
import getContentfulConfig from '@src/get-contentful-config';
import { getLocaleConfig } from '@src/locales-map';
import pathToNextLinkHref from '@src/routing/path-to-next-link-href';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    boxShadow: '0 2px 6px #00000021',
  },
  toolbar: {
    height: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      height: HEADER_HEIGHT,
    },
  },
  toolbarContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'block',
    maxWidth: '120px',
    height: 'auto',
  },
  menuWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
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
  accountMenu: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  accountMenuItem: {
    '& + &': {
      marginLeft: theme.spacing(8),

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: '0.4rem',
    },
    '& .MuiButton-iconSizeSmall > :first-child': {
      fontSize: '1.5rem',
    },
  },
}));

interface HeaderPropsInterface {
  locale?: string;
  onMenuClick?: () => any;
}

const Header = (props: HeaderPropsInterface) => {
  const { defaultLocale } = useContext(ContentfulContext);
  const { onMenuClick, locale } = props;
  const classes = useStyles();
  const { lang, locale: realLocale } = getLocaleConfig(locale || defaultLocale);

  const contentfulConfig = useMemo(() => {
    return getContentfulConfig(realLocale);
  }, [realLocale]);

  const renderMenuItem = (menuItem: { label: string; location?: string }): string | JSX.Element => {
    if (menuItem.location === undefined) {
      return menuItem.label;
    }

    const internalHref = pathToNextLinkHref(menuItem.location);

    if (internalHref === null) {
      // It looks like this is not an internal link, at least not one that we
      // recognize, just render a regular anchor
      return <a href={menuItem.location}>{menuItem.label}</a>;
    }

    return (
      <Link href={internalHref} as={`/${lang}${menuItem.location}`}>
        {menuItem.label}
      </Link>
    );
  };

  const renderMenuItemChildren = (menuItem: {
    children?: { label: string; location: string }[];
  }): JSX.Element | null => {
    if (menuItem.children === undefined) {
      return null;
    }

    return (
      <ul className={classes.submenu}>
        {menuItem.children.map(submenuItem => (
          <li key={submenuItem.label} className={classes.submenuItem}>
            {renderMenuItem(submenuItem)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <AppBar position="fixed" color="secondary" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Container
          className={classes.toolbarContent}
          disableGutters
          maxWidth={false}
          style={{
            maxWidth: `${CONTAINER_WIDTH / 10}rem`,
          }}>
          <Link href="/[lang]" as={`/${lang}`} withoutMaterial>
            <img
              src={contentfulConfig.header.logo}
              className={classes.logo}
              alt="Logo"
              width={contentfulConfig.header.logoWidth}
              height={contentfulConfig.header.logoHeight}
            />
          </Link>

          {contentfulConfig.header.menu.length > 0 && (
            <Hidden smDown>
              <div className={classes.menuWrapper}>
                <nav role="navigation">
                  <ul className={classes.menu}>
                    {contentfulConfig.header.menu.map(menuItem => (
                      <li key={menuItem.label} className={classes.menuItem}>
                        {menuItem.location ? renderMenuItem(menuItem) : menuItem.label}
                        {renderMenuItemChildren(menuItem)}
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav>
                  <ul className={classes.accountMenu}>
                    <li className={classes.accountMenuItem}>
                      <Link
                        href="/[lang]/sign-up"
                        as={`/${lang}/sign-up`}
                        isButton
                        variant="contained"
                        color="primary"
                        size="small">
                        {realLocale === 'de-DE' ? 'Anmelden' : 'Sign Up'}
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
                        }>
                        {realLocale === 'de-DE' ? 'Einloggen' : 'Sign In'}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Hidden>
          )}
        </Container>

        {/* menu button */}
        <Hidden mdUp>
          <Box>
            <IconButton onClick={() => onMenuClick && onMenuClick()}>
              <Menu />
            </IconButton>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
