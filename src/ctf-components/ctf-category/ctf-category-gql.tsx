import React, { useContext } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-apollo';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { getLocaleConfig } from '@src/locales-map';
import getContentfulConfig from '@src/get-contentful-config';
import { ContentfulContext } from '@pages/_app';
import CtfCategory from './ctf-category';
import { query } from './ctf-category-query';
import { CtfCategoryQuery } from './__generated__/CtfCategoryQuery';

interface Props {
  slug: string;
  locale?: string;
  preview?: boolean;
}

const CtfCategoryGql = (props: Props) => {
  const { defaultLocale, locale } = useContext(ContentfulContext);
  const { lang, locale: realLocale } = getLocaleConfig(locale || defaultLocale);
  const contentfulConfig = getContentfulConfig(realLocale);
  const queryResult = useQuery<CtfCategoryQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading) {
    return null;
  }

  if (
    queryResult.data.categoryCollection === null ||
    queryResult.data.categoryCollection.items.length === 0 ||
    queryResult.data.categoryCollection.items[0] === null
  ) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const category = queryResult.data.categoryCollection.items[0];

  const { seo } = category;

  const metaTags = {
    title: seo?.title ?? category.categoryName,
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
        {category.slug && (
          <meta
            key="og:url"
            property="og:url"
            content={`${contentfulConfig.meta.url}/${lang}/category/${category.slug}`}
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
      <CtfCategory
        posts={((queryResult.data.postCollection?.items) != null) || []}
        {...category}
      />
    </>
  );
};

export default CtfCategoryGql;
