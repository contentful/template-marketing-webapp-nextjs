import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import CtfPageGgl from '@ctf-components/ctf-page/ctf-page-qgl';
import { useCtfPageQuery } from '@src/ctf-components/ctf-page/__generated/ctf-page.generated';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const SlugPage: NextPage = () => {
  const router = useRouter();
  const slug = (router?.query.slug as string) || '';

  return <CtfPageGgl slug={slug} />;
};

export interface CustomNextPageContext extends NextPageContext {
  params: {
    slug: string;
  };
  id: string;
}

export const getServerSideProps = async ({ locale, params }: CustomNextPageContext) => {
  const slug = params.slug;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useCtfPageQuery.getKey({ slug, locale }),
    useCtfPageQuery.fetcher({ slug, locale }),
  );

  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SlugPage;
