import { ReactNode } from 'react';

import { PostLinkFieldsFragment } from '@src/components/link/__generated/post-link.generated';
import Link, { LinkProps } from '@src/components/link/link';

const PostLink = (
  props: Omit<LinkProps, 'children'> & {
    post: PostLinkFieldsFragment;
    render?: (pathname?: string) => ReactNode;
    children?: ReactNode;
  },
) => {
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
