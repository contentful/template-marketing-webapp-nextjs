import { NextPage, GetServerSideProps } from 'next';
import React, { useContext } from 'react';

import { ContentfulContext } from '@src/contentful-context';
import CtfPageGgl from '@src/ctf-components/ctf-page/ctf-page-qgl';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

const LangPage: NextPage = () => {
  const { locale } = useContext(ContentfulContext);

  return <CtfPageGgl slug="/" locale={locale} />;
};

const LangPageWithProviders = withProviders()(LangPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: LangPageWithProviders,
});

export default LangPageWithProviders;
