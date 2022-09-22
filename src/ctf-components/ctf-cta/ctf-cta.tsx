import { Container, Theme, makeStyles, Typography } from '@material-ui/core';
import { PersonalizedComponent } from '@ninetailed/experience.js-next';
import React from 'react';

import { CtaFragment } from './__generated__/CtaFragment';

import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
import PersonalizationFrame from '@src/components/personalization-frame';
import { useContentfulContext } from '@src/contentful-context';
import { WrapIf } from '@src/jsx-utils';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';
import optimizeLineBreak from '@src/typography/optimize-line-break';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
  },
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '93.4rem',
    padding: theme.spacing(19, 0, 19),
  },
  headline: {
    fontWeight: 'bold',
  },
  subline: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(8),
  },
  ctaContainer: {
    marginTop: theme.spacing(8),
  },
}));

export interface CtfCtaPropsInterface extends CtaFragment {}

const CtfCta: PersonalizedComponent<CtfCtaPropsInterface> = props => {
  const {
    headline,
    subline,
    targetPage,
    ctaText,
    colorPalette,
    urlParameters,
    ninetailed,
    ntVariantsCollection,
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const classes = useStyles();
  const { xrayActive } = useContentfulContext();

  const isPersonalized =
    ntVariantsCollection?.items !== undefined && ntVariantsCollection.items.length > 0;

  return (
    <WrapIf
      when={xrayActive === true && isPersonalized === true}
      wrap={children => (
        <PersonalizationFrame audienceId={ninetailed?.audience.id ?? null}>
          {children}
        </PersonalizationFrame>
      )}>
      <Container
        maxWidth={false}
        className={classes.root}
        style={{
          backgroundColor: colorConfig.backgroundColor,
        }}>
        <div className={classes.innerContainer}>
          {headline && (
            <Typography
              variant="h1"
              component="h2"
              className={classes.headline}
              style={{ color: colorConfig.headlineColor }}>
              {optimizeLineBreak(headline)}
            </Typography>
          )}
          {subline && (
            <LayoutContext.Provider value={{ ...defaultLayout, parent: 'cta-subline' }}>
              <div style={{ color: colorConfig.textColor }}>
                <CtfRichtext {...subline} className={classes.subline} />
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
                  urlParams={urlParameters ?? ''}>
                  {ctaText}
                </PageLink>
              )}
              {targetPage.__typename === 'Post' && (
                <PostLink
                  post={targetPage}
                  variant="contained"
                  color={colorConfig.buttonColor}
                  isButton
                  urlParams={urlParameters ?? ''}>
                  {ctaText}
                </PostLink>
              )}
            </div>
          )}
        </div>
      </Container>
    </WrapIf>
  );
};

export default CtfCta;
