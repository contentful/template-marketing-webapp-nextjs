import Head from 'next/head';

import CtfPage from './ctf-page';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';

const CtfPageGgl = () => {
  const { locale } = useContentfulContext();

  const { previewActive } = useContentfulContext();

  const { isLoading, data } = useCtfPageQuery({
    locale,
    preview: previewActive,
  });

  const page = tryget(() => data?.pageCollection!.items[0]);

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
