import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmCtaFeatureBlockieldsFragment } from './__generated/ctf-cta-feature-block.generated';
import classes from './ctf-cta-feature-block.module.css';
export const CtaFeatureBlock = (props: AmCtaFeatureBlockieldsFragment) => {
  const {
    sys: { id },
    headline,
    bodyCopy,
    backgroundImage,
    ctaCopy,
    ctaTargetLink,
    featuredMedia,
  } = props;
  console.log(backgroundImage?.url);
  return (
    <div id="block-am-who-we-are">
      <div className="who-we-are" id="who_we_are">
        <div className="who-we-are-inner">
          <div className="who-we-are-cont">
            <div className="who-we-are-cont-left">
              <div className="who-we-are-title">{headline}</div>
              <div className="who-we-are-text">{bodyCopy}</div>
              {ctaTargetLink && (
                <div className="who-we-are-link link-blue-arrow">
                  <a href={ctaTargetLink}> {ctaCopy}</a>
                </div>
              )}
            </div>
            <div className="who-we-are-cont-right">
              <div className="who-we-are-video">
                <div
                  className={classes.backgroundImage}
                  style={{
                    backgroundImage: `url("${backgroundImage?.url}")`,
                  }}
                ></div>
                <div className="youtube-play-on-click">
                  <div className="youtube-play-on-click-container">
                    <a
                      style={{
                        backgroundImage: `url("${featuredMedia?.url}")`,
                      }}
                      href="https://www.youtube.com/watch?v=_oF5oY5TAQE"
                      video-id=""
                      data-video-id={0}
                      className="video-show-btn youtube-play-on-click-image"
                    >
                      <div className="youtube-play-on-click-arrow" />
                    </a>
                    <div className="youtube-play-on-click-video-container" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
