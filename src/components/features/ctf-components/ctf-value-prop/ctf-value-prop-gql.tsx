import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfValuePropQuery } from './__generated/ctf-value-prop.generated';
import { ValueProp } from './ctf-value-prop';

export const CtfValuePropGql = (props: CtfGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfValuePropQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amValueProp);

  if (!content || isLoading) return null;

  return <ValueProp {...content} />;
};
