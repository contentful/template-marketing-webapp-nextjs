import { ContentfulLivePreview } from '@contentful/live-preview';
import { Theme, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import { BusinessInfoFieldsFragment } from './__generated/business-info.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { useContentfulContext } from '@src/contentful-context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(18),
    paddingTop: (props: BusinessInfoFieldsFragment) =>
      props.name || props.shortDescription ? 0 : theme.spacing(18),
    '& .MuiContainer-root + .ComponentInfoBlock': {
      marginTop: theme.spacing(18),
    },
    '& .ComponentInfoBlock + .MuiContainer-root': {
      marginTop: theme.spacing(18),
    },
  },
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '126.2rem',
  },
  containerNarrow: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '77rem',
  },
  hero: {
    marginBottom: theme.spacing(18),
    position: 'relative',
  },
  heroBg: {
    backgroundColor: '#000',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      bottom: 0,
      content: '""',
      display: 'block',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
    },
  },
  heroInner: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '55rem',
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8),
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(16),
      paddingTop: theme.spacing(16),
    },
    '@media (min-height: 600px)': {
      minHeight: '59rem',
    },
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontSize: '4.5rem',
    },
  },
  subtitle: {
    fontSize: '2.5rem',
    marginTop: theme.spacing(3),
  },
}));

const CtfBusinessInfo = (props: BusinessInfoFieldsFragment) => {
  const {
    body,
    name,
    shortDescription,
    featuredImage,
    sys: { id },
  } = props;
  const { locale } = useContentfulContext();
  const backgroundImage = useMemo(
    () => (featuredImage ? `${featuredImage.url}?w=1920` : undefined),
    [featuredImage],
  );

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {(name || shortDescription) && (
        <div className={classes.hero}>
          <div
            className={classes.heroBg}
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            {...ContentfulLivePreview.getProps({ entryId: id, fieldId: 'featuredImage', locale })}
          />
          <Container maxWidth={false}>
            <div className={clsx(classes.containerNarrow, classes.heroInner)}>
              {name && (
                <Typography
                  variant="h1"
                  className={classes.title}
                  {...ContentfulLivePreview.getProps({ entryId: id, fieldId: 'name', locale })}
                >
                  {name}
                </Typography>
              )}
              {shortDescription && (
                <Typography
                  className={classes.subtitle}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: 'shortDescription',
                    locale,
                  })}
                >
                  {shortDescription}
                </Typography>
              )}
            </div>
          </Container>
        </div>
      )}
      {body && (
        <div {...ContentfulLivePreview.getProps({ entryId: id, fieldId: 'body', locale })}>
          <CtfRichtext
            {...body}
            containerClassName={classes.container}
            gridClassName={classes.containerNarrow}
          />
        </div>
      )}
    </div>
  );
};

export default CtfBusinessInfo;
