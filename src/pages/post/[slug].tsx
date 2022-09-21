import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import CtfPostGgl from '@ctf-components/ctf-post/ctf-post-gql';
import { ContentfulContext } from '@src/contentful-context';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface PostPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const PostPage: NextPage<PostPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { previewActive } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfPostGgl slug={slug} preview={previewActive} />;
};

const PostPageWithProviders = withProviders()(PostPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: PostPageWithProviders,
});

export default PostPageWithProviders;
