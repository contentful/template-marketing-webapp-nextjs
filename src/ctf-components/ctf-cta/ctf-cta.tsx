import { Container, Theme, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import { CtaFieldsFragment } from '@ctf-components/ctf-cta/__generated/ctf-cta.generated';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import PageLink from '@src/components/link/page-link';
import PostLink from '@src/components/link/post-link';
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

export const CtfCta = (props: CtaFieldsFragment) => {
  const { headline, subline, targetPage, ctaText, colorPalette, urlParameters } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      className={classes.root}
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      <div className={classes.innerContainer}>
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
                urlParams={urlParameters ?? ''}
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
                urlParams={urlParameters ?? ''}
              >
                {ctaText}
              </PostLink>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
