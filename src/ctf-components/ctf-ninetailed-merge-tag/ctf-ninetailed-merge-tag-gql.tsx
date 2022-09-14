import { useDataForPreview } from '@src/lib/apollo-hooks';
import React from 'react';
import { useQuery } from 'react-apollo';
import { makeStyles } from '@material-ui/styles';
import { MergeTag } from '@ninetailed/experience.js-next';
import { query } from './ctf-ninetailed-merge-tag-query';

const useStyles = makeStyles(() => ({
  '@global': {
    '.NtMergetag': {
      display: 'inline',
    },
  },
}));

interface CtfNinetailedMergeTagGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfNinetailedMergeTagGql = (
  props: CtfNinetailedMergeTagGqlPropsInterface,
) => {
  const { id, locale, preview } = props;
  useStyles();
  const queryResult = useQuery(query, {
    variables: {
      id,
      locale,
      preview,
    },
  });

  useDataForPreview(queryResult);

  const { loading, data } = queryResult;

  if (!data || loading) return null;

  return <MergeTag {...data!.ntMergetag!} />;
};

export default CtfNinetailedMergeTagGql;
