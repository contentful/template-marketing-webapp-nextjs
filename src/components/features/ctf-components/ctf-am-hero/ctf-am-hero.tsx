import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmHeroFieldsFragment } from './__generated/am-hero.generated';
import { Splide, SplideSlide } from '@splidejs/react-splide';
export const AmHero = (props: AmHeroFieldsFragment) => {
  const layout = useLayoutContext();
  const {
    backgroundImage,
    ctaCopy,
    ctaTargetLink,
    headerCopy,
    subHeaderCopy,
    sys: { id },
  } = props;
  return (
    <div className="views-element-container" id="block-views-block-front-slide-main">
      <div>
        <div className="view-front-splide js-view-dom-id-fc2cae5981734f7a28a1efa6572eed261fa5cd302ac886baedb390a59c3b2b42">
          <Splide
            options={{
              count: 3,
              type: 'fade',
              rewind: true,
              speed: 500,
              rewindSpeed: 500,
              easing: 'linear',
            }}
          >
            <SplideSlide>
              <div className="home-slide">
                <div className="home-slide-container">
                  <div className="home-slide-image">
                    <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                      {' '}
                      <img
                        src="https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_tag_aus_600x600px_fin.jpg?itok=vbhh6xM1"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="home-slide-wrapper">
                    <div className="home-slide-text-head">
                      <div className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted">
                        <h2 className="">
                          A&amp;M’s Transaction Advisory Group Expands its Services to Australia
                        </h2>
                        <p className="">&nbsp;</p>
                      </div>
                    </div>
                    <div className="home-slide-text">
                      <div className="field_text field--name-field_text field--name-field-text text-formatted">
                        <p>
                          The practice has appointed five new Managing Directors in Australia,
                          underscoring its strategic growth and the firm’s continued commitment to
                          integrating its private equity services and operations in the region.
                          &nbsp;
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="field_link_to field--name-field_link_to field--name-field-link-to">
                        <a
                          href="https://www.alvarezandmarsal.com/insights/alvarez-marsals-global-transaction-advisory-group-expands-australia-adding-five-managing"
                          className=""
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_tag_aus_1682x879_fin.jpg")',
                  }}
                  className="home-slide-image-bg"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="home-slide">
                <div className="home-slide-container">
                  <div className="home-slide-image">
                    <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                      {' '}
                      <img
                        src="https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_me_survey_600x600px_fin.jpg?itok=vYwHIYhp"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="home-slide-wrapper">
                    <div className="home-slide-text-head">
                      <div className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted">
                        <h2>
                          A&amp;M Releases the Turnaround and Restructuring Survey Results for Q2
                        </h2>
                      </div>
                    </div>
                    <div className="home-slide-text">
                      <div className="field_text field--name-field_text field--name-field-text text-formatted">
                        <p>
                          Survey results indicate concerns related to macroeconomic conditions in
                          the region are softening, with some predicting businesses will still
                          experience a level of distress for some time.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="field_link_to field--name-field_link_to field--name-field-link-to">
                        <a
                          href="https://www.alvarezandmarsal.com/insights/alvarez-marsals-middle-east-turnaround-and-restructuring-survey-reflects-softening"
                          className=""
                          tabIndex={-1}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_me_survey_1682x879_fin.jpg")',
                  }}
                  className="home-slide-image-bg"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="home-slide">
                <div className="home-slide-container">
                  <div className="home-slide-image">
                    <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                      {' '}
                      <img
                        src="https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_emea_award_600x600px.jpg?itok=x426DfUi"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="home-slide-wrapper">
                    <div className="home-slide-text-head">
                      <div className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted">
                        <h2>
                          <b className="">
                            A&amp;M Wins RealDeals&nbsp; &nbsp; &nbsp; Private Equity Award&nbsp;
                          </b>
                        </h2>
                        <p>&nbsp;</p>
                        <p className="">&nbsp;</p>
                      </div>
                    </div>
                    <div className="home-slide-text">
                      <div className="field_text field--name-field_text field--name-field-text text-formatted">
                        <p>
                          The firm’s Transaction Advisory Group in EMEA won the Financial Due
                          Diligence Provider of the Year award for demonstrating how it created a
                          bespoke value-driven service with unmatched insight into a business issue.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="field_link_to field--name-field_link_to field--name-field-link-to">
                        <a
                          href="https://www.alvarezandmarsal.com/awards"
                          className=""
                          tabIndex={-1}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_emea_award_1682x879_fin_0.jpg")',
                  }}
                  className="home-slide-image-bg"
                />
              </div>
            </SplideSlide>
            <div className="splide__navigation">
              <ul
                className="splide__pagination splide__pagination--ltr"
                role="tablist"
                aria-label="Select a slide to show"
                style={{ width: 1880 }}
              >
                <li role="presentation">
                  <button
                    className="splide__pagination__page is-active"
                    type="button"
                    role="tab"
                    aria-controls="splide-78457ecf7ce-slide01"
                    aria-label="Go to slide 1"
                    aria-selected="true"
                  />
                </li>
                <li role="presentation">
                  <button
                    className="splide__pagination__page"
                    type="button"
                    role="tab"
                    aria-controls="splide-78457ecf7ce-slide02"
                    aria-label="Go to slide 2"
                    tabIndex={-1}
                  />
                </li>
                <li role="presentation">
                  <button
                    className="splide__pagination__page"
                    type="button"
                    role="tab"
                    aria-controls="splide-78457ecf7ce-slide03"
                    aria-label="Go to slide 3"
                    tabIndex={-1}
                  />
                </li>
              </ul>
              <div className="splide__arrows splide__arrows--ltr">
                <button
                  className="splide__arrow splide__arrow--prev"
                  type="button"
                  aria-label="Go to last slide"
                  aria-controls="splide-78457ecf7ce-track"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                    focusable="false"
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  type="button"
                  aria-label="Next slide"
                  aria-controls="splide-78457ecf7ce-track"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                    focusable="false"
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </Splide>
          <div className="scroll-down fixed">
            <div>Scroll Down</div>
            <img
              src="https://www.alvarezandmarsal.com/themes/custom/am/images/icons/arrow-right-white-64.png"
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
