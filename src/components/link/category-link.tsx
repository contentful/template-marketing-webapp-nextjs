import React from 'react';

import Link from '@src/components/link/link';

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
  const pathname = `/category/${props.category.slug || ''}`;
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
  };

  return <Link {...linkProps}>{props.render ? props.render(pathname) : props.children}</Link>;
};

export default CategoryLink;
