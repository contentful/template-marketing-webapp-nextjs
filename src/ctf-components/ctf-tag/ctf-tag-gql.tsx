import Head from 'next/head';
import { useMemo } from 'react';

import { useCtfTagQuery } from './__generated/ctf-tag.generated';
import { CtfTag } from './ctf-tag';

import { useContentfulContext } from '@src/contentful-context';
import contentfulConfig from 'contentful.config';

interface Props {
  id: string;
  preview?: boolean;
}

export const CtfTagGql = (props: Props) => {
  const { locale } = useContentfulContext();
  const { isLoading, data } = useCtfTagQuery({
    ...props,
    locale,
  });

  const tag = useMemo(() => {
    if (!data) {
      return;
    }

    const tagFromPost = data.postCollection?.items[0]?.contentfulMetadata.tags.find(
      metaTag => metaTag?.id === props.id,
    );

    if (!tagFromPost) {
      return;
    }

    return {
      ...tagFromPost,
      name: tagFromPost.name && tagFromPost.name.split(': ').slice(-1)[0],
    };
  }, [props.id, data]);

  if (!data || isLoading) {
    return null;
  }

  const metaTags = {
    title: tag?.name ?? 'Blog',
  };

  return (
    <>
      <Head>
        {metaTags.title && (
          <>
            <title key="title">{metaTags.title}</title>
            <meta key="og:title" property="og:title" content={metaTags.title} />
          </>
        )}
        {tag?.id && (
          <meta
            key="og:url"
            property="og:url"
            content={`${contentfulConfig.meta.url}/tag/${tag.id}`}
          />
        )}
        <meta key="og:locale" property="og:locale" content={locale} />
      </Head>
      <CtfTag posts={data?.postCollection?.items} tag={tag} />
    </>
  );
};
