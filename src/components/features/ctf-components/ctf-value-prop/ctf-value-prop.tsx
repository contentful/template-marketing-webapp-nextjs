import React from 'react';

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmValuePropFieldsFragment } from './__generated/ctf-value-prop.generated';

export const ValueProp = (props: AmValuePropFieldsFragment) => {
  const {
    sys: { id },
    headerTextLeft,
    metricsBlockTitle,
    metrics,
    supplementalNavigation,
    supplementalNavigationTitle,
    supplementalNavigationTitleLeft,
    supplementalNavigationItemsLeft,
    supplementalNavigationTitleRight,
    supplementalNavigationItemsRight,
    ctaCopy,
    ctaTargetLink,
  } = props;
  console.log(supplementalNavigation);
  const [showing, setShowing] = React.useState(true);
  return (
    <div id="block-am-why-am">
      <div className="why-am-how-help">
        <div className="why-am-how-help-container">
          <div className="why-am">
            <div className="why-am-top">
              <div className="why-am-title">{headerTextLeft}</div>
            </div>
            <div className="why-am-main">
              <div className="why-am-text-head">{metricsBlockTitle}</div>
              <div className="why-am-list">
                {metrics &&
                  metrics.map(({ key, value, id }) => {
                    return (
                      <div key={id} className="why-am-list-item">
                        <div className="why-am-list-item-number">{value}</div>
                        <div className="why-am-list-item-label">{key}</div>
                      </div>
                    );
                  })}
              </div>
              {ctaTargetLink && (
                <div className="why-am-link">
                  <a href={ctaTargetLink}>{ctaCopy}</a>
                </div>
              )}
            </div>
          </div>
          <div className="how-help-client">
            <div className="how-help-client-top">
              <div className="how-help-client-title">{supplementalNavigationTitle}</div>
            </div>
            <div className="how-help-client-main">
              <div className="how-help-client-vocabulary">
                <div
                  onClick={() => setShowing(!showing)}
                  className="how-help-client-vocabulary-item is-active"
                  data-vid="expertise"
                >
                  {supplementalNavigationTitleLeft}
                </div>
                <div
                  onClick={() => setShowing(!showing)}
                  className="how-help-client-vocabulary-item"
                  data-vid="industries"
                >
                  {supplementalNavigationTitleRight}
                </div>
              </div>

              <div className="how-help-client-list">
                {supplementalNavigationItemsRight &&
                  supplementalNavigationItemsRight.map(({ key, value, id }) => {
                    return (
                      <a
                        key={id}
                        href={value}
                        className="how-help-client-list-item"
                        data-tid={id}
                        data-type="industries"
                        style={{ display: showing ? 'block' : 'none' }}
                      >
                        {key}
                      </a>
                    );
                  })}

                {supplementalNavigationItemsLeft &&
                  supplementalNavigationItemsLeft.map(({ key, value, id }) => {
                    return (
                      <a
                        key={id}
                        href={value}
                        className="how-help-client-list-item"
                        data-tid={id}
                        data-type="expertise"
                        style={{ display: showing ? 'none' : 'block' }}
                      >
                        {key}
                      </a>
                    );
                  })}
              </div>
              <div className="how-help-client-navigation" style={{ opacity: 1 }}>
                <div className="how-help-client-page">
                  <div className="how-help-client-page-item active" data-page={1} />
                  <div className="how-help-client-page-item" data-page={2} />
                </div>
                <div className="how-help-client-arrow">
                  <div className="how-help-client-arrow-prev" data-move="prev" />
                  <div className="how-help-client-arrow-next" data-move="next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
