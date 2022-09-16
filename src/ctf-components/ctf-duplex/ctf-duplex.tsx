import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { Container, Theme, makeStyles, Typography } from '@material-ui/core';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import optimizeLineBreak from '@src/typography/optimize-line-break';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';
import { PersonalizedComponent } from '@ninetailed/experience.js-next';
import { ContentfulContext } from '@pages/_app';
import { WrapIf } from '@src/jsx-utils';
import PersonalizationFrame from '@src/components/personalization-frame';
import { DuplexFragment } from './__generated__/DuplexFragment';

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
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
  innerContainerFull: {
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
      paddingTop: 0,
      '& $innerBody': {
        padding: theme.spacing(19, 0, 19),
      },
    },
  },
  innerBody: {
    order: 2,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: 'calc(50% - 2.5rem)',
    },
  },
  'innerBody-imageLeft': {
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  'innerBody-imageRight': {
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
  imageContainer: {
    maxWidth: '60rem',
    order: 1,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      width: 'calc(50% - 2.5rem)',
    },
  },
  imageContainerFull: {
    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-end',
    },
  },
  imageFixed: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: theme.spacing(7),

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },

    '&::before': {
      content: '""',
      display: 'block',
      paddingTop: '83.333%',
    },
  },
  imageFull: {
    marginBottom: theme.spacing(7),

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  'imageFull-imageLeftleft': {
    [theme.breakpoints.up('lg')]: {
      transform: 'translateX(-16rem)',
    },
  },
  'imageFull-imageLeftcenter': {
    [theme.breakpoints.up('lg')]: {
      transform: 'translateX(-8rem)',
    },
  },
  'imageFull-imageLeftright': {},
  'imageFull-imageRightleft': {},
  'imageFull-imageRightcenter': {
    [theme.breakpoints.up('lg')]: {
      transform: 'translateX(8rem)',
    },
  },
  'imageFull-imageRightright': {
    [theme.breakpoints.up('lg')]: {
      transform: 'translateX(16rem)',
    },
  },
  imageFullImage: {
    display: 'block',
    maxWidth: '100%',
  },
  headline: {
    fontSize: '3.4rem',
    maxWidth: '60.4rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(7),
    maxWidth: '51rem',
    '& .MuiTypography-body1': {
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
}));

export interface CtfDuplexPropsInterface extends DuplexFragment {}

const CtfDuplex: PersonalizedComponent<CtfDuplexPropsInterface> = (props) => {
  const {
    containerLayout: containerLayoutBoolean,
    image,
    imageStyle: imageStyleBoolean,
    headline,
    bodyText,
    targetPage,
    ctaText,
    colorPalette,
    imageAlignment: imageAlignmentParam,
    ninetailed,
    ntVariantsCollection,
  } = props;

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const containerLayout =
    containerLayoutBoolean === true ? 'imageLeft' : 'imageRight';
  const imageStyle = imageStyleBoolean ? 'fixed' : 'full';
  const backgroundImage = useMemo(
    () => (image ? `${image.url}?w=${600 * 2}` : undefined),
    [image],
  );
  const imageAlignment = useMemo(() => {
    if (imageAlignmentParam === null) {
      return 'center';
    }

    if (imageAlignmentParam === 'Left-aligned') {
      return 'left';
    }

    if (imageAlignmentParam === 'Right-aligned') {
      return 'right';
    }

    return 'center';
  }, [imageAlignmentParam]);
  const classes = useStyles();
  const { xrayActive } = useContext(ContentfulContext);

  const isPersonalized =
    ntVariantsCollection?.items !== undefined &&
    ntVariantsCollection.items.length > 0;

  return (
    <WrapIf
      when={xrayActive === true && isPersonalized === true}
      wrap={(children) => (
        <PersonalizationFrame audienceId={ninetailed?.audience.id ?? null}>
          {children}
        </PersonalizationFrame>
      )}
    >
      <Container
        maxWidth={false}
        style={{
          backgroundColor: colorConfig.backgroundColor,
        }}
      >
        <div
          className={clsx(
            classes.innerContainer,
            imageStyle === 'full' ? classes.innerContainerFull : undefined,
          )}
        >
          <div
            className={clsx(
              classes.innerBody,
              classes[`innerBody-${containerLayout}`],
            )}
          >
            {headline && (
              <Typography
                variant="h1"
                component="h2"
                className={classes.headline}
                style={{ color: colorConfig.headlineColor }}
              >
                {optimizeLineBreak(headline)}
              </Typography>
            )}
            {bodyText && (
              <LayoutContext.Provider
                value={{ ...defaultLayout, parent: 'duplex' }}
              >
                <div style={{ color: colorConfig.textColor }}>
                  <CtfRichtext {...bodyText} className={classes.body} />
                </div>
              </LayoutContext.Provider>
            )}
            {targetPage && targetPage.slug && (
              <div className={classes.ctaContainer}>
                {targetPage.__typename === 'Page' && (
                  <PageLink
                    page={targetPage}
                    variant="contained"
                    color={colorConfig.buttonColor}
                    isButton
                  >
                    {ctaText}
                  </PageLink>
                )}
                {targetPage.__typename === 'Post' && (
                  <PostLink
                    post={targetPage}
                    variant="contained"
                    color={colorConfig.buttonColor}
                    isButton
                  >
                    {ctaText}
                  </PostLink>
                )}
              </div>
            )}
          </div>
          <div
            className={clsx(
              classes.imageContainer,
              imageStyle === 'full' ? classes.imageContainerFull : undefined,
            )}
          >
            {imageStyle === 'fixed' && backgroundImage && (
              <div
                className={classes.imageFixed}
                style={{
                  backgroundImage: `url('${backgroundImage}')`,
                }}
              />
            )}
            {imageStyle === 'full' && image && (
              <div
                className={clsx(
                  classes.imageFull,
                  classes[`imageFull-${containerLayout}${imageAlignment}`],
                )}
              >
                <img
                  className={classes.imageFullImage}
                  alt={image.description || undefined}
                  src={`${image.url}?w=600`}
                  srcSet={`${image.url}?w=600 600w, ${image.url}?w=1200 1200w`}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </WrapIf>
  );
};

export default CtfDuplex;
