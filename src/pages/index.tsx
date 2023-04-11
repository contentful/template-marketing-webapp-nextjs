import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

const LangPage: NextPage = () => {
  return <CtfPageGgl />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => {
  try {
    const queryClient = new QueryClient();

    // Default queries
    await queryClient.prefetchQuery(
      useCtfPageQuery.getKey({ locale, preview: false }),
      useCtfPageQuery.fetcher({ locale, preview: false }),
    );

    await queryClient.prefetchQuery(
      useCtfFooterQuery.getKey({ locale, preview: false }),
      useCtfFooterQuery.fetcher({ locale, preview: false }),
    );

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ locale, preview: false })();
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

export default LangPage;
