import { Container } from '@material-ui/core';
import Head from 'next/head';

import CtfBusinessInfo from './ctf-business-info';

import { useCtfBusinessInfoQuery } from '@ctf-components/ctf-business-info/__generated/business-info.generated';
import EntryNotFound from '@src/components/errors/entry-not-found';
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

  // useDataForPreview(queryResult);

  if (!data || isLoading) {
    return null;
  }

  if (!data.topicBusinessInfo) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return (
    <>
      {data.topicBusinessInfo.featuredImage && (
        <Head>
          <meta
            key="og:image"
            property="og:image"
            content={`${data.topicBusinessInfo.featuredImage.url}?w=1200&h=630&f=faces&fit=fill`}
          />
        </Head>
      )}
      <CtfBusinessInfo {...data.topicBusinessInfo} />
    </>
  );
};
