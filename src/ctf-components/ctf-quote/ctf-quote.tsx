import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { Container, Theme, makeStyles } from '@material-ui/core';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import { getColorConfigFromPalette } from '@src/theme';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import PersonalizationFrame from '@src/components/personalization-frame';
import { PersonalizedComponent } from '@ninetailed/experience.js-next';
import { ContentfulContext } from '@pages/_app';
import { WrapIf } from '@src/jsx-utils';
import { QuoteFragment } from './__generated__/QuoteFragment';

export interface CtfQuotePropsInterface extends QuoteFragment {}

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    // maxWidth: '126rem',
    maxWidth: (props: CtfQuotePropsInterface) =>
      !props.image ? '93.4rem' : '126rem',
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

    '& p': {
      fontSize: '2.5rem',
    },

    '& blockquote': {
      borderLeftWidth: 0,
      fontStyle: 'normal',
      paddingLeft: 0,
      color: (props: CtfQuotePropsInterface) => {
        const colorConfig = getColorConfigFromPalette(props.colorPalette || '');

        return colorConfig.headlineColor;
      },
      '& .MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
      '& p': {
        fontSize: '3.5rem',
        lineHeight: '1.3',
      },
    },

    '& figure': {
      display: 'inline-block',
      marginBottom: theme.spacing(6),
      maxWidth: '24rem',
    },
  },
  innerBodyFull: {
    flexShrink: 0,
    width: '100%',
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
}));

const CtfQuote: PersonalizedComponent<CtfQuotePropsInterface> = (props) => {
  const {
    imagePosition,
    image,
    quote,
    colorPalette,
    quoteAlignment: quoteAlignmentBoolean,
    ninetailed,
    ntVariantsCollection,
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const containerLayout = imagePosition === true ? 'imageLeft' : 'imageRight';
  const quoteAlignment = quoteAlignmentBoolean === true ? 'center' : 'left';
  const backgroundImage = useMemo(
    () => (image ? `${image.url}?w=${600 * 2}` : undefined),
    [image],
  );
  const classes = useStyles(props);
  const { xrayActive } = useContext(ContentfulContext);

  const isPersonalized =
    ntVariantsCollection?.items !== undefined &&
    ntVariantsCollection.items.length > 0;

  return (
    <WrapIf
      when={xrayActive && isPersonalized}
      wrap={(children) => (
        <PersonalizationFrame audienceId={ninetailed?.audience.id ?? null}>
          {children}
        </PersonalizationFrame>
      )}
    >
      <LayoutContext.Provider value={{ ...defaultLayout, parent: 'quote' }}>
        <Container
          maxWidth={false}
          style={{
            backgroundColor: colorConfig.backgroundColor,
          }}
        >
          <div className={classes.innerContainer}>
            <div
              className={clsx(
                classes.innerBody,
                classes[`innerBody-${containerLayout}`],
                backgroundImage ? undefined : classes.innerBodyFull,
              )}
            >
              {quote && (
                <div
                  style={{
                    color: colorConfig.textColor,
                    textAlign: quoteAlignment,
                  }}
                >
                  <CtfRichtext {...quote} />
                </div>
              )}
            </div>
            <div className={classes.imageContainer}>
              {backgroundImage && (
                <div
                  className={classes.imageFixed}
                  style={{
                    backgroundImage: `url('${backgroundImage}')`,
                  }}
                />
              )}
            </div>
          </div>
        </Container>
      </LayoutContext.Provider>
    </WrapIf>
  );
};

export default CtfQuote;
