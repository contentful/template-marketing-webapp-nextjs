import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Container } from '@mui/material';
import Head from 'next/head';

import { useCtfProductQuery } from './__generated/ctf-product.generated';
import { CtfProduct } from './ctf-product';

import { EntryNotFound } from '@src/components/features/errors/entry-not-found';

interface CtfProductGqlPropsInterface {
  id: string;
  locale: string;
  preview?: boolean;
}

export const CtfProductGql = (props: CtfProductGqlPropsInterface) => {
  const { isLoading, data } = useCtfProductQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  const topicProduct = useContentfulLiveUpdates(data?.topicProduct);

  if (!data || isLoading) {
    return null;
  }

  if (!topicProduct) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return (
    <>
      {topicProduct?.featuredImage && (
        <Head>
          <meta
            key="og:image"
            property="og:image"
            content={`${topicProduct.featuredImage.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        </Head>
      )}
      <CtfProduct {...topicProduct} />
    </>
  );
};
