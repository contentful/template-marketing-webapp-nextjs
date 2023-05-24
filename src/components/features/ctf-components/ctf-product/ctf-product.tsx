import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Theme, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment } from 'react';

import { ProductFieldsFragment } from './__generated/ctf-product.generated';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import LayoutContext, { defaultLayout } from '@src/layout-context';

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
    fontWeight: 600,
    lineHeight: 1.39,
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.375rem',
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
        fontWeight: 400,
        lineHeight: 1.56,
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
    color: '#414D63',
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
      fontSize: '1.8rem',
      fontWeight: 400,
      color: '#414D63',
    },
    '& > div:last-child': {
      marginBottom: theme.spacing(10),
    },
  },
}));

export const CtfProduct = (props: ProductFieldsFragment) => {
  const {
    name,
    featuredImage,
    description,
    featuresCollection,
    sys: { id },
  } = props;

  const inspectorMode = useContentfulInspectorMode();
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
                {...inspectorMode({ entryId: id, fieldId: 'name' })}
              >
                {name}
              </Typography>
            )}
            {description && (
              <LayoutContext.Provider value={{ ...defaultLayout, parent: 'product-description' }}>
                <div
                  {...inspectorMode({
                    entryId: id,
                    fieldId: 'description',
                  })}
                >
                  <CtfRichtext {...description} className={classes.body} />
                </div>
              </LayoutContext.Provider>
            )}
          </div>
          {featuredImage && (
            <div
              className={classes.imageContainer}
              {...inspectorMode({
                entryId: id,
                fieldId: 'featuredImage',
              })}
            >
              <CtfAsset {...featuredImage} showDescription={false} className={classes.imageInner} />
            </div>
          )}
        </div>
      </Container>
      {featuresCollection && featuresCollection.items.length > 0 && (
        <LayoutContext.Provider value={{ ...defaultLayout, parent: 'product-table' }}>
          <section className={classes.featuresSection}>
            <Container maxWidth={false}>
              <div className={classes.innerContainer}>
                <Box component="dl">
                  {featuresCollection.items.map(
                    item =>
                      item && (
                        <Fragment key={item.sys.id}>
                          <div className={classes.featureSeparator} />
                          <div className={classes.featureRow}>
                            <Typography
                              variant="h3"
                              component="dt"
                              className={classes.featureName}
                              {...inspectorMode({
                                entryId: item.sys.id,
                                fieldId: 'name',
                              })}
                            >
                              {item.name}
                            </Typography>
                            <Box component="dd" margin={0} className={classes.featureValue}>
                              {item.longDescription && (
                                <div
                                  {...inspectorMode({
                                    entryId: item.sys.id,
                                    fieldId: 'longDescription',
                                  })}
                                >
                                  <CtfRichtext {...item.longDescription} />
                                </div>
                              )}
                            </Box>
                          </div>
                        </Fragment>
                      ),
                  )}
                </Box>
              </div>
            </Container>
          </section>
        </LayoutContext.Provider>
      )}
    </>
  );
};
