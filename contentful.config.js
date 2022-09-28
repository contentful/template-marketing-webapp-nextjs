// eslint-disable-next-line no-nested-ternary
const url = !process.env.CONFIG_CONTENTFUL_META_URL
  ? !process.env.VERCEL_URL
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_URL}`
  : process.env.CONFIG_CONTENTFUL_META_URL;

module.exports = {
  contentful: {
    // main_space_id: Contentful Space ID
    main_space_id: process.env.CONFIG_CONTENTFUL_MAIN_SPACE_ID || '',
    // main_space_token: Contentful Space Delivery API - access token
    main_space_token: process.env.CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN || '',
    // main_space_preview_token: Contentful Space Preview API - access token
    main_space_preview_token: process.env.CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN || '',
    // main_space_management_token: Contentful Content Management token
    main_space_management_token: process.env.CONFIG_CONTENTFUL_MAIN_SPACE_MANAGEMENT_TOKEN || '',
  },
  meta: {
    title:
      process.env.CONFIG_CONTENTFUL_META_TITLE ||
      'Digital banking for the new generation | Colorful Coin',
    description:
      process.env.CONFIG_CONTENTFUL_META_DESCRIPTION ||
      `Enjoy premium banking services wherever you go: instant transfers and best exchange rates, exclusive offers and priority customer support. Apply online at ${url
        .replace('https://', '')
        .replace('http://', '')}`,
    url,
    image:
      'https://images.ctfassets.net/w8vf7dk7f259/4bucno7z1xAyVI5MOkU6Pu/ded83d0ec1eb732ae3a81ddab7a18877/fallback-image-03.jpg',
  },
  header: {
    logo:
      process.env.CONFIG_CONTENTFUL_HEADER_LOGO ||
      'https://images.ctfassets.net/w8vf7dk7f259/N3oD9LQUQYMIG4mj0IHck/2cae76d412675c96100941b2a381672d/colorful-coin-logo.svg',
    logoWidth: process.env.CONFIG_CONTENTFUL_HEADER_LOGO_WIDTH
      ? parseInt(process.env.CONFIG_CONTENTFUL_HEADER_LOGO_WIDTH, 10)
      : 113,
    logoHeight: process.env.CONFIG_CONTENTFUL_HEADER_LOGO_HEIGHT
      ? parseInt(process.env.CONFIG_CONTENTFUL_HEADER_LOGO_HEIGHT, 10)
      : 40,
    menu: process.env.CONFIG_CONTENTFUL_HEADER_MENU
      ? JSON.parse(process.env.CONFIG_CONTENTFUL_HEADER_MENU)
      : [
          {
            label: 'Products',
            children: [
              {
                label: 'Classic',
                location: '/classic-card',
              },
              {
                label: 'Black',
                location: '/black-card',
              },
              {
                label: 'Corporate',
                location: '/corporate-card',
              },
            ],
          },
          {
            label: 'Pricing',
            location: '/pricing',
          },
          {
            label: 'About us',
            location: '/about-us',
          },
          {
            label: 'Blog',
            location: '/blog',
          },
        ],
  },
  footer: {
    logo:
      process.env.CONFIG_CONTENTFUL_FOOTER_LOGO ||
      'https://images.ctfassets.net/w8vf7dk7f259/24hV8yQwJho6mXbrkLEuCY/29c93d344856aed9e3da110d0c3c8500/colorful-collective-logo-light.svg',
    logoWidth: process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_WIDTH
      ? parseInt(process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_WIDTH, 10)
      : 280,
    logoHeight: process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_HEIGHT
      ? parseInt(process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_HEIGHT, 10)
      : 19,
    menu: process.env.CONFIG_CONTENTFUL_FOOTER_MENU
      ? JSON.parse(process.env.CONFIG_CONTENTFUL_FOOTER_MENU)
      : [
          {
            label: 'Products',
            children: [
              {
                label: 'Classic',
                location: '/classic-card',
              },
              {
                label: 'Black',
                location: '/black-card',
              },
              {
                label: 'Corporate',
                location: '/corporate-card',
              },
              {
                label: 'Pricing',
                location: '/pricing',
              },
            ],
          },
          {
            label: 'Customers',
            children: [
              {
                label: 'Invite friends',
                location: '/back-to-school',
              },
              {
                label: 'Help',
                location: '/about-us',
              },
              {
                label: 'Review',
                location: '#',
              },
              {
                label: 'Contact',
                location: '/about-us',
              },
            ],
          },
          {
            label: 'Company',
            children: [
              {
                label: 'About us',
                location: '/about-us',
              },
              {
                label: 'Blog',
                location: '/blog',
              },
              {
                label: 'Careers',
                location: '/about-us',
              },
              {
                label: 'Press',
                location: '/blog',
              },
            ],
          },
        ],
    social: process.env.CONFIG_CONTENTFUL_FOOTER_SOCIAL
      ? JSON.parse(process.env.CONFIG_CONTENTFUL_FOOTER_SOCIAL)
      : {
          // Supported: Twitter, Facebook, LinkedIn, Instagram
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#',
        },
    googlePlayLogo:
      process.env.CONFIG_CONTENTFUL_FOOTER_GOOGLE_PLAY_LOGO ||
      'https://images.ctfassets.net/w8vf7dk7f259/1mkXz9jh9W2NUQ1LbOw2BY/ea6c0d3171d05d4cad3c670120e840b2/google-play.png',
    appStoreLogo:
      process.env.CONFIG_CONTENTFUL_FOOTER_APP_STORE_LOGO ||
      'https://images.ctfassets.net/w8vf7dk7f259/4BT6nEbNeJcxlcxPCbFMo0/99a92d5b38fd0bf613cb679ea1d2e876/app-store.png',
    legal: process.env.CONFIG_CONTENTFUL_FOOTER_LEGAL
      ? JSON.parse(process.env.CONFIG_CONTENTFUL_FOOTER_LEGAL)
      : [
          {
            label: 'Accessibility',
            location: '/legal/accessibility',
          },
          {
            label: 'Privacy Policy',
            location: '/legal/privacy-policy',
          },
          {
            label: 'Terms of Use',
            location: '/legal/terms-of-use',
          },
          {
            label: 'Sitemap',
            location: '/sitemap',
          },
          {
            label: 'Intranet',
            location: 'https://dalia.colorfuldemo.com',
          },
        ],
  },
  icon: {
    light:
      process.env.CONFIG_CONTENTFUL_ICON_LIGHT ||
      'https://images.ctfassets.net/w8vf7dk7f259/llZXwDCnl9NqdyuVvjn1n/d20cea90225e7f53dfbf8a18a46e972d/gocoin-icon-light.svg',
    dark:
      process.env.CONFIG_CONTENTFUL_ICON_DARK ||
      'https://images.ctfassets.net/w8vf7dk7f259/i9iu6GU6dFWQJJwJzwxCT/952cc3bab415e28f521c22933072a09c/gocoin-icon.svg',
    width: process.env.CONFIG_CONTENTFUL_ICON_WIDTH
      ? parseInt(process.env.CONFIG_CONTENTFUL_ICON_WIDTH, 10)
      : 66,
    height: process.env.CONFIG_CONTENTFUL_ICON_HEIGHT
      ? parseInt(process.env.CONFIG_CONTENTFUL_ICON_HEIGHT, 10)
      : 64,
  },
};
