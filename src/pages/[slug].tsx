import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface SlugPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const SlugPage: NextPage<SlugPagePropsInterface> = ({ ssrQuery }) => {
  const router = useRouter();
  const query = router ? router.query : ssrQuery;
  const slug = query ? (query.slug as string) : '';

  return <CtfPageGgl slug={slug} />;
};

const SlugPageWithProviders = withProviders()(SlugPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: SlugPageWithProviders,
});

export default SlugPageWithProviders;
