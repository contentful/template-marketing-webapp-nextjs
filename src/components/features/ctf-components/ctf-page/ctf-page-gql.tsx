import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import Head from 'next/head';

import CtfPage from './ctf-page';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';

interface Props {
  topic?: string;
  slug: string;
}

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {
  const { locale } = useContentfulContext();

  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps;

  const { previewActive } = useContentfulContext();

  const { isLoading, data } = useCtfPageQuery({
    slug,
    locale,
    preview: previewActive,
  });

  const page = useContentfulLiveUpdates(
    tryget(() => data?.pageCollection!.items[0]),
    locale,
  );

  if (isLoading) return <></>;
  if (!page) {
    const error = {
      code: 404,
      message:
        'We were not able to locate the content you were looking for, please check the url for possible typos',
    };
    return <PageError error={error} />;
  }

  return (
    <>
      <Head>
        <meta key="og:locale" property="og:locale" content={locale} />
      </Head>
      <CtfPage {...page} />
    </>
  );
};

export default CtfPageGgl;
