import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { useRouter } from 'next/router';
import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

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
  try {
    const slug = params.slug;
    const queryClient = new QueryClient();

    // Default queries
    await queryClient.prefetchQuery(
      useCtfPageQuery.getKey({ slug, locale, preview: false }),
      useCtfPageQuery.fetcher({ slug, locale, preview: false }),
    );
    await queryClient.prefetchQuery(
      useCtfFooterQuery.getKey({ locale, preview: false }),
      useCtfFooterQuery.fetcher({ locale, preview: false }),
    );

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug, locale, preview: false })();
    const page = pageData.pageCollection?.items[0];

    const topSection = page?.topSectionCollection?.items;

    await Promise.all([...prefetchPromiseArr({ inputArr: topSection, locale, queryClient })]);

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default SlugPage;
