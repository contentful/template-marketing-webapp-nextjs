import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Container } from '@mui/material';
import Head from 'next/head';

import { useCtfBusinessInfoQuery } from './__generated/business-info.generated';
import CtfBusinessInfo from './ctf-business-info';

import { EntryNotFound } from '@src/components/features/errors/entry-not-found';
import { useContentfulContext } from '@src/contentful-context';

interface CtfBusinessInfoGqlPropsInterface {
  id: string;
  preview?: boolean;
}

export const CtfBusinessInfoGql = ({ preview, id }: CtfBusinessInfoGqlPropsInterface) => {
  const { locale } = useContentfulContext();

  const { data, isLoading } = useCtfBusinessInfoQuery({
    locale,
    id,
    preview,
  });

  const topicBusinessInfo = useContentfulLiveUpdates(data?.topicBusinessInfo);

  if (!data || isLoading) {
    return null;
  }

  if (!topicBusinessInfo) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return (
    <>
      {topicBusinessInfo.featuredImage && (
        <Head>
          <meta
            key="og:image"
            property="og:image"
            content={`${topicBusinessInfo.featuredImage?.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        </Head>
      )}
      <CtfBusinessInfo {...topicBusinessInfo} />
    </>
  );
};
