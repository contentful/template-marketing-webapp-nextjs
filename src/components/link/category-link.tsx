import React, { ReactNode } from 'react';

import { CategoryLinkFieldsFragment } from './__generated/category-link.generated';

import Link, { LinkProps } from '@src/components/link/link';

export type CategoryLinkProps = Omit<LinkProps, 'children'> & {
  category: CategoryLinkFieldsFragment;
  render?: (pathname?: string) => ReactNode;
  children?: ReactNode;
};

const CategoryLink = (props: CategoryLinkProps) => {
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
