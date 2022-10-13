import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const SlugPage: NextPage = () => {
  const router = useRouter();
  const slug = (router?.query.slug as string) || '';

  return <CtfPageGgl slug={slug} />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default SlugPage;
