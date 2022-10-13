import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { CtfPostGql } from '@ctf-components/ctf-post/ctf-post-gql';
import { useContentfulContext } from '@src/contentful-context';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { previewActive } = useContentfulContext();
  const slug = (router?.query.slug as string) || '';

  return <CtfPostGql slug={slug} preview={previewActive} />;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});
export default PostPage;
