import MuiButton from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { ReactNode } from 'react';

const useStyles = makeStyles(() => ({
  baseAnchor: {
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
  },
}));

interface Props {
  children: ReactNode;
  href?: string;
  as?: string;
  target?: string;
  dropUrlParams?: boolean;
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
  title?: string;
}
export type LinkProps = Props;

export const Link = (props: Props) => {
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
    title,
  } = props;
  const router = useRouter();
  let href = props.href || '';
  let { as } = props;

  if (!dropUrlParams && router) {
    const urlQuerystring = router.asPath.split('?')[1];
    if (urlQuerystring) {
      href += href.indexOf('?') < 0 ? `?${urlQuerystring}` : `&${urlQuerystring}`;
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

  if (props.href === undefined || props.href === null) return <>{props.children}</>;

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
        title={title}>
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
        title={title}>
        {children}
      </MuiLink>
    );
  }

  if (withoutMaterial === true) {
    return (
      <NextLink href={href} as={as} passHref>
        <a className={clsx(classes.baseAnchor, className)} title={title}>
          {children}
        </a>
      </NextLink>
    );
  }

  if (isButton === true) {
    return (
      <NextLink href={href} as={as} passHref>
        <MuiButton
          href={as}
          className={className}
          color={color}
          onClick={() => onClick && onClick()}
          variant={variant}
          size={size}
          startIcon={startIcon}
          endIcon={endIcon}
          title={title}>
          {children}
        </MuiButton>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} as={as} passHref>
      <MuiLink
        href={as}
        className={className}
        underline={underlineStyle}
        color={color}
        onClick={() => onClick && onClick()}
        title={title}>
        {children}
      </MuiLink>
    </NextLink>
  );
};
