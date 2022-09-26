import { gql } from 'apollo-boost';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfPageQuery } from './__generated__/CtfPageQuery';
import CtfPage from './ctf-page';
import { pageFragment } from './ctf-page-query';

import PageError from '@src/components/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { tryget } from '@src/utils';
import { contentfulConfig } from 'contentful.config.mjs';

interface Props {
  topic?: string;
  slug: string;
}

const query = gql`
  query CtfPageQuery($slug: String!, $locale: String, $preview: Boolean) {
    pageCollection(where: { slug: $slug }, locale: $locale, preview: $preview, limit: 1) {
      items {
        ...PageFragment
      }
    }
  }
  ${pageFragment}
`;

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {
  const { locale } = useContentfulContext();

  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps;
  const { previewActive } = useContentfulContext();

  const queryResult = useQuery<CtfPageQuery>(query, {
    variables: { slug, locale, preview: previewActive },
  });

  useDataForPreview(queryResult);

  const page = tryget(() => queryResult.data!.pageCollection!.items[0]);

  if (queryResult.loading) return <></>;
  if (!page) {
    const error = {
      code: 404,
      message:
        'We were not able to locate the content you were looking for, please check the url for possible typos',
    };
    return <PageError error={error} />;
  }

  const { seo } = page || {};

  const metaTags = {
    title: seo?.title ?? page.pageName,
    description: seo?.description,
    image: seo?.image,
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
        {page.slug && (
          <meta
            key="og:url"
            property="og:url"
            content={`${contentfulConfig.meta.url}/${page.slug === 'home' ? '' : `/${page.slug}`}`}
          />
        )}
        <meta key="og:locale" property="og:locale" content={locale} />
      </Head>
      <CtfPage {...page} />
    </>
  );
};

export default CtfPageGgl;
