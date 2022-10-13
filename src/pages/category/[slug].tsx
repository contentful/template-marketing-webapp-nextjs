import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { CtfCategoryGql } from '@ctf-components/ctf-category/ctf-category-gql';
import { useContentfulContext } from '@src/contentful-context';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const CategoryPage: NextPage = () => {
  const router = useRouter();
  const { previewActive } = useContentfulContext();
  const slug = (router?.query.slug as string) || '';

  return <CtfCategoryGql slug={slug} preview={previewActive} />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});
export default CategoryPage;
