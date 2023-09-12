/* eslint-disable react/self-closing-comp */
interface HeaderPropsInterface {
  isMenuOpen?: boolean;
  onMenuClick?: () => any;
}

export const Header = (props: HeaderPropsInterface) => {
  return (
    <div role="banner" className="main-header on-top" style={{ top: '0px', position: 'fixed' }}>
      <div className="main-header-inner">
        <div className="branding-region"></div>
        <div className="main-header-nav">
          <div className="menu-holder">
            <div className="row row-branding">
              <div className="block-am-branding" id="block-system-branding-block">
                <div className="site-logo">
                  <div
                    className="am-branding-logo-white"
                    style={{ width: '80px', height: '80px', color: 'white' }}
                  >
                    <a href="/" rel="home">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={75.667}
                        height={66.898}
                        className="flogo"
                      >
                        <g fill="#fff" data-name="Group 1635">
                          <path
                            d="M68.426 31.567h2.066l4.771 10.546h-1.945l-1.382-3.185h-5.142l-1.443 3.185H63.47Zm3 6.219L69.4 33.132l-2.103 4.654Z"
                            data-name="Path 36-2"
                          />
                          <g data-name="Group 2-2">
                            <path
                              d="M65.715 46.906a2.186 2.186 0 0 1-.284-1.017 2.076 2.076 0 0 1 .865-1.7 3.618 3.618 0 0 1 2.3-.675 3.3 3.3 0 0 1 2.142.623 1.889 1.889 0 0 1 .767 1.5 2.408 2.408 0 0 1-.793 1.781 7.693 7.693 0 0 1-1.558 1.03l2.4 2.29c.146-.385.249-.672.312-.857a6.132 6.132 0 0 0 .179-.8h1.572a6.452 6.452 0 0 1-.609 1.949c-.3.614-.453.868-.453.743l2.3 2.242h-2.043l-1.237-1.173a6.238 6.238 0 0 1-1.342.913 5.629 5.629 0 0 1-2.456.508 4.253 4.253 0 0 1-2.985-.879 2.7 2.7 0 0 1-.935-1.982 2.528 2.528 0 0 1 .907-1.99 10.315 10.315 0 0 1 2.068-1.215 5.685 5.685 0 0 1-1.12-1.292m3.9 5.891a3.519 3.519 0 0 0 1.1-.816l-2.978-2.9a8.844 8.844 0 0 0-1.633 1.03 1.7 1.7 0 0 0-.589 1.314 1.415 1.415 0 0 0 .762 1.289 3.149 3.149 0 0 0 1.636.449 3.7 3.7 0 0 0 1.7-.365m-.125-5.952a1.464 1.464 0 0 0 .525-1.091 1.028 1.028 0 0 0-.382-.8 1.537 1.537 0 0 0-1.041-.338 1.592 1.592 0 0 0-1.376.53.952.952 0 0 0-.2.591 1.371 1.371 0 0 0 .3.84 8.4 8.4 0 0 0 1.005 1.047 7.062 7.062 0 0 0 1.169-.779"
                              data-name="Path 37-2"
                            />
                            <path
                              d="M63.054 56.26h2.534l3.775 8.917 3.783-8.917h2.521v10.544h-1.683v-6.233c0-.215.014-.57.039-1.07s.031-1.031.031-1.6l-3.821 8.9h-1.77l-3.8-8.9v.321c0 .262.014.658.034 1.187s.036.915.036 1.159v6.233h-1.68Z"
                              data-name="Path 38-2"
                            />
                          </g>
                          <path
                            d="M39.65 0 0 66.9h9.167l32.246-56.742v56.74H48.6v-66.9Z"
                            data-name="Path 39-2"
                          />
                          <path
                            d="m38.667 19.349-7.233 12.715v34.833h7.233Z"
                            data-name="Path 40-2"
                          />
                          <path
                            d="m50.963 19.349 7.231 12.715v34.833h-7.231Z"
                            data-name="Path 41-2"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <nav
                role="navigation"
                aria-labelledby="block-system-menu-block-main-menu"
                className="block-am-main-menu"
                id="block-system-menu-block-main"
              >
                <ul className="menu-level--0">
                  <li className="menu-item has-children">
                    <a href="/about-am">
                      <div className="mobile-item-arrow"></div>
                      About A&amp;M
                    </a>

                    <ul className="menu-level--1">
                      <li>
                        <a href="/alumni">Alumni</a>
                      </li>
                      <li>
                        <a href="/#block-connect-with-us">Contact Us</a>
                      </li>
                      <li>
                        <a href="/culture-values">Culture &amp; Values</a>
                      </li>
                      <li>
                        <a href="/esg-sustainability-am">ESG &amp; Sustainability</a>
                      </li>
                      <li>
                        <a href="/life-am">Life at A&amp;M</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="/expertise">
                      <div className="mobile-item-arrow"></div>
                      Expertise
                    </a>

                    <ul className="menu-level--1">
                      <li>
                        <a href="/expertise/digital">Digital</a>
                      </li>
                      <li>
                        <a href="/expertise/environmental-social-governance-esg-services">
                          Environmental, Social &amp; Governance
                        </a>
                      </li>
                      <li>
                        <a href="/expertise/corporate-performance-improvement">
                          Corporate Performance Improvement
                        </a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/corporate-transformation">
                              Corporate Transformation
                            </a>
                          </li>
                          <li>
                            <a href="/taxonomy/term/96">Technology Services</a>
                          </li>
                          <li>
                            <a href="/expertise/cfo-services-new">CFO Services</a>
                          </li>
                          <li>
                            <a href="/expertise/supply-chain-services">Supply Chain Services</a>
                          </li>
                          <li>
                            <a href="/expertise/corporate-merger-acquisition-services">
                              Merger, Acquisition &amp; Divestiture Services
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/private-equity-services">Private Equity Services</a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/global-transaction-advisory">
                              Global Transaction Advisory
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/integrated-due-diligence">
                              Integrated Due Diligence
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/private-equity-performance-improvement">
                              Portfolio Company Performance Improvement
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/divestiture-services">Divestiture Services</a>
                          </li>
                          <li>
                            <a href="/expertise/services-india">Services for India</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/restructuring-turnaround">
                          Restructuring &amp; Turnaround
                        </a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/restructuring-advisory">Restructuring Advisory</a>
                          </li>
                          <li>
                            <a href="/expertise/interim-crisis-management">
                              Interim &amp; Crisis Management
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/corporate-finance">Corporate Finance</a>
                          </li>
                          <li>
                            <a href="/expertise/creditor-advisory">Creditor Advisory</a>
                          </li>
                          <li>
                            <a href="/expertise/claims-management-services">
                              Claims Management Services
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/fiduciary-services">Fiduciary Services</a>
                          </li>
                          <li>
                            <a href="/expertise/insolvency">Insolvency</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/tax">Tax</a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/federal-tax">Federal Tax</a>
                          </li>
                          <li>
                            <a href="/expertise/state-local-tax">State &amp; Local Tax</a>
                          </li>
                          <li>
                            <a href="/expertise/international-tax">International Tax</a>
                          </li>
                          <li>
                            <a href="/expertise/global-transaction-tax-advisory">
                              Global Transaction Tax Advisory
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/income-tax-accounting">Income Tax Accounting</a>
                          </li>
                          <li>
                            <a href="/expertise/sales-and-use">Sales and Use</a>
                          </li>
                          <li>
                            <a href="/expertise/transfer-pricing">Transfer Pricing</a>
                          </li>
                          <li>
                            <a href="/expertise/compensation-benefits">
                              Compensation &amp; Benefits
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/real-estate-tax">Real Estate Tax</a>
                          </li>
                          <li>
                            <a href="/expertise/private-client-services">Private Client Services</a>
                          </li>
                          <li>
                            <a href="/expertise/emea-tax">U.K. Tax</a>
                          </li>
                          <li>
                            <a href="/expertise/bankruptcy-tax-services">Bankruptcy Tax Services</a>
                          </li>
                          <li>
                            <a href="/expertise/research-credits-incentives">
                              Research Credits &amp; Incentives
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/merger-integration-0">Merger Integration</a>
                          </li>
                          <li>
                            <a href="/expertise/taxand-global">Taxand Global</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/disputes-investigations">Disputes and Investigations</a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/disputes">Disputes</a>
                          </li>
                          <li>
                            <a href="/expertise/investigations">Investigations</a>
                          </li>
                          <li>
                            <a href="/expertise/forensic-technology">Forensic Technology</a>
                          </li>
                          <li>
                            <a href="/expertise/fiduciary-services-0">Fiduciary Services</a>
                          </li>
                          <li>
                            <a href="/expertise/disputes-investigations/cyber-risk-services">
                              Global Cyber Risk Services
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/financial-crimes-investigations">
                              Financial Crimes &amp; Investigations
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/valuation">Valuation</a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/portfolio-valuation-advisory-services">
                              Portfolio Valuation &amp; Advisory Services
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/complex-financial-instruments">
                              Complex Financial Instruments
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/financial-tax-reporting">
                              Financial &amp; Tax Reporting
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/litigation-dispute-valuation">
                              Litigation &amp; Dispute Valuation
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/structured-finance-capital-equipment-valuation">
                              Structured Finance &amp; Capital Equipment Valuation
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/transaction-opinions">Transaction Opinions</a>
                          </li>
                          <li>
                            <a href="/expertise/divorce-services">Divorce Services</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/expertise/regulatoryrisk-compliance">
                          Regulatory &amp; Risk Advisory
                        </a>

                        <ul className="menu-level--2">
                          <li>
                            <a href="/expertise/banking">Banking</a>
                          </li>
                          <li>
                            <a href="/expertise/corporate-risk-management">
                              Corporate Risk Management
                            </a>
                          </li>
                          <li>
                            <a href="/expertise/diversified-financials">Diversified Financials</a>
                          </li>
                          <li>
                            <a href="/expertise/insurance-regulatory">Insurance Regulatory</a>
                          </li>
                          <li>
                            <a href="/expertise/global-cyber-risk">Global Cyber Risk Services</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="/industries">
                      <div className="mobile-item-arrow"></div>
                      Industries
                    </a>

                    <ul className="menu-level--1">
                      <li>
                        <span className="field-content">
                          <a href="/industries/aerospace-defense-aviation-space" hrefLang="en">
                            Aerospace, Defense, Aviation &amp; Space
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/automotive-and-Industrials" hrefLang="en">
                            Automotive &amp; Industrials
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/business-services" hrefLang="en">
                            Business Services
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/consumer-products" hrefLang="en">
                            Consumer Products
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/education" hrefLang="en">
                            Education
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/energy" hrefLang="en">
                            Energy
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/environmental-disputes" hrefLang="en">
                            Environmental Disputes
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/financial-services" hrefLang="en">
                            Financial Services
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/healthcare" hrefLang="en">
                            Healthcare
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/infrastructure-capital-projects" hrefLang="en">
                            Infrastructure &amp; Capital Projects
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/media-entertainment" hrefLang="en">
                            Media &amp; Entertainment
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/pharmaceuticals" hrefLang="en">
                            Pharmaceuticals
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/public-sector" hrefLang="en">
                            Public Sector Services
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/real-estate" hrefLang="en">
                            Real Estate
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/retail" hrefLang="en">
                            Retail
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/software-technology-services" hrefLang="en">
                            Software, Technology &amp; Services
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/telecommunications" hrefLang="en">
                            Telecommunications
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/transportation-logistics" hrefLang="en">
                            Transportation &amp; Logistics
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="field-content">
                          <a href="/industries/travel-hospitality-and-leisure" hrefLang="en">
                            Travel, Hospitality and Leisure
                          </a>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="/insights">
                      <div className="mobile-item-arrow"></div>
                      Insights
                    </a>

                    <ul className="menu-level--1">
                      <li>
                        <a href="https://bulletins.alvarezandmarsal.com/">A&amp;M Bulletins</a>
                      </li>
                      <li>
                        <a href="/insights?insight%5B0%5D=1771">Success Stories</a>
                      </li>
                      <li>
                        <a href="/insights?insight%5B0%5D=561">A&amp;M News &amp; Releases</a>
                      </li>
                      <li>
                        <a href="/podcasts">Podcasts</a>
                      </li>
                      <li>
                        <a href="/insights?insight%5B0%5D=1776">Business &amp; Industry Insights</a>
                      </li>
                      <li>
                        <a href="/videos">Videos</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="/our-people">
                      <div className="mobile-item-arrow"></div>
                      Our People
                    </a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="/global-locations">
                      <div className="mobile-item-arrow"></div>
                      Global Locations
                    </a>

                    <ul className="menu-level--1">
                      <li>
                        <a href="/global-locations/australia">Australia</a>
                      </li>
                      <li>
                        <a href="/global-locations/benelux">Benelux</a>
                      </li>
                      <li>
                        <a href="/global-locations/brazil">Brazil</a>
                      </li>
                      <li>
                        <a href="/global-locations/canada">Canada</a>
                      </li>
                      <li>
                        <a href="/global-locations/cayman-islands">Cayman Islands</a>
                      </li>
                      <li>
                        <a href="/global-locations/china">China</a>
                      </li>
                      <li>
                        <a href="/global-locations/colombia">Colombia</a>
                      </li>
                      <li>
                        <a href="/global-locations/czech-republic">Czech Republic</a>
                      </li>
                      <li>
                        <a href="/global-locations/finland">Finland</a>
                      </li>
                      <li>
                        <a href="/global-locations/france">France</a>
                      </li>
                      <li>
                        <a href="/global-locations/germany">Germany</a>
                      </li>
                      <li>
                        <a href="/global-locations/greece">Greece</a>
                      </li>
                      <li>
                        <a href="/global-locations/india">India</a>
                      </li>
                      <li>
                        <a href="/global-locations/indonesia">Indonesia</a>
                      </li>
                      <li>
                        <a href="/global-locations/ireland">Ireland</a>
                      </li>
                      <li>
                        <a href="/global-locations/italy">Italy</a>
                      </li>
                      <li>
                        <a href="/global-locations/korea">Korea</a>
                      </li>
                      <li>
                        <a href="/global-locations/malaysia">Malaysia</a>
                      </li>
                      <li>
                        <a href="/global-locations/mexico">Mexico</a>
                      </li>
                      <li>
                        <a href="/global-locations/norway">Norway</a>
                      </li>
                      <li>
                        <a href="/global-locations/poland">Poland</a>
                      </li>
                      <li>
                        <a href="/global-locations/portugal">Portugal</a>
                      </li>
                      <li>
                        <a href="/global-locations/saudi-arabia">Saudi Arabia</a>
                      </li>
                      <li>
                        <a href="/global-locations/singapore">Singapore</a>
                      </li>
                      <li>
                        <a href="/global-locations/spain">Spain</a>
                      </li>
                      <li>
                        <a href="/global-locations/sweden">Sweden</a>
                      </li>
                      <li>
                        <a href="/global-locations/switzerland">Switzerland</a>
                      </li>
                      <li>
                        <a href="/global-locations/ukraine">Ukraine</a>
                      </li>
                      <li>
                        <a href="/global-locations/united-arab-emirates">United Arab Emirates</a>
                      </li>
                      <li>
                        <a href="/global-locations/united-kingdom">United Kingdom</a>
                      </li>
                      <li>
                        <a href="/global-locations/united-states">United States</a>
                      </li>
                      <li>
                        <a href="/global-locations/uzbekistan">Uzbekistan</a>
                      </li>
                      <li>
                        <a href="/global-locations/vietnam">Vietnam</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="https://careers.alvarezandmarsal.com/">
                      <div className="mobile-item-arrow"></div>
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="region-header-short">
            <div className="head-submenu-btns">
              <div className="dsk-search">
                <input type="search" placeholder="Search" />
              </div>
              <a className="header-search-btn"></a>
              <a className="menu-toggle"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="region-header-short">
        <div className="head-submenu-btns">
          <div className="dsk-search">
            <input type="search" placeholder="Search" />
          </div>
          <a className="header-search-btn"></a>
          <a className="menu-toggle"></a>
        </div>
      </div>
    </div>
  );
};
