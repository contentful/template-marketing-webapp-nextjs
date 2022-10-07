import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { CtfPostGql } from '@ctf-components/ctf-post/ctf-post-gql';
import { useContentfulContext } from '@src/contentful-context';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface PostPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const PostPage: NextPage<PostPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { previewActive } = useContentfulContext();
  const slug = query ? (query.slug as string) : '';

  return <CtfPostGql slug={slug} preview={previewActive} />;
};

const PostPageWithProviders = withProviders()(PostPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: PostPageWithProviders,
});

export default PostPageWithProviders;
