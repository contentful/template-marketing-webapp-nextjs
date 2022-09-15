import React, { useContext, useMemo } from 'react';
import {
  makeStyles,
  Theme,
  Container,
  Select,
  MenuItem,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import { Twitter, Facebook, LinkedIn, Instagram } from '@material-ui/icons';
import Link from '@src/components/link/link';
import { ContentfulContext } from '@pages/_app';
import {
  getLocaleConfig,
  prettifyLocale,
  localeToLanguage,
} from '@src/locales-map';
import { CONTAINER_WIDTH } from '@src/theme';
import getContentfulConfig from '@src/get-contentful-config';
import pathToNextLinkHref from '@src/routing/path-to-next-link-href';

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: '#F4F4F4',
  },
  footer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(20),
    },
  },
  menuWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(-8),
  },
  menuColumn: {
    paddingLeft: theme.spacing(8),
  },
  menu: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    width: '17.2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    fontSize: '1.8rem',
    fontWeight: 500,
    lineHeight: '1.2',
    margin: theme.spacing(0, 0, 4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(8),
    },
  },
  submenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& $menuItem': {
      fontWeight: 400,
    },
  },
  submenuItem: {
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#7C7C7C',
      display: 'inline-block',
      minWidth: 0,
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#7C7C7C',
      },
    },
  },
  footerEndSection: {
    marginLeft: 'auto',
  },
  footerCorporateContainer: {
    backgroundColor: '#212121',
    color: '#fff',
    paddingBottom: theme.spacing(14),
    paddingTop: theme.spacing(8),
  },
  footerCorporate: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
  },
  localeMenu: {
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: '17.2rem',
    },
    '& > svg': {
      marginRight: theme.spacing(2),
    },
  },
  storeLogos: {
    marginTop: theme.spacing(7),
  },
  storeLogo: {
    display: 'block',
    maxWidth: '11.5rem',
    '& + &': {
      marginTop: theme.spacing(5),
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
  },
  corporateLogoMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  corporateLogoContainer: {
    flexShrink: 0,
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(8),
    marginTop: '0.2rem',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: '38.4rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  },
  copyrightAndLegal: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
  copyright: {
    fontSize: '1.8rem',
    lineHeight: 1.389,
    margin: theme.spacing(0, 10, 0, 0),
  },
  legalMenuWrapper: {},
  legalMenu: {
    listStyle: 'none',
    margin: theme.spacing(5, 0, 0),
    padding: 0,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 0,
    },
  },
  legalMenuItem: {
    fontSize: '1.8rem',
    lineHeight: 1.389,
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: 'auto',
    },
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(8),
      },
    },
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#fff',
      display: 'inline-block',
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#000',
      },
    },
  },
  socialDisclaimer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: theme.spacing(7),
    },
  },
  socialWrapper: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      order: -1,
      marginRight: theme.spacing(8),
      width: '38.4rem',
    },
  },
  socialTitle: {
    fontSize: '1.8rem',
    lineHeight: 1.2,
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(6),
    '& a': {
      color: 'inherit',
      display: 'inline-block',
      lineHeight: 1,

      '&:not(:first-child)': {
        marginLeft: theme.spacing(6),
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3.2rem',
    },
  },
  disclaimer: {
    color: '#959595',
    fontSize: '1.8rem',
    lineHeight: 1.389,
    marginTop: theme.spacing(10),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
}));

interface FooterPropsInterface {
  locale?: string;
  onLocaleChange: (locale: string) => any;
}

const Footer = (props: FooterPropsInterface) => {
  const { locale, onLocaleChange } = props;
  const { defaultLocale, availableLocales } = useContext(ContentfulContext);
  const { lang, locale: realLocale } = getLocaleConfig(locale || defaultLocale);

  const contentfulConfig = useMemo(() => {
    return getContentfulConfig(realLocale);
  }, [realLocale]);

  const renderMenuItem = (
    menuItem: {
      label: string;
      location?: string;
    },
    { className = classes.menuItem }: { className?: string } = {},
  ): JSX.Element => {
    if (menuItem.location === undefined) {
      return <p className={className}>{menuItem.label}</p>;
    }

    const internalHref = pathToNextLinkHref(menuItem.location);

    if (internalHref === null) {
      // It looks like this is not an internal link, at least not one that we
      // recognize, just render a regular anchor
      return (
        <a href={menuItem.location} className={className}>
          {menuItem.label}
        </a>
      );
    }

    return (
      <Link
        href={internalHref}
        as={`/${lang}${menuItem.location}`}
        className={className}
      >
        {menuItem.label}
      </Link>
    );
  };

  const renderMenuItemChildren = (menuItem: {
    children?: Array<{ label: string; location: string }>;
  }): JSX.Element | null => {
    if (menuItem.children === undefined) {
      return null;
    }

    return (
      <ul className={classes.submenu}>
        {menuItem.children.map((submenuItem, i) => (
          <li key={i} className={classes.submenuItem}>
            {renderMenuItem(submenuItem)}
          </li>
        ))}
      </ul>
    );
  };

  const classes = useStyles();

  return (
    <>
      <Container maxWidth={false} className={classes.footerContainer}>
        <footer className={classes.footer}>
          {contentfulConfig.footer.menu.length > 0 && (
            <nav role="navigation" className={classes.menuWrapper}>
              {contentfulConfig.footer.menu.map((menuItem, i) => (
                <div key={i} className={classes.menuColumn}>
                  <ul className={classes.menu}>
                    <li>
                      {renderMenuItem(menuItem)}
                      {renderMenuItemChildren(menuItem)}
                    </li>
                  </ul>
                </div>
              ))}
            </nav>
          )}
          <section className={classes.footerEndSection}>
            {availableLocales.length > 1 && (
              <div className={classes.localeMenu}>
                <SvgIcon>
                  <g clipPath="url(#clip-footer-lang)">
                    <path
                      d="M24 12A11.9994 11.9994 0 0012.5496.0132V0h-1.1v.0132a11.9992 11.9992 0 000 23.9767v.0132h1.1v-.0132A11.9998 11.9998 0 0024 12zM6.8886 12a20.7853 20.7853 0 01.5005-4.6108 20.4957 20.4957 0 014.0605-.4936v10.2088a20.495 20.495 0 01-4.0605-.4936A20.7846 20.7846 0 016.8886 12zm-.6905 4.294a13.2433 13.2433 0 01-2.1797-.8789c-1.8559-.9606-2.92-2.2054-2.92-3.4151 0-1.2097 1.0641-2.4545 2.92-3.4151a13.2461 13.2461 0 012.1797-.8781 22.7198 22.7198 0 000 8.588v-.0008zM15.4135 4.02c.357.699.6511 1.4285.8789 2.1797a22.0049 22.0049 0 00-3.7444-.4033V1.1747c1.0315.2678 2.052 1.2704 2.8655 2.8453zm-3.9639-2.8453v4.6202a22.0043 22.0043 0 00-3.7429.4032 13.246 13.246 0 01.879-2.1797c.8142-1.5732 1.8348-2.576 2.8639-2.8437zm0 17.0296v4.621c-1.0291-.2686-2.0497-1.2704-2.8648-2.8461a13.2145 13.2145 0 01-.8788-2.1797 21.835 21.835 0 003.7436.4048zm1.1 4.621v-4.621a21.843 21.843 0 003.7444-.4032 13.2216 13.2216 0 01-.8789 2.1797c-.8151 1.5741-1.8356 2.5759-2.8655 2.8445zm0-5.7209V6.8956a20.5034 20.5034 0 014.0612.4936c.3383 1.5134.5062 3.06.5006 4.6108a20.7918 20.7918 0 01-.5006 4.6108 20.5027 20.5027 0 01-4.0612.4936zm5.2515-9.3976a13.1944 13.1944 0 012.1797.8789c1.8566.9606 2.9208 2.2053 2.9208 3.4151 0 1.2097-1.0658 2.4537-2.9224 3.4128a13.1915 13.1915 0 01-2.1797.8788 22.1419 22.1419 0 00.4103-4.294 22.1415 22.1415 0 00-.4087-4.2916zM22.4648 8.96c-1.1459-1.0556-2.8686-1.919-4.9494-2.477-.5582-2.0793-1.4215-3.802-2.4763-4.9488a10.9403 10.9403 0 017.4257 7.425v.0008zM8.9593 1.5343C7.9045 2.681 7.0412 4.4039 6.483 6.483c-2.0793.5582-3.802 1.4215-4.9487 2.4763a10.9429 10.9429 0 017.425-7.425zm-7.425 13.5064c1.1467 1.0548 2.8694 1.9181 4.9487 2.4747.5582 2.0793 1.4215 3.802 2.4763 4.9479a10.9396 10.9396 0 01-7.425-7.4226zm13.5063 7.4242c1.0549-1.1459 1.9182-2.8687 2.4748-4.9495 2.0792-.5581 3.802-1.4215 4.9479-2.4763a10.9382 10.9382 0 01-7.4227 7.4258z"
                      fill="#000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip-footer-lang">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </SvgIcon>
                <Select
                  value={locale}
                  disableUnderline
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    onLocaleChange(event.target.value as string);
                  }}
                >
                  {availableLocales.map((availableLocale) => (
                    <MenuItem key={availableLocale} value={availableLocale}>
                      {localeToLanguage(prettifyLocale(availableLocale))}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            )}

            <div className={classes.storeLogos}>
              {contentfulConfig.footer.googlePlayLogo && (
                <a
                  className={classes.storeLogo}
                  href="https://play.google.com/store/apps/details?id=com.contentful.colorfulcoin"
                >
                  <img
                    src={contentfulConfig.footer.googlePlayLogo}
                    srcSet={`${contentfulConfig.footer.googlePlayLogo}?w=110 110w, ${contentfulConfig.footer.googlePlayLogo}?w=220 220w`}
                    alt="Google Play Store logo"
                  />
                </a>
              )}
              {contentfulConfig.footer.appStoreLogo && (
                <a
                  className={classes.storeLogo}
                  href="https://apps.apple.com/de/app/colorful-coin/id1612505445?l=en"
                >
                  <img
                    src={contentfulConfig.footer.appStoreLogo}
                    srcSet={`${contentfulConfig.footer.appStoreLogo}?w=110 110w, ${contentfulConfig.footer.appStoreLogo}?w=220 220w`}
                    alt="Apple App Store logo"
                  />
                </a>
              )}
            </div>
          </section>
        </footer>
      </Container>

      <Container maxWidth={false} className={classes.footerCorporateContainer}>
        <section className={classes.footerCorporate}>
          <div className={classes.corporateLogoMenu}>
            <div className={classes.corporateLogoContainer}>
              <img
                src={contentfulConfig.footer.logo}
                className={classes.corporateLogo}
                alt="Logo"
                width={contentfulConfig.footer.logoWidth}
                height={contentfulConfig.footer.logoHeight}
              />
            </div>

            <section className={classes.copyrightAndLegal}>
              {contentfulConfig.footer.copyright && (
                <p className={classes.copyright}>
                  {contentfulConfig.footer.copyright}
                </p>
              )}
              {contentfulConfig.footer.legal.length > 0 && (
                <nav role="navigation" className={classes.legalMenuWrapper}>
                  <ul className={classes.legalMenu}>
                    {contentfulConfig.footer.legal.map((menuItem, i) => (
                      <li key={i} className={classes.legalMenuItem}>
                        {renderMenuItem(menuItem, {
                          className: '',
                        })}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </section>
          </div>

          <div className={classes.socialDisclaimer}>
            {contentfulConfig.footer.disclaimer && (
              <p className={classes.disclaimer}>
                {contentfulConfig.footer.disclaimer}
              </p>
            )}

            <div className={classes.socialWrapper}>
              <Typography className={classes.socialTitle}>
                {realLocale === 'de-DE' ? 'Finden Sie uns auf' : 'Find us on'}
              </Typography>
              <div className={classes.social}>
                {contentfulConfig.footer.social.twitter && (
                  <a href={contentfulConfig.footer.social.twitter}>
                    <Twitter />
                  </a>
                )}
                {contentfulConfig.footer.social.facebook && (
                  <a href={contentfulConfig.footer.social.facebook}>
                    <Facebook />
                  </a>
                )}
                {contentfulConfig.footer.social.linkedin && (
                  <a href={contentfulConfig.footer.social.linkedin}>
                    <LinkedIn />
                  </a>
                )}
                {contentfulConfig.footer.social.instagram && (
                  <a href={contentfulConfig.footer.social.instagram}>
                    <Instagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Footer;
