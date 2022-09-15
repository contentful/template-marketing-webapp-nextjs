import { ContentfulContext } from '@pages/_app';
import PageError from '@src/components/errors/page-error';
import getContentfulConfig from '@src/get-contentful-config';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { getLocaleConfig } from '@src/locales-map';
import { tryget } from '@src/utils';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo';
import CtfPage from './ctf-page';
import { pageFragment } from './ctf-page-query';
import {
  CtfPageQuery
} from './__generated__/CtfPageQuery';



interface Props {
  topic?: string;
  slug: string;
  locale: string;
}

const query = gql`
  query CtfPageQuery($slug: String!, $locale: String, $preview: Boolean) {
    pageCollection(
      where: { slug: $slug }
      locale: $locale
      preview: $preview
      limit: 1
    ) {
      items {
        ...PageFragment
      }
    }
  }
  ${pageFragment}
`;

const CtfPageGgl = (props: Props) => {
  const slug = !props.slug || props.slug === '/' ? 'home' : props.slug;
  const { defaultLocale, previewActive } = useContext(ContentfulContext);
  const { locale: realLocale, lang } = getLocaleConfig(
    props.locale || defaultLocale,
  );
  const contentfulConfig = getContentfulConfig(realLocale);

  const queryResult = useQuery<CtfPageQuery>(query, {
    variables: { slug, locale: props.locale, preview: previewActive },
  });

  useDataForPreview(queryResult);

  const page = tryget(() => queryResult.data!.pageCollection!.items[0]);

  if (queryResult.loading) return <></>;
  if (page == null) {
    const error = {
      code: 404,
      message:
        'We were not able to locate the content you were looking for, please check the url for possible typos',
    };
    return <PageError error={error} />;
  }

  const { seo } = page;

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
            <meta
              key="description"
              name="description"
              content={metaTags.description}
            />
            <meta
              key="og:description"
              property="og:description"
              content={metaTags.description}
            />
          </>
        )}
        {robots.length > 0 && (
          <meta key="robots" name="robots" content={robots.join(', ')} />
        )}
        {(metaTags.image != null) && (
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
            content={`${contentfulConfig.meta.url}/${lang}${
              page.slug === 'home' ? '' : `/${page.slug}`
            }`}
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
      <CtfPage {...page} />
    </>
  );
};

export default CtfPageGgl;
