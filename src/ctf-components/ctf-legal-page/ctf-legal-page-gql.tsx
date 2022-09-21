import { gql } from 'apollo-boost';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo';

import { CtfLegalPageQuery } from './__generated__/CtfLegalPageQuery';
import CtfLegalPage from './ctf-legal-page';
import { legalPageFragment } from './ctf-legal-page-query';

import PageError from '@src/components/errors/page-error';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { ApolloContext } from '@src/lib/with-providers';
import { tryget } from '@src/utils';

interface Props {
  topic?: string;
  slug: string;
}

const query = gql`
  query CtfLegalPageQuery($slug: String!, $locale: String) {
    pageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        ...LegalPageFragment
      }
    }
  }
  ${legalPageFragment}
`;

const CtfLegalPageGgl = (props: Props) => {
  const { legalClient } = useContext(ApolloContext);
  const { locale } = useRouter();

  const slug = !props.slug || props.slug === '/' ? 'home' : props.slug;

  const queryResult = useQuery<CtfLegalPageQuery>(query, {
    client: legalClient,
    variables: { slug, locale },
  });

  useDataForPreview(queryResult);

  const page = tryget(() => queryResult.data!.pageCollection!.items[0]);

  if (queryResult.loading) return <></>;
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
