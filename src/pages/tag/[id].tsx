import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import CtfTagGgl from '@ctf-components/ctf-tag/ctf-tag-gql';
import { ContentfulContext } from '@src/contentful-context';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface TagPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const TagPage: NextPage<TagPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { previewActive } = useContext(ContentfulContext);
  const id = query ? (query.id as string) : '';

  return <CtfTagGgl id={id} preview={previewActive} />;
};

const TagPageWithProviders = withProviders()(TagPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: TagPageWithProviders,
});

export default TagPageWithProviders;
