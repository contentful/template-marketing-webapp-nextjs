import React from 'react';
import PageError from '@src/components/errors/page-error';

const ErrorPage404 = () => {
  return <PageError error={{ code: 404 }} />;
};

export default ErrorPage404;
