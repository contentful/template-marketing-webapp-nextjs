import React, { useContext, useMemo } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-apollo';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { getLocaleConfig } from '@src/locales-map';
import getContentfulConfig from '@src/get-contentful-config';
import { ContentfulContext } from '@pages/_app';
import CtfTag from './ctf-tag';
import { query } from './ctf-tag-query';
import { CtfTagQuery } from './__generated__/CtfTagQuery';

interface Props {
  id: string;
  locale?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  preview?: boolean;
}

const CtfTagGql = (props: Props) => {
  const { defaultLocale, locale } = useContext(ContentfulContext);
  const { lang, locale: realLocale } = getLocaleConfig(locale || defaultLocale);
  const contentfulConfig = getContentfulConfig(realLocale);
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
        (metaTag) => metaTag?.id === props.id,
      ) ?? null;

    if (tagFromPost === null) {
      return null;
    }

    return {
      ...tagFromPost,
      name:
        tagFromPost.name === null
          ? null
          : tagFromPost.name.split(': ').slice(-1)[0],
    };
  }, [queryResult.data]);

  if (queryResult.data === undefined || queryResult.loading) {
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
            content={`${contentfulConfig.meta.url}/${lang}/tag/${tag.id}`}
          />
        )}
        {props.locale && props.locale !== 'en-US' && (
          <meta
            key="og:locale"
            property="og:locale"
            content={props.locale.replace('-', '_')}
          />
        )}
      </Head>
      <CtfTag posts={((queryResult.data.postCollection?.items) != null) || []} tag={tag} />
    </>
  );
};

export default CtfTagGql;
