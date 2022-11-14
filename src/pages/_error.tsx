import { IncomingMessage } from 'http';

import { NextPage, NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';
import React from 'react';

import { PageError } from '@src/components/features/errors/page-error';
import { tryget } from '@src/utils';

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
  req?: Pick<NextPageErrorRequest, 'url' | 'method' | 'query' | 'cookies' | 'body' | 'headers'>;
}

const getStatusAndMessageFromError = (
  err: Error,
  statusCode = 500,
): { code: number; message: string } => {
  let error = {
    code: statusCode,
    message: '',
  };

  const errorMessage = tryget(() => (err as any).networkError.result.errors[0].message, '');

  const errorStatus = tryget(() => (err as any).networkError.statusCode, statusCode);

  const isEnvironmentNotFoundError = tryget(
    () => errorMessage.includes('The access token you provided is invalid'),
    false,
  );

  const isMissingContentTypeError = tryget(() => errorMessage.includes('Unknown type "'), false);

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

const ErrorPage: NextPage<ErrorPagePropsInterface> = ({ statusCode, err, code, message }) => {
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
    return { statusCode: 404 };
  }

  if (err) {
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

  return errorInitialProps;
};

export default ErrorPage;
