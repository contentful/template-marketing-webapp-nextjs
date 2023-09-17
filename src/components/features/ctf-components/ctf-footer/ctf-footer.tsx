import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Theme, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';
import Logo from '@src/icons/logo-tagline.svg';
import { CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: '#F4F4F4',
  },
  footer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(20),
    },
  },
  menuWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(-8),
  },
  menuColumn: {
    paddingLeft: theme.spacing(8),
  },
  menu: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    width: '17.2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#1B273A',
    margin: theme.spacing(0, 0, 4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(8),
    },
  },
  submenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& $menuItem': {
      fontWeight: 400,
    },
  },
  submenuItem: {
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#414D63',
      display: 'inline-block',
      minWidth: 0,
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#7C7C7C',
      },
    },
  },
  footerEndSection: {
    marginLeft: 'auto',
  },
  footerCorporateContainer: {
    backgroundColor: '#212121',
    color: '#fff',
    paddingBottom: theme.spacing(14),
    paddingTop: theme.spacing(8),
  },
  footerCorporate: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
  },
  storeLogos: {
    marginTop: theme.spacing(7),
  },
  storeLogo: {
    display: 'block',
    maxWidth: '11.5rem',
    '& + &': {
      marginTop: theme.spacing(5),
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
  },
  corporateLogoMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  corporateLogoContainer: {
    flexShrink: 0,
    marginBottom: theme.spacing(3),
    marginTop: '0.2rem',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: '38.4rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  },
  copyrightAndLegal: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
  copyright: {
    fontSize: '1.8rem',
    lineHeight: 1.2,
    margin: theme.spacing(1, 10, 0, 0),
  },
  legalMenuWrapper: {},
  legalMenu: {
    listStyle: 'none',
    margin: theme.spacing(5, 0, 0),
    padding: 0,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 0,
    },
  },
  legalMenuItem: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: 'auto',
    },
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(8),
      },
    },
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#fff',
      display: 'inline-block',
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#000',
      },
    },
  },
  socialDisclaimer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: theme.spacing(7),
    },
  },
  socialWrapper: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      order: -1,
      marginRight: theme.spacing(8),
      width: '38.4rem',
    },
  },
  socialTitle: {
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(6),
    '& a': {
      color: 'inherit',
      display: 'inline-block',
      lineHeight: 1.2,

      '&:not(:first-child)': {
        marginLeft: theme.spacing(6),
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3.2rem',
    },
  },
}));

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  const classes = useStyles();
  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
        entryId: footerContent.sys.id,
        fieldId: 'menuItems',
        locale,
      })
    : undefined;

  return (
    <div className="page">
      <footer role="contentinfo" className="footer-content">
        <div className="footer-inner">
          <section className="footer">
            <div id="block-am-logo-white">
              <div className="am-logo-white" style={{ maxWidth: 75 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75.667"
                  height="66.898"
                  viewBox="0 0 75.667 66.898"
                >
                  <g id="logo" transform="translate(-41.11 -169.922)">
                    <g id="Group_1635" data-name="Group 1635" transform="translate(41.11 169.922)">
                      <path
                        id="Path_36-2"
                        data-name="Path 36-2"
                        d="M86.8,190.181h2.066l4.771,10.546H91.692l-1.382-3.185H85.168l-1.443,3.185H81.844Zm3,6.219-2.026-4.654L85.671,196.4Z"
                        transform="translate(-18.374 -158.614)"
                        fill="#fff"
                      />
                      <g id="Group_2-2" data-name="Group 2-2" transform="translate(63.052 43.508)">
                        <path
                          id="Path_37-2"
                          data-name="Path 37-2"
                          d="M83.951,201.243a2.186,2.186,0,0,1-.284-1.017,2.076,2.076,0,0,1,.865-1.7,3.618,3.618,0,0,1,2.3-.675,3.3,3.3,0,0,1,2.142.623,1.889,1.889,0,0,1,.767,1.5,2.408,2.408,0,0,1-.793,1.781,7.693,7.693,0,0,1-1.558,1.03l2.4,2.29c.146-.385.249-.672.312-.857a6.132,6.132,0,0,0,.179-.8h1.572a6.452,6.452,0,0,1-.609,1.949c-.3.614-.453.868-.453.743l2.3,2.242H91.048l-1.237-1.173a6.238,6.238,0,0,1-1.342.913,5.629,5.629,0,0,1-2.456.508,4.253,4.253,0,0,1-2.985-.879,2.7,2.7,0,0,1-.935-1.982A2.528,2.528,0,0,1,83,203.749a10.315,10.315,0,0,1,2.068-1.215,5.685,5.685,0,0,1-1.12-1.292m3.9,5.891a3.519,3.519,0,0,0,1.1-.816l-2.978-2.9a8.844,8.844,0,0,0-1.633,1.03,1.7,1.7,0,0,0-.589,1.314,1.415,1.415,0,0,0,.762,1.289,3.149,3.149,0,0,0,1.636.449,3.7,3.7,0,0,0,1.7-.365m-.125-5.952a1.464,1.464,0,0,0,.525-1.091,1.028,1.028,0,0,0-.382-.8,1.537,1.537,0,0,0-1.041-.338,1.592,1.592,0,0,0-1.376.53.952.952,0,0,0-.2.591,1.371,1.371,0,0,0,.3.84,8.4,8.4,0,0,0,1.005,1.047,7.062,7.062,0,0,0,1.169-.779"
                          transform="translate(-81.288 -197.845)"
                          fill="#fff"
                        />
                        <path
                          id="Path_38-2"
                          data-name="Path 38-2"
                          d="M81.578,206.029h2.534l3.775,8.917,3.783-8.917h2.521v10.544H92.508V210.34c0-.215.014-.57.039-1.07s.031-1.031.031-1.6l-3.821,8.9h-1.77l-3.8-8.9v.321c0,.262.014.658.034,1.187s.036.915.036,1.159v6.233h-1.68Z"
                          transform="translate(-81.576 -193.277)"
                          fill="#fff"
                        />
                      </g>
                      <path
                        id="Path_39-2"
                        data-name="Path 39-2"
                        d="M80.76,169.922l-39.65,66.9h9.167l32.246-56.742V236.82H89.71v-66.9Z"
                        transform="translate(-41.11 -169.922)"
                        fill="#fff"
                      />
                      <path
                        id="Path_40-2"
                        data-name="Path 40-2"
                        d="M68.517,182.34l-7.233,12.715v34.833h7.233Z"
                        transform="translate(-29.85 -162.991)"
                        fill="#fff"
                      />
                      <path
                        id="Path_41-2"
                        data-name="Path 41-2"
                        d="M73.817,182.34l7.231,12.715v34.833H73.817Z"
                        transform="translate(-22.854 -162.991)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div id="block-am-social-block">
              <ul className="am-social-network">
                <li>
                  <a href="https://www.linkedin.com/company/162399" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/alvarezandmarsal" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/alvarezmarsal" target="_blank" rel="noreferrer">
                    <svg
                      fill="#002549"
                      className="social-network-icon-svg"
                      version="1.1"
                      id="svg5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1668.56 1221.19"
                    >
                      <g id="layer1" transform="translate(52.390088,-25.058597)">
                        <path
                          id="path1009"
                          d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
    h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/AlvarezMarsal" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </li>
                <li id="am-social-instagram" className="social-icons-am-instagram">
                  <a
                    itemProp="sameAs"
                    className="social color-circle_white"
                    href="https://www.instagram.com/alvarezandmarsal_life/"
                    target="_blank" rel="noreferrer"
                  >
                    <svg
                      fill="#002549"
                      width="30px"
                      height="30px"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <nav
              role="navigation"
              aria-labelledby="block-system-menu-block-footer-main-menu"
              id="block-system-menu-block-footer-main"
            >
              <h2 className="visually-hidden" id="block-system-menu-block-footer-main-menu">
                Footer Main
              </h2>
              <ul className="menu menu-main-footer">
                <li className="menu-item">
                  <a
                    href="/global-locations"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="global-locations"
                  >
                    Global Locations
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/expertise"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="node/106"
                  >
                    Expertise
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/industries"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="node/411"
                  >
                    Industries
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/insights"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="node/511"
                  >
                    Insights
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/our-people"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="our-people"
                  >
                    Our People
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://careers.alvarezandmarsal.com/"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                  >
                    Careers
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/about-am"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="node/6036"
                  >
                    About A&amp;M
                  </a>
                </li>
                <li className="fake-item" />
                <li className="fake-item" />
                <li className="fake-item" />
                <li className="menu-item">
                  <a
                    href="/#block-connect-with-us"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="<front>"
                    className="is-active"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/alumni"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                    data-drupal-link-system-path="node/63671"
                  >
                    Alumni
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://a-mcapital.com/"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                  >
                    A&amp;M Capital
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.amcapitalre.com/"
                    title=""
                    id=""
                    rel=""
                    style={{}}
                    target=""
                    accessKey=""
                  >
                    A&amp;M Capital Real Estate
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              role="navigation"
              aria-labelledby="block-system-menu-block-sub-footer-menu"
              id="block-system-menu-block-sub-footer"
            >
              <h2 className="visually-hidden" id="block-system-menu-block-sub-footer-menu">
                Sub Footer
              </h2>
              <ul className="menu menu-sub-footer">
                <li className="menu-item">
                  <a href="/privacy-notice">Privacy Notice</a>
                </li>
                <li className="menu-item">
                  <a href="/DPF-notice-alvarez-marsal-disputes-and-investigations-llc">
                    EU-US/Swiss-US Data Protection Framework Notice
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/privacy-notice-california">California Privacy Notice</a>
                </li>
                <li className="menu-item">
                  <a href="/cookie-policy">Cookie Notice</a>
                </li>
                <li className="menu-item">
                  <a href="/terms-use">Terms of Use</a>
                </li>
              </ul>
            </nav>
            <div id="block-form-bulletins-with-social">
              <ul className="am-social-network">
                <li>
                  <a href="https://www.linkedin.com/company/162399" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/alvarezandmarsal" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/alvarezmarsal" target="_blank" rel="noreferrer">
                    <svg
                      fill="#002549"
                      className="social-network-icon-svg"
                      version="1.1"
                      id="svg5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1668.56 1221.19"
                      xmlSpace="preserve"
                    >
                      <g id="layer1" transform="translate(52.390088,-25.058597)">
                        <path
                          id="path1009"
                          d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
    h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/AlvarezMarsal" target="_blank" rel="noreferrer">
                    <svg
                      className="social-network-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </li>
                <li id="am-social-instagram" className="social-icons-am-instagram">
                  <a
                    itemProp="sameAs"
                    className="social color-circle_white"
                    href="https://www.instagram.com/alvarezandmarsal_life/"
                    target="_blank" rel="noreferrer"
                  >
                    <svg
                      fill="#002549"
                      width="30px"
                      height="30px"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <form
                className="subscribe-bulletins-redirect"
                data-drupal-selector="subscribe-bulletins-redirect"
                action="https://bulletins.alvarezandmarsal.com"
                method="get"
                id="subscribe-bulletins-redirect"
                acceptCharset="UTF-8"
                data-once="form-updated"
                data-drupal-form-fields="edit-email--2,edit-submit--2,edit-url--2"
              >
                <div className="subscribe-bulletins-redirect-title">A&amp;M Bulletin Sign-Up</div>
                <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
                  <input
                    placeholder="Email"
                    data-drupal-selector="edit-email"
                    type="email"
                    id="edit-email--2"
                    name="email"
                    defaultValue=""
                    size={60}
                    maxLength={254}
                    className="form-email"
                  />
                </div>
                <input
                  data-drupal-selector="edit-honeypot-time"
                  type="hidden"
                  name="honeypot_time"
                  defaultValue="itSsyvRqDVDN_jtdxGMPikPrI6mLaYRW9HO4_mnbIyk"
                />
                <div
                  data-drupal-selector="edit-actions"
                  className="form-actions js-form-wrapper form-wrapper"
                  id="edit-actions--2"
                >
                  <input
                    data-drupal-selector="edit-submit"
                    type="submit"
                    id="edit-submit--2"
                    name="op"
                    defaultValue="Subscribe"
                    className="button js-form-submit form-submit"
                  />
                </div>
                <div
                  className="url-textfield js-form-wrapper form-wrapper"
                  style={{ display: 'none !important' }}
                >
                  <div className="js-form-item form-item js-form-type-textfield form-item-url js-form-item-url">
                    <label htmlFor="edit-url--2">Leave this field blank</label>
                    <input
                      autoComplete="off"
                      data-drupal-selector="edit-url"
                      type="text"
                      id="edit-url--2"
                      name="url"
                      defaultValue=""
                      size={20}
                      maxLength={128}
                      className="form-text"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="footer-bottom">
            <div id="block-am-footer-text">
              <div className="footer-text-info">
                <div>
                  <p>© Copyright 2023, Alvarez &amp; Marsal Holdings, LLC. All Rights Reserved.</p>
                  <p>
                    ALVAREZ &amp; MARSAL®,{' '}
                    <img
                      alt="A&M Logo"
                      data-entity-type="file"
                      data-entity-uuid="e8360120-9a63-4435-9866-040966aa9495"
                      src="/sites/default/files/inline-images/am_corporate_all_white_0.png"
                      width={20}
                      height={18}
                      loading="lazy"
                    />
                    ®,&nbsp;{' '}
                    <img
                      alt="A&M Logo"
                      data-entity-type="file"
                      data-entity-uuid="9db22211-b10f-4817-9ea5-00ddf9e22721"
                      src="/sites/default/files/inline-images/am-old-logo_white.png"
                      width={20}
                      height={18}
                      loading="lazy"
                    />
                    ®,&nbsp;
                    <img
                      alt=""
                      height={35}
                      src="data:image/png;base64,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"
                      width={61}
                    />
                    ® and A&amp;M® are trademarks of Alvarez &amp; Marsal Holdings, LLC.
                  </p>
                  <p>Note: Alvarez &amp; Marsal employs CPAs, but is not a licensed CPA firm.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};
