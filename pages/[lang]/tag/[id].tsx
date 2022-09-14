import React, { useContext } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import CtfTagGgl from '@src/ctf-components/ctf-tag/ctf-tag-gql';
import { ContentfulContext } from '@pages/_app';
import withProviders, {
  generateGetServerSideProps,
} from '@src/lib/with-providers';

interface TagPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const TagPage: NextPage<TagPagePropsInterface> = (props) => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { locale, previewActive } = useContext(ContentfulContext);
  const id = query ? (query.id as string) : '';

  return <CtfTagGgl locale={locale} id={id} preview={previewActive} />;
};

const TagPageWithProviders = withProviders()(TagPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps(
  {
    Page: TagPageWithProviders,
  },
);

export default TagPageWithProviders;
