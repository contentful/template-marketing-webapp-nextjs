import React, { useContext } from 'react';

import Link from '@src/components/link/link';
import { ContentfulContext } from '@src/contentful-context';
import { getLocaleConfig } from '@src/locales-map';

interface PostLinkPropsInterface {
  post: {
    slug: string | null;
  };
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
  urlParams?: string;
}

const PostLink = (props: PostLinkPropsInterface) => {
  const { locale, defaultLocale } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale || defaultLocale);

  const pathname = `/[lang]/post/[slug]`;
  const as = `/${lang}/post/${props.post.slug || ''}`;
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
    urlParams: props.urlParams,
  };

  return <Link {...linkProps}>{props.render ? props.render(as) : props.children}</Link>;
};

export default PostLink;
