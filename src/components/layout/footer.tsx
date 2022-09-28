import { makeStyles, Theme, Container, Typography } from '@material-ui/core';
import { Twitter, Facebook, LinkedIn, Instagram } from '@material-ui/icons';
import { useTranslation } from 'next-i18next';

import { LanguageSelector } from '@src/components/language-selector';
import Link from '@src/components/link/link';
import { ContentfulImage } from '@src/components/contentful-image/contentful-image';
import { CONTAINER_WIDTH } from '@src/theme';
import { contentfulConfig } from 'contentful.config.mjs';

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

const Footer = () => {
  const { t } = useTranslation();

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

    return (
      <Link href={menuItem.location} className={className}>
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
            <LanguageSelector />

            <div className={classes.storeLogos}>
              {contentfulConfig.footer.googlePlayLogo && (
                <a
                  className={classes.storeLogo}
                  href="https://play.google.com/store/apps/details?id=com.contentful.colorfulcoin"
                >
                  <ContentfulImage
                    src={contentfulConfig.footer.googlePlayLogo}
                    alt="Google Play Store logo"
                    layout="responsive"
                    width={`${contentfulConfig.footer.logoWidth}px`}
                    height={'100px'}
                  />
                </a>
              )}
              {contentfulConfig.footer.appStoreLogo && (
                <a
                  className={classes.storeLogo}
                  href="https://apps.apple.com/de/app/colorful-coin/id1612505445?l=en"
                >
                  <ContentfulImage
                    src={contentfulConfig.footer.appStoreLogo}
                    alt="Apple App Store logo"
                    layout="responsive"
                    width={`${contentfulConfig.footer.logoWidth}px`}
                    height={'100px'}
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
              <ContentfulImage
                src={contentfulConfig.footer.logo}
                className={classes.corporateLogo}
                alt="Logo"
                width={contentfulConfig.footer.logoWidth}
                height={contentfulConfig.footer.logoHeight}
              />
            </div>

            <section className={classes.copyrightAndLegal}>
              <p className={classes.copyright}>
                {t('legal.copyright', { year: new Date().getFullYear() })}
              </p>
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
            <p className={classes.disclaimer}>{t('legal.disclaimer')}</p>

            <div className={classes.socialWrapper}>
              <Typography className={classes.socialTitle}>{t('socials.findUsOn')}</Typography>
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
