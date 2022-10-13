import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import CtfLegalPageGgl from '@ctf-components/ctf-legal-page/ctf-legal-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const LegalPage: NextPage = () => {
  const router = useRouter();
  const slug = (router?.query.slug as string) || '';

  return <CtfLegalPageGgl slug={slug} />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default LegalPage;
