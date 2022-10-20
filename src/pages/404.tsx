import { GetStaticProps } from 'next';

import PageError from '@src/components/errors/page-error';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const ErrorPage404 = () => {
  return <PageError error={{ code: 404 }} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default ErrorPage404;
