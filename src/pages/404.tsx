import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import PageError from '@src/components/errors/page-error';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const ErrorPage404 = () => {
  const { query } = useRouter();
  console.log(query);

  return <PageError error={{ code: 404 }} />;
};

export const getStaticProps: GetStaticProps = async ({ locale = 'nl' }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default ErrorPage404;
