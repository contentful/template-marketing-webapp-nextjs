import Head from 'next/head';

import { useCtfLegalPageQuery } from './__generated/ctf-legal-page.generated';
import { CtfLegalPage } from './ctf-legal-page';

import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';

interface Props {
  topic?: string;
  slug: string;
}

const CtfLegalPageGgl = (props: Props) => {
  const { locale } = useContentfulContext();

  const slug = !props.slug || props.slug === '/' ? 'home' : props.slug;

  const { data, isLoading } = useCtfLegalPageQuery({
    slug,
    locale,
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
      <Head>{page.pageName && <title key="title">{page.pageName}</title>}</Head>
      <CtfLegalPage {...page} />
    </>
  );
};

export default CtfLegalPageGgl;
