import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { ContentfulContext } from '@src/contentful-context';
import CtfPostGgl from '@src/ctf-components/ctf-post/ctf-post-gql';
import withProviders, { generateGetServerSideProps } from '@src/lib/with-providers';

interface PostPagePropsInterface {
  ssrQuery?: {
    [key: string]: string;
  };
}

const PostPage: NextPage<PostPagePropsInterface> = props => {
  const router = useRouter();
  const query = router ? router.query : props.ssrQuery;
  const { locale, previewActive } = useContext(ContentfulContext);
  const slug = query ? (query.slug as string) : '';

  return <CtfPostGgl locale={locale} slug={slug} preview={previewActive} />;
};

const PostPageWithProviders = withProviders()(PostPage);

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: PostPageWithProviders,
});

export default PostPageWithProviders;
