import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import Head from 'next/head';

import CtfPage from './ctf-page';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';
import contentfulConfig from 'contentful.config';

interface Props {
  topic?: string;
  slug: string;
}

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {
  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps;

  const { previewActive, locale } = useContentfulContext();

  const { isLoading, data } = useCtfPageQuery({
    slug,
    locale,
    preview: previewActive,
  });

  const page = useContentfulLiveUpdates(tryget(() => data?.pageCollection!.items[0]));

  if (isLoading) return <></>;
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
