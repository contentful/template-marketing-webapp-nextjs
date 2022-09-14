import React from 'react';
import { IncomingMessage } from 'http';
import { NextPage, NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';
import * as Sentry from '@sentry/node';
import { tryget } from '@src/utils';
import PageError from '@src/components/errors/page-error';

export interface NextPageErrorRequest extends IncomingMessage {
  query: {
    [key: string]: string | string[];
  };
  cookies: {
    [key: string]: string;
  };
  body: any;
}

interface ErrorPagePropsInterface {
  statusCode: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
  code?: number;
  message?: string;
  req?: Pick<
    NextPageErrorRequest,
    'url' | 'method' | 'query' | 'cookies' | 'body' | 'headers'
  >;
}

const getStatusAndMessageFromError = (
  err: Error,
  statusCode: number = 500,
): { code: number; message: string } => {
  let error = {
    code: statusCode,
    message: '',
  };

  const errorMessage = tryget(
    () => (err as any).networkError.result.errors[0].message,
    '',
  );

  const errorStatus = tryget(
    () => (err as any).networkError.statusCode,
    statusCode,
  );

  const isEnvironmentNotFoundError = tryget(
    () => errorMessage.includes('The access token you provided is invalid'),
    false,
  );

  const isMissingContentTypeError = tryget(
    () => errorMessage.includes('Unknown type "'),
    false,
  );

  if (isEnvironmentNotFoundError) {
    error = {
      code: errorStatus,
      message:
        'Either environment was not found, or your access token is incorrect. If your default environment works, then it is possible that you misspelled your environment, or you did not enable it in the API Key settings.',
    };
  } else if (isMissingContentTypeError) {
    const missingContentType = errorMessage.split('"')[1];

    error = {
      code: errorStatus,
      message: `Could not find "${missingContentType}" Content Type. Make sure you have installed the necessary apps and that you did not rename or delete any of the core content types.`,
    };
  } else if (errorMessage !== '') {
    error = {
      code: errorStatus,
      message: errorMessage,
    };
  } else {
    error = {
      code: errorStatus,
      message: err.message,
    };
  }

  return error;
};

const ErrorPage: NextPage<ErrorPagePropsInterface> = ({
  statusCode,
  hasGetInitialPropsRun,
  err,
  code,
  message,
  req,
}) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err, (scope) => {
      if (req === undefined) {
        return scope;
      }

      scope.setTag('host', req.headers.host || '');
      scope.setTag('url', req.url || '');
      scope.setTag('method', req.method || '');
      scope.setContext('query', req.query || {});
      scope.setContext('cookies', req.cookies || {});
      scope.setContext('body', req.body || {});
      scope.setContext('headers', req.headers);

      return scope;
    });
  }

  if (code !== undefined && message !== undefined) {
    return <PageError error={{ code, message }} />;
  }

  if (err !== undefined) {
    return <PageError error={getStatusAndMessageFromError(err, statusCode)} />;
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async ({
  req,
  res,
  err,
  asPath,
  pathname,
  query,
  AppTree,
}: NextPageContext & {
  req: NextPageErrorRequest;
}) => {
  const errorInitialProps: ErrorProps & {
    hasGetInitialPropsRun?: boolean;
  } = await NextErrorComponent.getInitialProps({
    res,
    err,
    pathname,
    query,
    AppTree,
  });

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (res?.statusCode === 404) {
    // Opinionated: do not record an exception in Sentry for 404
    return { statusCode: 404 };
  }

  if (err) {
    Sentry.captureException(err, (scope) => {
      if (req === undefined) {
        return scope;
      }

      scope.setTag('host', req.headers.host || '');
      scope.setTag('url', req.url || '');
      scope.setTag('method', req.method || '');
      scope.setContext('query', req.query || {});
      scope.setContext('cookies', req.cookies || {});
      scope.setContext('body', req.body || {});
      scope.setContext('headers', req.headers);

      return scope;
    });

    return {
      ...errorInitialProps,
      ...getStatusAndMessageFromError(err, res?.statusCode),
      req: req
        ? {
            url: req.url,
            method: req.method,
            query: req.query,
            cookies: req.cookies,
            body: req.body,
            headers: req.headers,
          }
        : undefined,
    };
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
  );

  return errorInitialProps;
};

export default ErrorPage;
