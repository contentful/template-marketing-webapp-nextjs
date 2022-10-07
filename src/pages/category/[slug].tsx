import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { CtfCategoryGql } from '@ctf-components/ctf-category/ctf-category-gql';
import { useContentfulContext } from '@src/contentful-context';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface CategoryPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const CategoryPage: NextPage<CategoryPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { previewActive } = useContentfulContext();
  const slug = query ? (query.slug as string) : '';

  return <CtfCategoryGql slug={slug} preview={previewActive} />;
};

const CategoryPageWithProviders = withProviders()(CategoryPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: CategoryPageWithProviders,
});

export default CategoryPageWithProviders;
