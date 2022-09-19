import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { ContentfulContext } from '@src/contentful-context';
import CtfLegalPageGgl from '@src/ctf-components/ctf-legal-page/ctf-legal-page-gql';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface LegalPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const LegalPage: NextPage<LegalPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { locale } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfLegalPageGgl locale={locale} slug={slug} />;
};

const LegalPageWithProviders = withProviders()(LegalPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: LegalPageWithProviders,
});

export default LegalPageWithProviders;
