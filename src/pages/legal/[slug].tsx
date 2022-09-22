import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import CtfLegalPageGgl from '@ctf-components/ctf-legal-page/ctf-legal-page-gql';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface LegalPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const LegalPage: NextPage<LegalPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const slug = query ? (query.slug as string) : '';

  return <CtfLegalPageGgl slug={slug} />;
};

const LegalPageWithProviders = withProviders()(LegalPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: LegalPageWithProviders,
});

export default LegalPageWithProviders;
