import React, { useContext } from 'react';
import { makeStyles, Theme, Container, Typography } from '@material-ui/core';
import { ContentfulContext } from '@pages/_app';
import CtfAsset from '@ctf-components/ctf-asset/ctf-asset';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import Link from '@src/components/link/link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getLocaleConfig } from '@src/locales-map';
import { ProductFragment } from './__generated__/ProductFragment';

const useStyles = makeStyles((theme: Theme) => ({
  innerIntroContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(19, 0, 19),
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: 'calc(50% - 2.5rem)',
    },
  },
  headline: {
    fontSize: '3.2rem',
    maxWidth: '60.4rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.6rem',
    },
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(7),
    maxWidth: '51rem',

    '& p': {
      fontSize: '2rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(8),
    '& svg.MuiSvgIcon-root': {
      fontSize: 'inherit',
    },
  },
  imageContainer: {
    marginBottom: theme.spacing(10),
    order: 1,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 0,
      order: 3,
      width: 'calc(50% - 2.5rem)',
    },
  },
  imageInner: {
    maxWidth: '47rem',
  },
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '77rem',
  },
  featuresSection: {
    backgroundColor: '#FCFCFC',
    padding: theme.spacing(19, 0, 12),
  },
  featureSeparator: {
    backgroundColor: '#707070',
    height: '2px',
    '&:first-child': {
      display: 'none',
    },
  },
  featureRow: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '&:not(:nth-child(2))': {
      marginTop: theme.spacing(10),
    },
  },
  featureName: {
    marginBottom: theme.spacing(4),
    marginTop: 0,
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      flexShrink: 0,
      marginBottom: theme.spacing(10),
      marginRight: theme.spacing(10),
      width: 'auto',
    },
  },
  featureValue: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexShrink: 0,
      width: '50rem',
    },
    '& .MuiTypography-body1': {
      fontSize: '2rem',
    },
    '& > div:last-child': {
      marginBottom: theme.spacing(10),
    },
  },
}));

interface CtfProductPropsInterface extends ProductFragment {}

const CtfProduct = (props: CtfProductPropsInterface) => {
  const { name, featuredImage, description, featuresCollection } = props;
  const { locale } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale);

  const classes = useStyles();

  return (
    <>
      <Container maxWidth={false}>
        <div className={classes.innerIntroContainer}>
          <div className={classes.innerBody}>
            {name && (
              <Typography
                variant="h1"
                component="h2"
                className={classes.headline}
              >
                {name}
              </Typography>
            )}
            {description && (
              <LayoutContext.Provider
                value={{ ...defaultLayout, parent: 'product-description' }}
              >
                <CtfRichtext {...description} className={classes.body} />
              </LayoutContext.Provider>
            )}
            <div className={classes.ctaContainer}>
              <Link
                href="/[lang]/sign-in"
                as={`/${lang}/sign-in`}
                isButton
                color="primary"
                variant="contained"
              >
                Sign Up
              </Link>
            </div>
          </div>
          {featuredImage && (
            <div className={classes.imageContainer}>
              <CtfAsset
                {...featuredImage}
                showDescription={false}
                widthPx={470}
                className={classes.imageInner}
              />
            </div>
          )}
        </div>
      </Container>
      {featuresCollection && featuresCollection.items.length > 0 && (
        <LayoutContext.Provider
          value={{ ...defaultLayout, parent: 'product-table' }}
        >
          <section className={classes.featuresSection}>
            <Container maxWidth={false}>
              <div className={classes.innerContainer}>
                <div>
                  {featuresCollection.items.map(
                    (item) =>
                      item && (
                        <React.Fragment key={item.sys.id}>
                          <div className={classes.featureSeparator} />
                          <div className={classes.featureRow}>
                            <Typography
                              variant="h3"
                              component="h4"
                              className={classes.featureName}
                            >
                              {item.name}
                            </Typography>
                            <div className={classes.featureValue}>
                              {item.longDescription && (
                                <CtfRichtext {...item.longDescription} />
                              )}
                            </div>
                          </div>
                        </React.Fragment>
                      ),
                  )}
                </div>
              </div>
            </Container>
          </section>
        </LayoutContext.Provider>
      )}
    </>
  );
};

export default CtfProduct;
