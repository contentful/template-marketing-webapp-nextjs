import React, { useContext } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import CtfPageGgl from '@src/ctf-components/ctf-page/ctf-page-qgl';
import { ContentfulContext } from '@pages/_app';
import withProviders, {
  generateGetServerSideProps,
} from '@src/lib/with-providers';

interface SlugPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const SlugPage: NextPage<SlugPagePropsInterface> = (props) => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { locale } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfPageGgl locale={locale} slug={slug} />;
};

const SlugPageWithProviders = withProviders()(SlugPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps(
  {
    Page: SlugPageWithProviders,
  },
);

export default SlugPageWithProviders;
