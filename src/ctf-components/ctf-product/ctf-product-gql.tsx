import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { useQuery } from 'react-apollo';
import CtfProduct from './ctf-product';
import { query } from './ctf-product-query';
import { CtfProductQuery } from './__generated__/CtfProductQuery';

interface CtfProductGqlPropsInterface {
  id: string;
  locale?: string;
  preview?: boolean;
}

const CtfProductGql = (props: CtfProductGqlPropsInterface) => {
  const queryResult = useQuery<CtfProductQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading) {
    return null;
  }

  if (queryResult.data.topicProduct === null) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const product = queryResult.data.topicProduct;

  return (
    <>
      {(product.featuredImage != null) && (
        <Head>
          <meta
            key="og:image"
            property="og:image"
            content={`${product.featuredImage.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        </Head>
      )}
      <CtfProduct {...product} />
    </>
  );
};

export default CtfProductGql;
