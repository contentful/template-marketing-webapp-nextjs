import React from 'react';

import Link from '@src/components/link/link';

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
  const pathname = props.page.slug ? `/${props.page.slug}` : ``;

  const linkProps = {
    href: pathname,
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

  return <Link {...linkProps}>{props.render ? props.render(pathname) : props.children}</Link>;
};

export default PageLink;
