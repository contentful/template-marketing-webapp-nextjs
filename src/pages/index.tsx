import { NextPage, NextPageContext } from 'next';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default LangPage;
