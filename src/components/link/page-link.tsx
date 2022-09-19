import React, { useContext } from 'react';

import Link from '@src/components/link/link';
import { ContentfulContext } from '@src/contentful-context';
import { getLocaleConfig } from '@src/locales-map';

export type PageLinkPage = {
  sys: { id: string };
  slug?: string | null;
};

interface Props {
  page: PageLinkPage;
  lang?: string;
  withoutMaterial?: boolean;
  underline?: boolean;
  children?: any;
  className?: string;
  render?: (pathname?: string) => any;
  onClick?: () => any;
  isButton?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  color?:
    | 'inherit'
    | 'default'
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  endIcon?: any;
  urlParams?: string;
}
export type PageLinkProps = Props;

const PageLink = (props: Props) => {
  const { locale, defaultLocale } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale || defaultLocale);

  let pathname = `/[lang]/[slug]`;
  const as = props.page.slug ? `/${lang}/${props.page.slug}` : `/${lang}`;

  if (as.endsWith('/sign-up')) {
    pathname = `/[lang]/sign-up`;
  } else if (as.endsWith('/sign-in')) {
    pathname = `/[lang]/sign-in`;
  }

  const linkProps = {
    href: pathname,
    as,
    className: props.className,
    onClick: props.onClick,
    withoutMaterial: props.withoutMaterial,
    underline: props.underline,
    isButton: props.isButton || false,
    variant: props.variant,
    size: props.size,
    color: props.color,
    endIcon: props.endIcon,
    urlParams: props.urlParams,
  };

  return <Link {...linkProps}>{props.render ? props.render(as) : props.children}</Link>;
};

export default PageLink;
