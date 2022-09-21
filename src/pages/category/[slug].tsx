import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import CtfCategoryGgl from '@ctf-components/ctf-category/ctf-category-gql';
import { ContentfulContext } from '@src/contentful-context';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface CategoryPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const CategoryPage: NextPage<CategoryPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { previewActive } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfCategoryGgl slug={slug} preview={previewActive} />;
};

const CategoryPageWithProviders = withProviders()(CategoryPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: CategoryPageWithProviders,
});

export default CategoryPageWithProviders;
