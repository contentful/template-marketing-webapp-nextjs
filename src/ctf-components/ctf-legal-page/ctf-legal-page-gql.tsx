import React, { useContext } from 'react';
import Head from 'next/head';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import { tryget } from '@src/utils';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import PageError from '@src/components/errors/page-error';
import CtfLegalPage from './ctf-legal-page';
import { legalPageFragment } from './ctf-legal-page-query';
import { ApolloContext } from '@src/lib/with-providers';
import { CtfLegalPageQuery } from './__generated__/CtfLegalPageQuery';

interface Props {
  topic?: string;
  slug: string;
  locale: string;
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

  const slug = !props.slug || props.slug === '/' ? 'home' : props.slug;

  const queryResult = useQuery<CtfLegalPageQuery>(query, {
    client: legalClient,
    variables: { slug, locale: props.locale },
  });

  useDataForPreview(queryResult);

  const page = tryget(() => queryResult.data!.pageCollection!.items[0]);

  if (queryResult.loading) return <></>;
  if (page == null) {
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
      <CtfLegalPage {...page} locale={props.locale} />
    </>
  );
};

export default CtfLegalPageGgl;
