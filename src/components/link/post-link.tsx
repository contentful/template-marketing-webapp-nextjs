import React from 'react';

import Link from '@src/components/link/link';

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
  const pathname = `/post/${props.post.slug || ''}`;
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
    urlParams: props.urlParams,
  };

  return <Link {...linkProps}>{props.render ? props.render(pathname) : props.children}</Link>;
};

export default PostLink;
