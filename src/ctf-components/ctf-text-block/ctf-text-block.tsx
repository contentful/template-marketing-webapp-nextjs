import React from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import SectionHeadlines from '@src/components/section-headlines/section-headlines';
import { getColorConfigFromPalette } from '@src/theme';
import { TextBlockFragment } from './__generated__/TextBlockFragment';

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(19, 0, 19),
  },
  sectionHeadlines: {
    marginBottom: theme.spacing(12),
  },
}));

export interface CtfTextBlockPropsInterface extends TextBlockFragment {}

const CtfTextBlock = (props: CtfTextBlockPropsInterface) => {
  const { headline, subline, body, colorPalette } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      <div className={classes.innerContainer}>
        <SectionHeadlines
          headline={headline}
          headlineProps={{
            style: { color: colorConfig.headlineColor },
          }}
          subline={subline}
          sublineProps={{
            style: { color: colorConfig.textColor },
          }}
          className={classes.sectionHeadlines}
        />
        {(body != null) && (
          <div
            style={{
              color: colorConfig.textColor,
            }}
          >
            <CtfRichtext {...body} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default CtfTextBlock;
