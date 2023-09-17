import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmTestimonialFieldsFragment } from './__generated/ctf-testimonial.generated';

export const Testimonial = (props: AmTestimonialFieldsFragment) => {
  const {
    sys: { id },
    testimonialBody,
    witness,
    witnessTitle,
    featuredMedia,
    backgroundImage,
  } = props;
  return (
    <div className="views-element-container" id="block-views-block-slide-testimonial-main">
      <div>
        <div className="view-slide-testimonial js-view-dom-id-d563103fe2b42f4965310b79f463e978a8c764fcc38708e9f5f0700061932d8e">
          <div
            className="splide splide--default blazy splide--view splide--view--slide-testimonial splide--view--slide-testimonial--main splide--view--slide-testimonial-block-main splide--optionset--slide-testimonial is-paginated splide--fade splide--ltr splide--draggable is-active is-initialized is-mounted"
            data-blazy=""
            id="splide-47ee28b9e2b"
            data-splide='{"count":2,"type":"fade","rewind":true,"speed":0,"waitForTransition":false,"autoplay":true}'
            data-once="blazy splide"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="splide__slider">
              <div
                className="splide__track splide__track--fade splide__track--ltr splide__track--draggable"
                id="splide-47ee28b9e2b-track"
                style={{ paddingLeft: 0, paddingRight: 0 }}
                aria-live="off"
                aria-atomic="true"
                aria-busy="false"
              >
                <ul className="splide__list" id="splide-47ee28b9e2b-list" role="presentation">
                  {' '}
                  <li
                    className="splide__slide slide slide--0 is-active is-visible"
                    id="splide-47ee28b9e2b-slide01"
                    role="tabpanel"
                    aria-roledescription="slide"
                    aria-label="1 of 2"
                    style={{
                      width: 'calc(100%)',
                      transition: 'opacity 0ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s',
                    }}
                    tabIndex={0}
                  >
                    {' '}
                    <div className="slide-testimonial">
                      <div className="slide-testimonial-container">
                        <div className="slide-testimonial-left">
                          <div className="field_slide_background field--name-field_slide_background field--name-field-slide-background">
                            {' '}
                            <img
                              src="/sites/default/files/slide/background/418644_gess_am_homepage_graphic_511x563px_0.jpg"
                              width={511}
                              height={563}
                              alt=""
                              typeof="foaf:Image"
                            />
                          </div>
                          <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                            {' '}
                            <img
                              src="/sites/default/files/slide/image/tony_alvarez_1.png"
                              width={372}
                              height={377}
                              alt=""
                              typeof="foaf:Image"
                            />
                          </div>
                        </div>
                        <div className="slide-testimonial-right">
                          <div className="slide-testimonial-wrapper">
                            <div className="field_text field--name-field_text field--name-field-text text-formatted">
                              <p>{testimonialBody}</p>
                            </div>
                            <div className="name field--name-name">{witness}</div>
                            <div className="field_job_title field--name-field_job_title field--name-field-job-title">
                              {witnessTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>{' '}
                  <li
                    className="splide__slide slide slide--1 is-next"
                    id="splide-47ee28b9e2b-slide02"
                    role="tabpanel"
                    aria-roledescription="slide"
                    aria-label="2 of 2"
                    style={{
                      width: 'calc(100%)',
                      transition: 'opacity 0ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s',
                    }}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    {' '}
                    <div className="slide-testimonial">
                      <div className="slide-testimonial-container">
                        <div className="slide-testimonial-left">
                          <div className="field_slide_background field--name-field_slide_background field--name-field-slide-background">
                            {' '}
                            {backgroundImage?.url && (
                              <img
                                src={backgroundImage?.url}
                                width={511}
                                height={563}
                                alt=""
                                typeof="foaf:Image"
                              />
                            )}
                          </div>
                          <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                            {' '}
                            {featuredMedia?.url && (
                              <img
                                src={featuredMedia?.url}
                                width={370}
                                height={372}
                                alt=""
                                typeof="foaf:Image"
                              />
                            )}
                          </div>
                        </div>
                        <div className="slide-testimonial-right">
                          <div className="slide-testimonial-wrapper">
                            <div className="field_text field--name-field_text field--name-field-text text-formatted">
                              <p>We don't believe in hurry up and wait.</p>
                            </div>
                            <div className="name field--name-name">Bryan Marsal</div>
                            <div className="field_job_title field--name-field_job_title field--name-field-job-title">
                              Chief Executive Officer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="splide__navigation">
                <div className="splide__navigation__wrap">
                  <ul
                    className="splide__pagination splide__pagination--ltr"
                    role="tablist"
                    aria-label="Select a slide to show"
                  >
                    <li role="presentation">
                      <button
                        className="splide__pagination__page is-active"
                        type="button"
                        role="tab"
                        aria-controls="splide-47ee28b9e2b-slide01"
                        aria-label="Go to slide 1"
                        aria-selected="true"
                      />
                    </li>
                    <li role="presentation">
                      <button
                        className="splide__pagination__page"
                        type="button"
                        role="tab"
                        aria-controls="splide-47ee28b9e2b-slide02"
                        aria-label="Go to slide 2"
                        tabIndex={-1}
                      />
                    </li>
                  </ul>
                  <div className="splide__arrows splide__arrows--ltr">
                    <button
                      className="splide__arrow splide__arrow--prev"
                      type="button"
                      aria-label="Go to last slide"
                      aria-controls="splide-47ee28b9e2b-track"
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
                      aria-controls="splide-47ee28b9e2b-track"
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
              </div>
            </div>
            <div className="splide__autoplay">
              <button className="splide__play" aria-label="Play">
                Play
              </button>
              <button className="splide__pause" aria-label="Pause">
                Pause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
