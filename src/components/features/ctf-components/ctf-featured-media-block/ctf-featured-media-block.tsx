import React from 'react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmFeaturedMediaBlockFieldsFragment } from './__generated/ctf-featured-media-block.generated';
const splitArray = array => {
  const halfwayThrough = Math.floor(array.length / 2);
  const arrayFirstHalf = array.slice(0, halfwayThrough);
  return arrayFirstHalf;
};

function truncateString(yourString, maxLength) {
  // get the index of space after maxLength
  const index = yourString.indexOf(' ', maxLength);
  return index === -1 ? yourString : yourString.substring(0, index);
}
export const FeaturedMediaBlock = (props: AmFeaturedMediaBlockFieldsFragment) => {
  const { sys, headerText, featuredPodcast, featuredVideo, podcastsCollection, videosCollection } =
    props;
  const collection = [
    ...(splitArray(podcastsCollection?.items) || []),
    ...(splitArray(videosCollection?.items) || []),
  ];

  const [list, setList] = React.useState<any>({ items: collection });
  const [featured, setFeatured] = React.useState<any>(featuredPodcast);
  const [active, setActive] = React.useState('all');
  return (
    <div id="block-quicktabs-block-front-featured">
      <div
        className="quicktabs-wrapper"
        id="quicktabs-front_featured"
        data-once="quicktabs-wrapper form-group"
      >
        <div className="quicktabs-front-featured-top">
          <div className="quicktabs-front-featured-top-inner">
            <div className="quicktabs-front-featured-top-title">{headerText}</div>
            <div className="quicktabs-front-featured-top-nav">
              <ul className="quicktabs-tabs sm-hidden" role="tablist">
                <li
                  role="tab"
                  aria-controls="quicktabs-tabpage-front_featured-0"
                  aria-selected="false"
                  id="quicktabs-tab-front_featured-0"
                  tabIndex={-1}
                  className={['all', active === 'all' ? 'active' : ''].join(' ')}
                >
                  <a
                    href="#"
                    onClick={event => {
                      event.preventDefault();
                      setList({ items: collection });
                      setFeatured(featuredPodcast);
                      setActive('all');
                    }}
                    className="quicktabs-loaded"
                    data-quicktabs-tab-index={0}
                    tabIndex={-1}
                  >
                    All
                  </a>
                </li>
                <li
                  role="tab"
                  aria-controls="quicktabs-tabpage-front_featured-1"
                  aria-selected="false"
                  id="quicktabs-tab-front_featured-1"
                  tabIndex={-1}
                  className={['podcasts', active === 'podcasts' ? 'active' : ''].join(' ')}
                >
                  <a
                    href="#"
                    onClick={event => {
                      event.preventDefault();
                      setList({ items: videosCollection?.items });
                      setFeatured(featuredPodcast);
                      setActive('podcasts');
                    }}
                    className="quicktabs-loaded"
                    data-quicktabs-tab-index={1}
                    tabIndex={-1}
                  >
                    Podcasts
                  </a>
                </li>
                <li
                  role="tab"
                  aria-controls="quicktabs-tabpage-front_featured-2"
                  aria-selected="true"
                  id="quicktabs-tab-front_featured-2"
                  tabIndex={-1}
                  className={['videos', active === 'videos' ? 'active' : ''].join(' ')}
                >
                  <a
                    href="#"
                    onClick={event => {
                      event.preventDefault();
                      setList({ items: videosCollection?.items });
                      setFeatured(featuredVideo);
                      setActive('videos');
                    }}
                    className="quicktabs-loaded"
                    data-quicktabs-tab-index={2}
                    tabIndex={0}
                  >
                    Videos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="quicktabs-main" id="quicktabs-container-front_featured">
          <div
            id="quicktabs-tabpage-front_featured-0"
            className="quicktabs-tabpage quicktabs-hide"
            role="tabpanel"
            aria-labelledby="quicktabs-tab-front_featured-0"
            tabIndex={0}
          >
            <div className="quicktabs-block-title" />
            <div>
              <div className="views-element-container">
                <div className="view-front-featured js-view-dom-id-171a681a4cdd202adf8b410bf1608c6338547f87c283855fda37cef4e9477768">
                  <div className="views-element-container">
                    <div className="view-front-featured--attachement js-view-dom-id-6f7023c8a38e632f9832ea83c0a9b5b9a5f4f9c742dea97627a94365487a52c9">
                      <div className="views-row">
                        <article
                          role="article"
                          about="/insights/significant-healthcare-voices-podcast-series"
                          className="node--postcast-wide"
                        >
                          <div className="node--postcast-wide-left">
                            <div className="field_teaser_image field--name-field_teaser_image field--name-field-teaser-image">
                              {' '}
                              {featured?.featuredImage?.url && (
                                <a
                                  href="/insights/significant-healthcare-voices-podcast-series"
                                  hrefLang="en"
                                >
                                  <img
                                    loading="lazy"
                                    src={featured?.featuredImage?.url}
                                    width={550}
                                    height={310}
                                    alt=""
                                    typeof="foaf:Image"
                                  />
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="node--postcast-wide-wrap">
                            <a href="/insights/significant-healthcare-voices-podcast-series">
                              <h1 className="title field--name-title">{featured?.name}</h1>
                            </a>
                            <div className="field_teaser_text field--name-field_teaser_text field--name-field-teaser-text">
                              {truncateString(featured?.shortDescription, 400)}
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="view-content">
                    {list?.items &&
                      list?.items.map(item => {
                        return (
                          <div key={item?.sys?.id} className="views-row">
                            <div className="views-field views-field-field-teaser-image">
                              <div className="field-content">
                                {' '}
                                {item?.featuredImage?.url && (
                                  <a
                                    href="/insights/ira-one-year-later-early-learnings-battery-energy-storage-incentives"
                                    hrefLang="en"
                                  >
                                    <img
                                      loading="lazy"
                                      src={item?.featuredImage?.url}
                                      width={550}
                                      height={310}
                                      alt=""
                                      typeof="foaf:Image"
                                    />
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="views-field views-field-title">
                              <span className="field-content">
                                <a
                                  href="/insights/ira-one-year-later-early-learnings-battery-energy-storage-incentives"
                                  hrefLang="en"
                                >
                                  {item?.name}
                                </a>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="view-front-featured-link">
                    <div className="more-link">
                      <a href="/videos-and-podcasts">All media</a>
                    </div>
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
