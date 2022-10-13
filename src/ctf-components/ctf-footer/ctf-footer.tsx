import { makeStyles, Theme, Container, Typography } from '@material-ui/core';
import { Twitter, Facebook, LinkedIn, Instagram } from '@material-ui/icons';
import { useTranslation } from 'next-i18next';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';

import { ContentfulImage } from '@src/components/contentful-image/contentful-image';
import { LanguageSelector } from '@src/components/language-selector';
import Link from '@src/components/link/link';
import { CONTAINER_WIDTH } from '@src/theme';

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

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map((menuItem, i) => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li key={i} className={listClassName}>
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      )
    });
  };

  const classes = useStyles();

  return (
    <>
      <Container maxWidth={false} className={classes.footerContainer}>
        <footer className={classes.footer}>
          {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation" className={classes.menuWrapper}>
              {footerContent.menuItemsCollection.items.map((menuItem, i) => (
                <div key={i} className={classes.menuColumn}>
                  <ul className={classes.menu}>
                    <li>
                      <p className={classes.menuItem}>{menuItem?.groupName}</p>
                      {menuItem?.featuredPagesCollection && (
                        <ul className={classes.submenu}>
                          {renderMenuGroupLinks(
                            menuItem.featuredPagesCollection,
                            classes.submenuItem,
                          )}
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              ))}
            </nav>
          )}
          <section className={classes.footerEndSection}>
            <LanguageSelector />
          </section>
        </footer>
      </Container>
      <Container maxWidth={false} className={classes.footerCorporateContainer}>
        <section className={classes.footerCorporate}>
          <div className={classes.corporateLogoMenu}>
            <div className={classes.corporateLogoContainer}>
              <ContentfulImage
                src="https://images.ctfassets.net/w8vf7dk7f259/24hV8yQwJho6mXbrkLEuCY/29c93d344856aed9e3da110d0c3c8500/colorful-collective-logo-light.svg"
                className={classes.corporateLogo}
                alt="Logo"
                width={280}
                height={19}
              />
            </div>

            <section className={classes.copyrightAndLegal}>
              <p className={classes.copyright}>
                {t('legal.copyright', { year: new Date().getFullYear() })}
              </p>
              {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                <nav role="navigation" className={classes.legalMenuWrapper}>
                  <ul className={classes.legalMenu}>
                    {renderMenuGroupLinks(
                      footerContent.legalLinks.featuredPagesCollection,
                      classes.legalMenuItem,
                    )}
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
                {footerContent?.twitterLink && (
                  <a href={footerContent.twitterLink}>
                    <Twitter />
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a href={footerContent.facebookLink}>
                    <Facebook />
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a href={footerContent.linkedinLink}>
                    <LinkedIn />
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a href={footerContent.instagramLink}>
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
