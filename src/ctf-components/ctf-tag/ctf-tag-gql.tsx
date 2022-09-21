import Head from 'next/head';
import React, { useMemo } from 'react';
import { useQuery } from 'react-apollo';

import { CtfTagQuery } from './__generated__/CtfTagQuery';
import CtfTag from './ctf-tag';
import { query } from './ctf-tag-query';

import { useContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { contentfulConfig } from 'contentful.config.mjs';

interface Props {
  id: string;
  preview?: boolean;
}

const CtfTagGql = (props: Props) => {
  const { locale } = useContentfulContext();
  const queryResult = useQuery<CtfTagQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  const tag = useMemo(() => {
    if (queryResult.data === undefined) {
      return null;
    }

    const tagFromPost =
      queryResult.data.postCollection?.items[0]?.contentfulMetadata.tags.find(
        metaTag => metaTag?.id === props.id,
      ) ?? null;

    if (tagFromPost === null) {
      return null;
    }

    return {
      ...tagFromPost,
      name: tagFromPost.name === null ? null : tagFromPost.name.split(': ').slice(-1)[0],
    };
  }, [props.id, queryResult.data]);

  if (queryResult.data === undefined || queryResult.loading === true) {
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
      <CtfTag posts={queryResult.data.postCollection?.items || []} tag={tag} />
    </>
  );
};

export default CtfTagGql;
