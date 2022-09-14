import React, { useContext } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import CtfCategoryGgl from '@src/ctf-components/ctf-category/ctf-category-gql';
import { ContentfulContext } from '@pages/_app';
import withProviders, {
  generateGetServerSideProps,
} from '@src/lib/with-providers';

interface CategoryPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const CategoryPage: NextPage<CategoryPagePropsInterface> = (props) => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { locale, previewActive } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfCategoryGgl locale={locale} slug={slug} preview={previewActive} />;
};

const CategoryPageWithProviders = withProviders()(CategoryPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps(
  {
    Page: CategoryPageWithProviders,
  },
);

export default CategoryPageWithProviders;
