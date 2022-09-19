import React, { useContext } from 'react';

import Link from '@src/components/link/link';
import { ContentfulContext } from '@src/contentful-context';
import { getLocaleConfig } from '@src/locales-map';

interface CategoryLinkPropsInterface {
  category: {
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
}

const CategoryLink = (props: CategoryLinkPropsInterface) => {
  const { locale, defaultLocale } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale || defaultLocale);

  const pathname = `/[lang]/category/[slug]`;
  const as = `/${lang}/category/${props.category.slug || ''}`;
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
  };

  return <Link {...linkProps}>{props.render ? props.render(as) : props.children}</Link>;
};

export default CategoryLink;
