import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { InfoBlockFieldsFragment } from './__generated/ctf-info-block.generated';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { SectionHeadlines } from '@src/components/features/section-headlines';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(19, 0, 19),
  },
  innerContainerAfterInfoBlock: {
    marginTop: theme.spacing(-19),
    paddingTop: 0,
  },
  sectionHeadlines: {
    marginBottom: theme.spacing(12),
  },
  blocksGrid: {
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: '-5rem',
    marginTop: '-5rem',
  },
  block: {
    marginLeft: '5rem',
    marginTop: '5rem',
    maxWidth: '39rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'calc((100% - 15rem) / 3)',
      '@supports not (width: calc((100% - 15rem) / 3))': {
        width: '29%',
      },
    },
  },
  itemIcon: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 0,
    height: '11.3rem',
    justifyContent: 'center',
    width: '11.3rem',
  },
  itemText: {
    '& .MuiContainer-root:last-child .MuiTypography-body1': {
      marginBottom: 0,
    },
    '& .MuiContainer-root:first-child': {
      marginTop: '3rem',
    },
    '& h3': {
      fontSize: '1.8rem',
      marginBottom: '2rem',
      marginTop: '3rem',
    },
    '& p': {
      color: '#6f6f6f',
      fontSize: '1.8rem',
      lineHeight: 1.52,
    },
  },
}));

export interface CtfInfoBlockPropsInterface extends InfoBlockFieldsFragment {
  previousComponent?: string | null;
}

export const CtfInfoBlock = (props: CtfInfoBlockPropsInterface) => {
  const {
    headline,
    subline,
    block1Image,
    block1Body,
    block2Image,
    block2Body,
    block3Image,
    block3Body,
    previousComponent,
    colorPalette,
    sys: { id },
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const classes = useStyles();
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      <div
        className={clsx(
          classes.innerContainer,
          previousComponent === 'ComponentInfoBlock' && !headline && !subline
            ? classes.innerContainerAfterInfoBlock
            : null,
        )}
      >
        <SectionHeadlines
          headline={headline}
          headlineProps={{
            style: { color: colorConfig.headlineColor },
            ...inspectorMode({ fieldId: 'headline' }),
          }}
          subline={subline}
          sublineProps={{
            style: { color: colorConfig.textColor },
            ...inspectorMode({ fieldId: 'subline' }),
          }}
          className={classes.sectionHeadlines}
        />
        <LayoutContext.Provider value={{ ...defaultLayout, parent: 'info-block' }}>
          <div className={classes.blocksGrid}>
            {block1Body && (
              <div className={classes.block}>
                {block1Image && (
                  <div
                    className={classes.itemIcon}
                    {...inspectorMode({
                      fieldId: 'block1Image',
                    })}
                  >
                    <CtfAsset {...block1Image} showDescription={false} />
                  </div>
                )}
                <div
                  style={{ color: colorConfig.textColor }}
                  {...inspectorMode({
                    fieldId: 'block1Body',
                  })}
                >
                  <CtfRichtext {...block1Body} className={classes.itemText} />
                </div>
              </div>
            )}
            {block2Body && (
              <div className={classes.block}>
                {block2Image && (
                  <div
                    className={classes.itemIcon}
                    {...inspectorMode({
                      fieldId: 'block2Image',
                    })}
                  >
                    <CtfAsset {...block2Image} showDescription={false} />
                  </div>
                )}
                <div
                  style={{ color: colorConfig.textColor }}
                  {...inspectorMode({
                    fieldId: 'block2Body',
                  })}
                >
                  <CtfRichtext {...block2Body} className={classes.itemText} />
                </div>
              </div>
            )}
            {block3Body && (
              <div className={classes.block}>
                {block3Image && (
                  <div
                    className={classes.itemIcon}
                    {...inspectorMode({
                      fieldId: 'block3Image',
                    })}
                  >
                    <CtfAsset {...block3Image} showDescription={false} />
                  </div>
                )}
                <div
                  style={{ color: colorConfig.textColor }}
                  {...inspectorMode({
                    fieldId: 'block3Body',
                  })}
                >
                  <CtfRichtext {...block3Body} className={classes.itemText} />
                </div>
              </div>
            )}
          </div>
        </LayoutContext.Provider>
      </div>
    </Container>
  );
};
