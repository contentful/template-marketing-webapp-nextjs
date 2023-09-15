import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmCtaFeatureBlockieldsFragment } from './__generated/ctf-cta-feature-block.generated';

export const CtaFeatureBlock = (props: AmCtaFeatureBlockieldsFragment) => {
  const {
    sys: { id },
  } = props;
  return (
    <div id="block-am-who-we-are">
      <div className="who-we-are" id="who_we_are">
        <div className="who-we-are-inner">
          <div className="who-we-are-cont">
            <div className="who-we-are-cont-left">
              <div className="who-we-are-title">Who we are</div>
              <div className="who-we-are-text">
                We are the consulting firm known for asking tough questions, listening well, digging
                in and rolling up our sleeves. We are fact-driven and action-oriented. We move our
                clients forward, to where they need to be. We are A&amp;M.
              </div>
              <div className="who-we-are-link link-blue-arrow">
                <a href="/about-am"> Learn more</a>
              </div>
            </div>
            <div className="who-we-are-cont-right">
              <div className="who-we-are-video">
                <div className="youtube-play-on-click">
                  <div className="youtube-play-on-click-container">
                    <a
                      style={{
                        backgroundImage:
                          'url("https://www.alvarezandmarsal.com/sites/default/files/oembed_thumbnails/Xp1GSj8kEl3R-2fcBlPnALwVyYzP7midoc8MQaSidlA.jpg")',
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
