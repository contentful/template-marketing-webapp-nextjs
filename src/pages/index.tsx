import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import { useCtfPageQuery } from '@src/ctf-components/ctf-page/__generated/ctf-page.generated';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useCtfPageQuery.getKey({ locale, slug: '/' }),
    useCtfPageQuery.fetcher({ locale, slug: '/' }),
  );

  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default LangPage;
