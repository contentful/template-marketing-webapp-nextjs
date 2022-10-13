import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { CtfTagGql } from '@ctf-components/ctf-tag/ctf-tag-gql';
import { useContentfulContext } from '@src/contentful-context';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const TagPage: NextPage = () => {
  const router = useRouter();
  const { previewActive } = useContentfulContext();
  const id = (router?.query.id as string) || '';

  return <CtfTagGql id={id} preview={previewActive} />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default TagPage;
