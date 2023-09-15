import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmValuePropFieldsFragment } from './__generated/ctf-value-prop.generated';

export const ValueProp = (props: AmValuePropFieldsFragment) => {
  const {
    sys: { id },
  } = props;
  return (
    <div id="block-am-why-am">
      <div className="why-am-how-help">
        <div className="why-am-how-help-container">
          <div className="why-am">
            <div className="why-am-top">
              <div className="why-am-title">Why A&amp;M</div>
            </div>
            <div className="why-am-main">
              <div className="why-am-text-head">
                Global Reach.
                <br />
                Local Approach.
              </div>
              <div className="why-am-list">
                <div className="why-am-list-item">
                  <div className="why-am-list-item-number">8000+</div>
                  <div className="why-am-list-item-label">Employees</div>
                </div>
                <div className="why-am-list-item">
                  <div className="why-am-list-item-number">6</div>
                  <div className="why-am-list-item-label">Continents</div>
                </div>
                <div className="why-am-list-item">
                  <div className="why-am-list-item-number">40</div>
                  <div className="why-am-list-item-label">Years</div>
                </div>
                <div className="why-am-list-item">
                  <div className="why-am-list-item-number">77</div>
                  <div className="why-am-list-item-label">Offices</div>
                </div>
                <div className="why-am-list-item">
                  <div className="why-am-list-item-number">35</div>
                  <div className="why-am-list-item-label">Countries</div>
                </div>
              </div>
              <div className="why-am-link">
                <a href="/global-locations">Our Locations</a>
              </div>
            </div>
          </div>
          <div className="how-help-client">
            <div className="how-help-client-top">
              <div className="how-help-client-title">How we help our clients</div>
            </div>
            <div className="how-help-client-main">
              <div className="how-help-client-vocabulary">
                <div className="how-help-client-vocabulary-item is-active" data-vid="expertise">
                  Services
                </div>
                <div className="how-help-client-vocabulary-item" data-vid="industries">
                  Industries
                </div>
              </div>
              <div className="how-help-client-list">
                <a
                  href="/industries/aerospace-defense-aviation-space"
                  className="how-help-client-list-item"
                  data-tid={381}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Aerospace, Defense, Aviation &amp; Space
                </a>
                <a
                  href="/industries/automotive-and-Industrials"
                  className="how-help-client-list-item"
                  data-tid={391}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Automotive &amp; Industrials
                </a>
                <a
                  href="/industries/business-services"
                  className="how-help-client-list-item"
                  data-tid={841}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Business Services
                </a>
                <a
                  href="/industries/consumer-products"
                  className="how-help-client-list-item"
                  data-tid={856}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Consumer Products
                </a>
                <a
                  href="/expertise/corporate-performance-improvement"
                  className="how-help-client-list-item is-active"
                  data-tid={26}
                  data-type="expertise"
                  style={{}}
                >
                  Corporate Performance Improvement
                </a>
                <a
                  href="/expertise/digital"
                  className="how-help-client-list-item"
                  data-tid={3746}
                  data-type="expertise"
                  style={{}}
                >
                  Digital
                </a>
                <a
                  href="/expertise/digital-and-technology-services"
                  className="how-help-client-list-item"
                  data-tid={3561}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Digital &amp; Technology Services
                </a>
                <a
                  href="/expertise/disputes-investigations"
                  className="how-help-client-list-item"
                  data-tid={31}
                  data-type="expertise"
                  style={{}}
                >
                  Disputes and Investigations
                </a>
                <a
                  href="/industries/education"
                  className="how-help-client-list-item"
                  data-tid={866}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Education
                </a>
                <a
                  href="/industries/energy"
                  className="how-help-client-list-item"
                  data-tid={1116}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Energy
                </a>
                <a
                  href="/industries/environmental-disputes"
                  className="how-help-client-list-item"
                  data-tid={396}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Environmental Disputes
                </a>
                <a
                  href="/expertise/environmental-social-governance-esg-services"
                  className="how-help-client-list-item"
                  data-tid={4086}
                  data-type="expertise"
                  style={{}}
                >
                  Environmental, Social &amp; Governance (ESG) Services
                </a>
                <a
                  href="/industries/financial-services"
                  className="how-help-client-list-item"
                  data-tid={71}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Financial Services
                </a>
                <a
                  href="/industries/healthcare"
                  className="how-help-client-list-item"
                  data-tid={971}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Healthcare
                </a>
                <a
                  href="/industries/infrastructure-capital-projects"
                  className="how-help-client-list-item"
                  data-tid={1896}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Infrastructure &amp; Capital Projects
                </a>
                <a
                  href="/industries/media-entertainment"
                  className="how-help-client-list-item"
                  data-tid={941}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Media &amp; Entertainment
                </a>
                <a
                  href="/industries/pharmaceuticals"
                  className="how-help-client-list-item"
                  data-tid={906}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Pharmaceuticals
                </a>
                <a
                  href="/expertise/private-equity-services"
                  className="how-help-client-list-item"
                  data-tid={41}
                  data-type="expertise"
                  style={{}}
                >
                  Private Equity Services
                </a>
                <a
                  href="/industries/public-sector"
                  className="how-help-client-list-item"
                  data-tid={81}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Public Sector Services
                </a>
                <a
                  href="/industries/real-estate"
                  className="how-help-client-list-item"
                  data-tid={86}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Real Estate
                </a>
                <a
                  href="/expertise/regulatoryrisk-compliance"
                  className="how-help-client-list-item"
                  data-tid={756}
                  data-type="expertise"
                  style={{}}
                >
                  Regulatory &amp; Risk Advisory
                </a>
                <a
                  href="/expertise/restructuring-turnaround"
                  className="how-help-client-list-item"
                  data-tid={686}
                  data-type="expertise"
                  style={{}}
                >
                  Restructuring &amp; Turnaround
                </a>
                <a
                  href="/industries/retail"
                  className="how-help-client-list-item"
                  data-tid={911}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Retail
                </a>
                <a
                  href="/industries/semiconductors"
                  className="how-help-client-list-item"
                  data-tid={4296}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Semiconductors
                </a>
                <a
                  href="/industries/software-technology-services"
                  className="how-help-client-list-item"
                  data-tid={4066}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Software, Technology &amp; Services
                </a>
                <a
                  href="/expertise/tax"
                  className="how-help-client-list-item"
                  data-tid={616}
                  data-type="expertise"
                  style={{ display: 'none' }}
                >
                  Tax
                </a>
                <a
                  href="/industries/transportation-logistics"
                  className="how-help-client-list-item"
                  data-tid={946}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Transportation &amp; Logistics
                </a>
                <a
                  href="/industries/travel-hospitality-and-leisure"
                  className="how-help-client-list-item"
                  data-tid={3476}
                  data-type="industries"
                  style={{ display: 'none' }}
                >
                  Travel, Hospitality and Leisure
                </a>
                <a
                  href="/expertise/valuation"
                  className="how-help-client-list-item"
                  data-tid={721}
                  data-type="expertise"
                  style={{ display: 'none' }}
                >
                  Valuation
                </a>
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
