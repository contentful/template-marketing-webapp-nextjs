import { NextPage, GetServerSideProps } from 'next';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

const LangPageWithProviders = withProviders()(LangPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: LangPageWithProviders,
});

export default LangPageWithProviders;
