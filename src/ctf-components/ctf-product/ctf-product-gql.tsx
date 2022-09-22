import { Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-apollo';

import { CtfProductQuery } from './__generated__/CtfProductQuery';
import CtfProduct from './ctf-product';
import { query } from './ctf-product-query';

import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfProductGqlPropsInterface {
  id: string;
  preview?: boolean;
}

const CtfProductGql = (props: CtfProductGqlPropsInterface) => {
  const queryResult = useQuery<CtfProductQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading === true) {
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
      {product.featuredImage && (
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
