import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
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

export const getServerSideProps = async ({ locale, params, query }: CustomNextPageContext) => {
  const slug = params.slug;
  const preview = Boolean(query.preview);

  try {
    const queryClient = new QueryClient();

    // Default queries
    const prefetchPromises = [
      queryClient.prefetchQuery(
        useCtfPageQuery.getKey({ slug, locale, preview }),
        useCtfPageQuery.fetcher({ slug, locale, preview }),
      ),
      queryClient.prefetchQuery(
        useCtfNavigationQuery.getKey({ locale, preview }),
        useCtfNavigationQuery.fetcher({ locale, preview }),
      ),
      queryClient.prefetchQuery(
        useCtfFooterQuery.getKey({ locale, preview }),
        useCtfFooterQuery.fetcher({ locale, preview }),
      ),
    ];
    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug, locale, preview })();
    const page = pageData.pageCollection?.items[0];

    const topSection = page?.topSectionCollection?.items;
    const extraSection = page?.extraSectionCollection?.items;
    const content: ComponentReferenceFieldsFragment | undefined | null = page?.pageContent;

    await Promise.all([
      ...prefetchPromises,
      ...prefetchPromiseArr({ inputArr: topSection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: extraSection, locale, queryClient }),
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
        preview,
      })();

      // Different data structured can be returned, this function makes sure the correct data is returned
      const inputArr = (__typename => {
        if ('topicBusinessInfo' in data) {
          return data?.topicBusinessInfo?.body?.links.entries.block;
        }

        if ('topicPerson' in data) {
          return [data?.topicPerson];
        }

        if ('topicProduct' in data) {
          return [data?.topicProduct];
        }

        return [];
      })();

      await Promise.all([
        ...prefetchPromiseArr({
          inputArr,
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
