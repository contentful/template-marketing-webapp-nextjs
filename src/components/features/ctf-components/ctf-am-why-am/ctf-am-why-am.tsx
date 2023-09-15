import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useMemo } from 'react';

import { AmWhyAmFieldsFragment } from './__generated/ctf-am-why-am.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
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
    fontSize: '3rem',
    fontWeight: 800,
    lineHeight: 1.08,
    maxWidth: '44rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.56,
    marginTop: theme.spacing(6),
    maxWidth: '46.9rem',
    '& p': {
      fontSize: '2.5rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(6),
  },
}));

export const CtfAmWhyAm = (props: AmWhyAmFieldsFragment) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    // Tutorial: uncomment the line below to make the Greeting field available to render
    // greeting,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
  } = props;
  const layout = useLayoutContext();

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
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <>
      <div id="block-am-why-am" style={{ boxSizing: 'border-box' }}>
        <div
          className="why-am-how-help"
          style={{
            boxSizing: 'border-box',
            backgroundColor: 'rgb(0, 36, 74)',
            color: 'white',
            padding: '60px 0px',
          }}
        >
          <div
            className="why-am-how-help-container"
            style={{
              boxSizing: 'border-box',
              padding: '0px 10px',
              margin: '0px auto',
              maxWidth: '1260px',
              width: '100%',
              display: 'grid',
              gap: '50px',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <div
              className="why-am"
              style={{
                boxSizing: 'border-box',
                gap: '30px',
                display: 'grid',
                alignSelf: 'flex-start',
              }}
            >
              <div className="why-am-top" style={{ boxSizing: 'border-box' }}>
                <div
                  className="why-am-title"
                  style={{
                    boxSizing: 'border-box',
                    fontWeight: 300,
                    lineHeight: '48px',
                    color: 'white',
                    position: 'relative',
                    paddingBottom: '15px',
                    marginLeft: '50px',
                    fontSize: '45px',
                  }}
                >
                  Why A&M
                </div>
              </div>
              <div
                className="why-am-main"
                style={{
                  boxSizing: 'border-box',
                  margin: '0px auto',
                  width: '100%',
                  position: 'relative',
                  backgroundColor: 'rgb(244, 244, 244)',
                  padding: '50px',
                }}
              >
                <div
                  className="why-am-text-head"
                  style={{
                    boxSizing: 'border-box',
                    marginBottom: '30px',
                    color: 'rgb(0, 36, 74)',
                    fontWeight: 300,
                    fontSize: '40px',
                    lineHeight: '46px',
                  }}
                >
                  Global Reach.
                  <br style={{ boxSizing: 'border-box' }} />
                  {'Local Approach.'}
                </div>
                <div
                  className="why-am-list"
                  style={{
                    boxSizing: 'border-box',
                    marginBottom: '20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                  }}
                >
                  <div className="why-am-list-item" style={{ boxSizing: 'border-box' }}>
                    <div
                      className="why-am-list-item-number"
                      style={{
                        boxSizing: 'border-box',
                        color: 'rgb(0, 133, 202)',
                        fontSize: '30px',
                        lineHeight: '44px',
                        letterSpacing: '0.66px',
                      }}
                    >
                      8000+
                    </div>
                    <div
                      className="why-am-list-item-label"
                      style={{
                        boxSizing: 'border-box',
                        textTransform: 'uppercase',
                        letterSpacing: '4.18px',
                        color: 'rgb(0, 36, 74)',
                        fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '21px',
                      }}
                    >
                      Employees
                    </div>
                  </div>
                  <div className="why-am-list-item" style={{ boxSizing: 'border-box' }}>
                    <div
                      className="why-am-list-item-number"
                      style={{
                        boxSizing: 'border-box',
                        color: 'rgb(0, 133, 202)',
                        fontSize: '30px',
                        lineHeight: '44px',
                        letterSpacing: '0.66px',
                      }}
                    >
                      6
                    </div>
                    <div
                      className="why-am-list-item-label"
                      style={{
                        boxSizing: 'border-box',
                        textTransform: 'uppercase',
                        letterSpacing: '4.18px',
                        color: 'rgb(0, 36, 74)',
                        fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '21px',
                      }}
                    >
                      Continents
                    </div>
                  </div>
                  <div className="why-am-list-item" style={{ boxSizing: 'border-box' }}>
                    <div
                      className="why-am-list-item-number"
                      style={{
                        boxSizing: 'border-box',
                        color: 'rgb(0, 133, 202)',
                        fontSize: '30px',
                        lineHeight: '44px',
                        letterSpacing: '0.66px',
                      }}
                    >
                      40
                    </div>
                    <div
                      className="why-am-list-item-label"
                      style={{
                        boxSizing: 'border-box',
                        textTransform: 'uppercase',
                        letterSpacing: '4.18px',
                        color: 'rgb(0, 36, 74)',
                        fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '21px',
                      }}
                    >
                      Years
                    </div>
                  </div>
                  <div className="why-am-list-item" style={{ boxSizing: 'border-box' }}>
                    <div
                      className="why-am-list-item-number"
                      style={{
                        boxSizing: 'border-box',
                        color: 'rgb(0, 133, 202)',
                        fontSize: '30px',
                        lineHeight: '44px',
                        letterSpacing: '0.66px',
                      }}
                    >
                      76
                    </div>
                    <div
                      className="why-am-list-item-label"
                      style={{
                        boxSizing: 'border-box',
                        textTransform: 'uppercase',
                        letterSpacing: '4.18px',
                        color: 'rgb(0, 36, 74)',
                        fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '21px',
                      }}
                    >
                      Offices
                    </div>
                  </div>
                  <div className="why-am-list-item" style={{ boxSizing: 'border-box' }}>
                    <div
                      className="why-am-list-item-number"
                      style={{
                        boxSizing: 'border-box',
                        color: 'rgb(0, 133, 202)',
                        fontSize: '30px',
                        lineHeight: '44px',
                        letterSpacing: '0.66px',
                      }}
                    >
                      34
                    </div>
                    <div
                      className="why-am-list-item-label"
                      style={{
                        boxSizing: 'border-box',
                        textTransform: 'uppercase',
                        letterSpacing: '4.18px',
                        color: 'rgb(0, 36, 74)',
                        fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '21px',
                      }}
                    >
                      Countries
                    </div>
                  </div>
                </div>
                <div
                  className="why-am-link"
                  style={{
                    boxSizing: 'border-box',
                    transition: 'all 0.5s ease 0s',
                    position: 'relative',
                    display: 'inline-flex',
                    marginTop: '30px',
                  }}
                >
                  <a
                    href="https://www.alvarezandmarsal.com/global-locations"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      height: '45px',
                      paddingLeft: '65px',
                      paddingRight: '15px',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '1.6px',
                      zIndex: 2,
                      lineHeight: '28px',
                      color: 'rgb(0, 133, 202)',
                      fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                    }}
                  >
                    Our Locations
                  </a>
                </div>
              </div>
            </div>
            <div
              className="how-help-client"
              style={{ boxSizing: 'border-box', gap: '30px', display: 'grid' }}
            >
              <div className="how-help-client-top" style={{ boxSizing: 'border-box' }}>
                <div
                  className="how-help-client-title"
                  style={{
                    boxSizing: 'border-box',
                    lineHeight: 1,
                    textTransform: 'capitalize',
                    fontWeight: 300,
                    borderBottom: '2px solid rgb(188, 188, 188)',
                    fontSize: '45px',
                    paddingBottom: '20px',
                  }}
                >
                  How we help our clients
                </div>
              </div>
              <div className="how-help-client-main" style={{ boxSizing: 'border-box' }}>
                <div
                  className="how-help-client-vocabulary"
                  style={{
                    boxSizing: 'border-box',
                    gap: '10px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    textTransform: 'uppercase',
                    marginBottom: '30px',
                    fontFamily: '"Helvetica Neue LT Std Ex", Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '3px',
                  }}
                >
                  <div
                    className="how-help-client-vocabulary-item is-active"
                    style={{
                      boxSizing: 'border-box',
                      padding: '4px 0px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '14px',
                      lineHeight: '19px',
                      backgroundColor: 'rgb(0, 133, 202)',
                      color: 'white',
                    }}
                  >
                    Services
                  </div>
                  <div
                    className="how-help-client-vocabulary-item"
                    style={{
                      boxSizing: 'border-box',
                      padding: '4px 0px',
                      backgroundColor: 'rgb(217, 217, 217)',
                      cursor: 'pointer',
                      color: 'rgb(147, 147, 147)',
                      textAlign: 'center',
                      fontSize: '14px',
                      lineHeight: '19px',
                    }}
                  >
                    Industries
                  </div>
                </div>
                <div
                  className="how-help-client-list"
                  style={{ boxSizing: 'border-box', minHeight: '380px' }}
                >
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/aerospace-defense-aviation-space"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Aerospace, Defense, Aviation & Space'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/automotive-and-Industrials"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Automotive & Industrials'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/business-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Business Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/consumer-products"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Consumer Products'}
                  </a>
                  <a
                    className="how-help-client-list-item is-active"
                    href="https://www.alvarezandmarsal.com/expertise/corporate-performance-improvement"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      borderBottomColor: 'rgb(38, 128, 235)',
                      position: 'relative',
                      color: 'rgb(38, 128, 235)',
                    }}
                  >
                    {'Corporate Performance Improvement'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/digital"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Digital'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/digital-and-technology-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Digital & Technology Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/disputes-investigations"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Disputes and Investigations'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/education"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Education'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/energy"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Energy'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/environmental-disputes"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Environmental Disputes'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/environmental-social-governance-esg-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Environmental, Social & Governance (ESG) Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/financial-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Financial Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/healthcare"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Healthcare'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/infrastructure-capital-projects"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Infrastructure & Capital Projects'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/media-entertainment"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Media & Entertainment'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/pharmaceuticals"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Pharmaceuticals'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/private-equity-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Private Equity Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/public-sector"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Public Sector Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/real-estate"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Real Estate'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/regulatoryrisk-compliance"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Regulatory & Risk Advisory'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/restructuring-turnaround"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                    }}
                  >
                    {'Restructuring & Turnaround'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/retail"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Retail'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/semiconductors"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Semiconductors'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/software-technology-services"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Software, Technology & Services'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/tax"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Tax'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/transportation-logistics"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Transportation & Logistics'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/industries/travel-hospitality-and-leisure"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Travel, Hospitality and Leisure'}
                  </a>
                  <a
                    className="how-help-client-list-item"
                    href="https://www.alvarezandmarsal.com/expertise/valuation"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      padding: '10px 25px 10px 0px',
                      borderBottom: '1px solid rgb(109, 117, 126)',
                      width: '100%',
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '32px',
                      display: 'none',
                    }}
                  >
                    {'Valuation'}
                  </a>
                </div>
                <div
                  className="how-help-client-navigation"
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '20px',
                    opacity: 1,
                  }}
                >
                  <div
                    className="how-help-client-page"
                    style={{
                      boxSizing: 'border-box',
                      flex: '1 1 0%',
                      display: 'flex',
                      width: 'calc(100% - 100px)',
                    }}
                  >
                    <div
                      className="how-help-client-page-item active"
                      style={{
                        boxSizing: 'border-box',
                        flex: '1 1 0%',
                        height: '4px',
                        cursor: 'pointer',
                        backgroundColor: 'blue',
                      }}
                    />
                    <div
                      className="how-help-client-page-item"
                      style={{
                        boxSizing: 'border-box',
                        flex: '1 1 0%',
                        height: '4px',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                  <div
                    className="how-help-client-arrow"
                    style={{
                      boxSizing: 'border-box',
                      width: '100px',
                      display: 'flex',
                    }}
                  >
                    <div
                      className="how-help-client-arrow-prev"
                      style={{
                        boxSizing: 'border-box',
                        transform: 'rotate(180deg)',
                        background:
                          'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/arrow-right-white-64.png") center center / contain no-repeat transparent',
                        cursor: 'pointer',
                        marginLeft: '15px',
                        height: '35px',
                        width: '35px',
                      }}
                    />
                    <div
                      className="how-help-client-arrow-next"
                      style={{
                        boxSizing: 'border-box',
                        background:
                          'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/arrow-right-white-64.png") center center / contain no-repeat transparent',
                        cursor: 'pointer',
                        marginLeft: '15px',
                        height: '35px',
                        width: '35px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background-color: rgb(238, 238, 238);
  font-family: "Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif;
}
`,
        }}
      />
    </>
  );
};
