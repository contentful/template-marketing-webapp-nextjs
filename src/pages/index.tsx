import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { getClient } from '@src/lib/ld-server';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

const LangPage: NextPage = props => {
  console.log({ props });
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale, query }: NextPageContext) => {
  // Feature flags
  const client = await getClient();
  console.log({ client });
  const flago = await client.variation(
    'stephans-cool-non-boolean-test-flag',
    {
      kind: 'user',
      key: 'user-key-123abc',
      name: 'Sandy',
    },
    false,
  );
  console.log({ flago });
  try {
    const preview = Boolean(query.preview);
    const queryClient = new QueryClient();

    // Default queries
    await queryClient.prefetchQuery(
      useCtfPageQuery.getKey({ slug: 'home', locale, preview }),
      useCtfPageQuery.fetcher({ slug: 'home', locale, preview }),
    );
    await queryClient.prefetchQuery(
      useCtfNavigationQuery.getKey({ locale, preview }),
      useCtfNavigationQuery.fetcher({ locale, preview }),
    );
    await queryClient.prefetchQuery(
      useCtfFooterQuery.getKey({ locale, preview }),
      useCtfFooterQuery.fetcher({ locale, preview }),
    );

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })();
    const page = pageData.pageCollection?.items[0];

    const topSection = page?.topSectionCollection?.items;
    const content = page?.pageContent;
    const extraSection = page?.extraSectionCollection?.items;

    await Promise.all([
      ...prefetchPromiseArr({ inputArr: topSection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: extraSection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: [content], locale, queryClient }),
    ]);

    return {
      props: {
        flago,
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
