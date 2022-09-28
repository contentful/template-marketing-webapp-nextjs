import { Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfPostQuery } from './__generated__/CtfPostQuery';
import CtfPost from './ctf-post';
import { query } from './ctf-post-query';

import EntryNotFound from '@src/components/errors/entry-not-found';
import { useContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import contentfulConfig from 'contentful.config';

interface Props {
  slug: string;
  preview?: boolean;
}

const CtfPostGql = (props: Props) => {
  const { locale } = useContentfulContext();
  const queryResult = useQuery<CtfPostQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading === true) {
    return null;
  }

  if (
    queryResult.data.postCollection === null ||
    queryResult.data.postCollection.items.length === 0 ||
    queryResult.data.postCollection.items[0] === null
  ) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const post = queryResult.data.postCollection.items[0];
  const { seo } = post;

  const metaTags = {
    title: seo?.title ?? post.postName,
    description: seo?.description,
    image: seo?.image ?? post.featuredImage,
    no_index: seo?.noIndex,
    no_follow: seo?.noFollow,
  };

  const robots = [
    metaTags.no_index === true ? 'noindex' : undefined,
    metaTags.no_follow === true ? 'nofollow' : undefined,
  ].filter((x): x is string => x !== undefined);

  return (
    <>
      <Head>
        {metaTags.title && (
          <>
            <title key="title">{metaTags.title}</title>
            <meta key="og:title" property="og:title" content={metaTags.title} />
          </>
        )}
        {metaTags.description && (
          <>
            <meta key="description" name="description" content={metaTags.description} />
            <meta key="og:description" property="og:description" content={metaTags.description} />
          </>
        )}
        {robots.length > 0 && <meta key="robots" name="robots" content={robots.join(', ')} />}
        {metaTags.image && (
          <meta
            key="og:image"
            property="og:image"
            content={`${metaTags.image.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        )}
        {post.slug && (
          <meta
            key="og:url"
            property="og:url"
            content={`${contentfulConfig.meta.url}/post/${post.slug}`}
          />
        )}
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:locale" property="og:locale" content={locale} />
      </Head>
      <CtfPost {...post} />
    </>
  );
};

export default CtfPostGql;
