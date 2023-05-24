import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { CtfPerson } from './ctf-person';

import { useCtfPersonQuery } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';

interface CtfPersonGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

export const CtfPersonGql = (props: CtfPersonGqlPropsInterface) => {
  const { id, locale, preview, previousComponent } = props;

  const { isLoading, data } = useCtfPersonQuery({
    id,
    locale,
    preview,
  });

  const topicPerson = useContentfulLiveUpdates(data?.topicPerson);

  if (isLoading || !topicPerson) {
    return null;
  }

  return <CtfPerson {...topicPerson} previousComponent={previousComponent} />;
};
