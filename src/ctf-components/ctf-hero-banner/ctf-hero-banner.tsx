import { Container, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useMemo, useContext } from 'react';

import { HeroBannerFragment } from './__generated__/HeroBannerFragment';

import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
  },

  fullScreen: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MD})`,
    [theme.breakpoints.up('md')]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
    },
    '@media (min-height: 91.2em)': {
      minHeight: '91.2rem',
    },
  },

  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '125.8rem',
    padding: theme.spacing(33, 0, 33),
    position: 'relative',
    width: '100%',
    '@media (min-height: 91.2em)': {
      padding: theme.spacing(39, 0, 39),
    },
  },

  partialBgContainer: {
    display: 'none',
    height: '100%',
    left: '50%',
    maxWidth: '192rem',
    position: 'absolute',
    top: 0,
    transform: 'translateX(-50%)',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  partialBg: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
  },

  headline: {
    fontSize: '3.4rem',
    maxWidth: '44rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(6),
    maxWidth: '46.9rem',
    '& p': {
      fontSize: '2rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(6),
  },
}));

export interface CtfHeroBannerInterface extends HeroBannerFragment { }

const CtfHeroBanner = (props: CtfHeroBannerInterface) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    heroSize: heroSizeBoolean,
  } = props;
  const layout = useContext(LayoutContext);

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true ? 'full_screen' : 'fixed_height';
  const backgroundImage = useMemo(
    () =>
      image
        ? `${image.url}?w=${imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2}`
        : undefined,
    [image, imageStyle, layout.containerWidth],
  );
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      className={clsx(classes.root, heroSize === 'full_screen' ? classes.fullScreen : null)}
      style={{
        backgroundImage:
          imageStyle === 'full' && backgroundImage ? `url(${backgroundImage!})` : undefined,
        backgroundColor: colorConfig.backgroundColor,
      }}>
      {imageStyle === 'partial' && backgroundImage && (
        <div className={classes.partialBgContainer}>
          <div
            className={classes.partialBg}
            style={{
              backgroundImage: `url(${backgroundImage!})`,
            }}
          />
        </div>
      )}
      <div className={classes.innerContainer}>
        {headline && (
          <Typography
            variant="h1"
            className={classes.headline}
            style={{ color: colorConfig.headlineColor }}>
            {headline}
          </Typography>
        )}
        {bodyText && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'hero-banner-body' }}>
            <div style={{ color: colorConfig.textColor }}>
              <CtfRichtext {...bodyText} className={classes.body} />
            </div>
          </LayoutContext.Provider>
        )}
        {targetPage && ctaText && (
          <div className={classes.ctaContainer}>
            {targetPage.__typename === 'Page' && (
              <PageLink
                page={targetPage}
                variant="contained"
                color={colorConfig.buttonColor}
                isButton>
                {ctaText}
              </PageLink>
            )}
            {targetPage.__typename === 'Post' && (
              <PostLink
                post={targetPage}
                variant="contained"
                color={colorConfig.buttonColor}
                isButton>
                {ctaText}
              </PostLink>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CtfHeroBanner;
