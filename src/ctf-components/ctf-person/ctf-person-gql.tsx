import React from 'react';
import { useQuery } from 'react-apollo';
import { useDataForPreview } from '@src/lib/apollo-hooks';
import CtfPerson from './ctf-person';
import { query } from './ctf-person-query';
import { CtfPersonQuery } from './__generated__/CtfPersonQuery';

interface CtfPersonGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

const CtfPersonGql = (props: CtfPersonGqlPropsInterface) => {
  const { id, locale, preview, previousComponent } = props;
  const queryResult = useQuery<CtfPersonQuery>(query, {
    variables: {
      id,
      locale,
      preview,
    },
  });

  useDataForPreview(queryResult);

  if (
    queryResult.data === undefined ||
    queryResult.loading ||
    queryResult.data.topicPerson === null
  ) {
    return null;
  }

  return (
    <CtfPerson
      {...queryResult.data.topicPerson}
      previousComponent={previousComponent}
    />
  );
};

export default CtfPersonGql;
