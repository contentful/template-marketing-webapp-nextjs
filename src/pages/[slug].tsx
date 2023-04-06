import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { ComponentReferenceFieldsFragment } from '@src/lib/__generated/graphql.types';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchMap, PrefetchMappingTypeFetcher } from '@src/lib/prefetch-mappings';
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
  const slug = params.slug;

  try {
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
    const content: ComponentReferenceFieldsFragment | undefined | null = page?.pageContent;

    await Promise.all([
      ...prefetchPromiseArr({ inputArr: topSection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: [content], locale, queryClient }),
    ]);

    if (content) {
      const { __typename, sys } = content;

      if (!__typename)
        return {
          notFound: true,
        };

      const query = prefetchMap?.[__typename];

      if (!query)
        return {
          notFound: true,
        };

      const data: PrefetchMappingTypeFetcher = await query.fetcher({
        id: sys.id,
        locale,
        preview: false,
      })();

      await Promise.all([
        ...prefetchPromiseArr({
          locale,
          queryClient,
        }),
      ]);
    }

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
