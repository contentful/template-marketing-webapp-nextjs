import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import EntryNotFound from '@src/components/errors/entry-not-found';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { useQuery } from 'react-apollo';
import CtfBusinessInfo from './ctf-business-info';
import { query } from './ctf-business-info-query';
import { CtfBusinessInfoQuery } from './__generated__/CtfBusinessInfoQuery';

interface CtfBusinessInfoGqlPropsInterface {
  slug: string;
  locale?: string;
  preview?: boolean;
}

const CtfBusinessInfoGql = (props: CtfBusinessInfoGqlPropsInterface) => {
  const queryResult = useQuery<CtfBusinessInfoQuery>(query, {
    variables: { ...props },
  });
  useDataForPreview(queryResult);

  if (queryResult.data === undefined || queryResult.loading === true) {
    return null;
  }

  if (queryResult.data.topicBusinessInfo === null) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const { topicBusinessInfo } = queryResult.data;

  return (
    <>
      {topicBusinessInfo.featuredImage && (
        <Head>
          <meta
            key="og:image"
            property="og:image"
            content={`${topicBusinessInfo.featuredImage.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        </Head>
      )}
      <CtfBusinessInfo {...topicBusinessInfo} />
    </>
  );
};

export default CtfBusinessInfoGql;
