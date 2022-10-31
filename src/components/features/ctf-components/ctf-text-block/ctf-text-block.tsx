import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { SectionHeadlines } from '@src/components/features/section-headlines';
import { getColorConfigFromPalette } from '@src/theme';

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

export const CtfTextBlock = ({
  headline,
  subline,
  body,
  colorPalette,
}: TextBlockFieldsFragment) => {
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}>
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
        {body && (
          <div
            style={{
              color: colorConfig.textColor,
            }}>
            <CtfRichtext {...body} />
          </div>
        )}
      </div>
    </Container>
  );
};
