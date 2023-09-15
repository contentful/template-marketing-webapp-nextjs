import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmFeaturedInsightsFieldsFragment } from './__generated/ctf-featured-insights.generated';

export const FeaturedInsights = (props: AmFeaturedInsightsFieldsFragment) => {
  const {
    sys: { id },
  } = props;
  return (
    <div id="block-am-insights">
      <div className="insights_news">
        <div className="insights_news-main">
          <div className="insights_news-main-left">
            <div className="insights_news-insight-top">
              <div className="insights_news-insight-title">A&amp;M Insights</div>
              <div className="insights_news-insight-top-menu">
                <a className="show-success-story" href="#">
                  Success Stories
                </a>
                <a className="show-bussines-insights" href="#">
                  Business &amp; Industry Insights
                </a>
              </div>
            </div>
            <div className="insights_news-insight-main business-insights">
              <div className="views-element-container">
                <div className="view-homepage-insights-homepage js-view-dom-id-538e7ed77e1f4e8f8fc72cd2bd6fa9275ff925f88c4207369aee3c71869d1df8">
                  <div className="views-element-container">
                    <div className="js-view-dom-id-3ba0d5b607f5feed865f1fbcbf6b18ca8e67de03453704b71a3d6aae743f93ee">
                      <div>
                        <article
                          role="article"
                          about="/insights/key-strike-considerations-automotive-industry-suppliers"
                          typeof="schema:Article"
                          className="node-insight-wide"
                        >
                          <div className="node-insight-wide-wrap">
                            <div className="field_category field--name-field_category field--name-field-category">
                              <div className="field-item">
                                <a href="/insights/business-industry-insights" hrefLang="en">
                                  Business &amp; Industry Insights
                                </a>
                              </div>
                            </div>
                            <div className="node-insight-wide-created">September 14, 2023</div>
                            <h1 property="schema:name" className="title field--name-title">
                              Key Strike Considerations For Automotive Suppliers
                            </h1>
                          </div>
                          <a
                            href="/insights/key-strike-considerations-automotive-industry-suppliers"
                            className="node-insight-wide-link"
                          />
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="view-homepage-insights-homepage-content">
                    <div>
                      <article
                        role="article"
                        about="/insights/clearer-lines-crypto-reporting-sand-would-cast-wide-net"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/insights/business-industry-insights" hrefLang="en">
                              Business &amp; Industry Insights
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">September 14, 2023</div>
                        <h1 property="schema:name" className="title field--name-title">
                          Clearer Lines in Crypto Reporting Sand Would Cast a Wide Net
                        </h1>
                        <a
                          href="/insights/clearer-lines-crypto-reporting-sand-would-cast-wide-net"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                    <div>
                      <article
                        role="article"
                        about="/insights/rise-co-investment-key-tax-considerations-fund-managers-and-investors"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/insights/business-industry-insights" hrefLang="en">
                              Business &amp; Industry Insights
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">September 14, 2023</div>
                        <h1 property="schema:name" className="title field--name-title">
                          The Rise of the Co-Investment: Key Tax Considerations for Fund Managers
                          and Investors
                        </h1>
                        <a
                          href="/insights/rise-co-investment-key-tax-considerations-fund-managers-and-investors"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                    <div>
                      <article
                        role="article"
                        about="/insights/value-creation-through-technology-investments-guidelines-private-equity-firms-maximize-it"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/insights/business-industry-insights" hrefLang="en">
                              Business &amp; Industry Insights
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">September 14, 2023</div>
                        <h1 property="schema:name" className="title field--name-title">
                          Value Creation through Technology Investments – Guidelines for Private
                          Equity Firms to Maximize IT Benefits
                        </h1>
                        <a
                          href="/insights/value-creation-through-technology-investments-guidelines-private-equity-firms-maximize-it"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="insights_news-insight-main succes-story">
              <div className="views-element-container">
                <div className="view-homepage-insights-homepage js-view-dom-id-51506a71cf44b2b5cb194694d93643b4c7d6499773c98a6f86259ef9c03c1e19">
                  <div className="views-element-container">
                    <div className="view-homepage-insights-homepage js-view-dom-id-695c9aeefc5a217bc818b0774db6526a2d347992f9871d87021084a2a2eb717d">
                      <div className="view-homepage-insights-homepage-content">
                        <div>
                          <article
                            role="article"
                            about="/insights/case-study-private-equity-fund-seeking-platform-acquisition-waste-industry"
                            typeof="schema:Article"
                            className="node-insight-wide"
                          >
                            <div className="node-insight-wide-wrap">
                              <div className="field_category field--name-field_category field--name-field-category">
                                <div className="field-item">
                                  <a href="/taxonomy/term/1771" hrefLang="en">
                                    Success Stories
                                  </a>
                                </div>
                              </div>
                              <div className="node-insight-wide-created">August 22, 2023</div>
                              <h1 property="schema:name" className="title field--name-title">
                                Case Study: Private Equity Fund Seeking Platform Acquisition in the
                                Waste Industry{' '}
                              </h1>
                            </div>
                            <a
                              href="/insights/case-study-private-equity-fund-seeking-platform-acquisition-waste-industry"
                              className="node-insight-wide-link"
                            />
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="view-homepage-insights-homepage-content">
                    <div>
                      <article
                        role="article"
                        about="/insights/case-study-value-driven-private-equity-fund-seeking-carbon-emissions-analysis"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/taxonomy/term/1771" hrefLang="en">
                              Success Stories
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">July 27, 2023</div>
                        <h1 property="schema:name" className="title field--name-title">
                          Case Study: Value-Driven Private Equity Fund Seeking Carbon Emissions
                          Analysis
                        </h1>
                        <a
                          href="/insights/case-study-value-driven-private-equity-fund-seeking-carbon-emissions-analysis"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                    <div>
                      <article
                        role="article"
                        about="/insights/case-study-tracing-funds-hard-way-0"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/taxonomy/term/1771" hrefLang="en">
                              Success Stories
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">March 31, 2023</div>
                        <h1 property="schema:name" className="title field--name-title">
                          Case Study: Tracing Funds The Hard Way
                        </h1>
                        <a
                          href="/insights/case-study-tracing-funds-hard-way-0"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                    <div>
                      <article
                        role="article"
                        about="/insights/case-study-north-american-expansion-drive-value"
                        typeof="schema:Article"
                        className="node-insight-inner"
                      >
                        <div className="field_category field--name-field_category field--name-field-category">
                          <div className="field-item">
                            <a href="/taxonomy/term/1771" hrefLang="en">
                              Success Stories
                            </a>
                          </div>
                        </div>
                        <div className="node-insight-inner-created">August 23, 2022</div>
                        <h1 property="schema:name" className="title field--name-title">
                          Case Study: North American Expansion to Drive Value
                        </h1>
                        <a
                          href="/insights/case-study-north-american-expansion-drive-value"
                          className="node-insight-inner-link"
                        />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="insights_news-main-right">
            <div className="insights_news-in-news-title">In The News</div>
            <div className="views-element-container">
              <div className="view-in-the-new-main js-view-dom-id-78b5288fbc4eb0c4638b70c85ab123c32ff0b55bc2f3a310d39f5d3e4e9e07c4">
                <div className="views-row">
                  <div className="views-field views-field-created">September 14, 2023</div>
                  <div className="views-field views-field-title">
                    <a
                      href="/insights/key-strike-considerations-automotive-industry-suppliers"
                      hrefLang="en"
                    >
                      Key Strike Considerations For Automotive Suppliers
                    </a>
                  </div>
                </div>
                <div className="views-row">
                  <div className="views-field views-field-created">September 14, 2023</div>
                  <div className="views-field views-field-title">
                    <a
                      href="/insights/clearer-lines-crypto-reporting-sand-would-cast-wide-net"
                      hrefLang="en"
                    >
                      Clearer Lines in Crypto Reporting Sand Would Cast a Wide Net
                    </a>
                  </div>
                </div>
                <div className="views-row">
                  <div className="views-field views-field-created">September 14, 2023</div>
                  <div className="views-field views-field-title">
                    <a
                      href="/insights/alvarez-marsal-disputes-and-investigations-expands-construction-disputes-offering-two-new"
                      hrefLang="en"
                    >
                      Alvarez &amp; Marsal Disputes and Investigations Expands Construction Disputes
                      Offering with Two New Managing Directors
                    </a>
                  </div>
                </div>
                <div className="views-row">
                  <div className="views-field views-field-created">September 14, 2023</div>
                  <div className="views-field views-field-title">
                    <a
                      href="/insights/rise-co-investment-key-tax-considerations-fund-managers-and-investors"
                      hrefLang="en"
                    >
                      The Rise of the Co-Investment: Key Tax Considerations for Fund Managers and
                      Investors
                    </a>
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
