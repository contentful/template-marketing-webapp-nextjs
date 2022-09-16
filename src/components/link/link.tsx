import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import MuiButton from '@material-ui/core/Button';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string';

const useStyles = makeStyles(() => ({
  baseAnchor: {
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
  },
}));

interface Props {
  href?: string;
  as?: string;
  target?: string;
  dropUrlParams?: boolean;
  children: any;
  className?: string;
  withoutMaterial?: boolean;
  underline?: boolean;
  onClick?: () => any;
  isButton?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  color?: any;
  startIcon?: any;
  endIcon?: any;
  urlParams?: string;
}
export type LinkProps = Props;

const Link = (props: Props) => {
  const {
    dropUrlParams,
    className,
    children,
    withoutMaterial,
    underline,
    onClick,
    isButton = false,
    variant,
    size,
    color,
    startIcon,
    endIcon,
    urlParams = '',
  } = props;
  const router = useRouter();
  let href = props.href || '';
  let { as } = props;
  if (as && !dropUrlParams && router) {
    const urlQuerystring = router.asPath.split('?')[1];
    if (urlQuerystring) {
      href +=
        href.indexOf('?') < 0 ? `?${urlQuerystring}` : `&${urlQuerystring}`;
      as += `?${urlQuerystring}`;
    }
  }

  if (urlParams !== '') {
    const parsedUrlParams = queryString.parse(urlParams);
    const parsedHref = queryString.parseUrl(href);

    const mergedParsedHref = {
      ...parsedHref,
      query: {
        ...parsedHref.query,
        ...parsedUrlParams,
      },
    };

    href = queryString.stringifyUrl(mergedParsedHref);

    if (as !== undefined) {
      const parsedAs = queryString.parseUrl(as);

      const mergedParsedAs = {
        ...parsedAs,
        query: {
          ...parsedAs.query,
          ...parsedUrlParams,
        },
      };

      as = queryString.stringifyUrl(mergedParsedAs);
    }
  }

  const classes = useStyles();

  if (props.href === undefined || props.href === null)
    return <>{props.children}</>;

  const external = href.startsWith('http://') || href.startsWith('https://');
  const underlineStyle = underline ? 'always' : 'none';

  if (external === true || !href) {
    return isButton ? (
      <MuiButton
        href={href}
        className={className}
        color={color}
        onClick={() => onClick && onClick()}
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </MuiButton>
    ) : (
      <MuiLink
        className={className}
        underline={underlineStyle}
        color={color}
        href={href}
        target={props.target}
        rel="noopener noreferrer"
        onClick={() => onClick && onClick()}
      >
        {children}
      </MuiLink>
    );
  }

  if (withoutMaterial === true) {
    return (
      <NextLink href={href} as={as}>
        <a className={clsx(classes.baseAnchor, className)}>{children}</a>
      </NextLink>
    );
  }

  if (isButton === true) {
    return (
      <NextLink href={href} as={as}>
        <MuiButton
          href={as}
          className={className}
          color={color}
          onClick={() => onClick && onClick()}
          variant={variant}
          size={size}
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {children}
        </MuiButton>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} as={as}>
      <MuiLink
        href={as}
        className={className}
        underline={underlineStyle}
        color={color}
        onClick={() => onClick && onClick()}
      >
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
