import { useCtfNavigationQuery } from './__generated/ctf-navigation.generated';
import { CtfNavigation } from './ctf-navigation';

import { useContentfulContext } from '@src/contentful-context';

export const CtfNavigationGql = () => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfNavigationQuery({
    locale,
    preview: previewActive,
  });

  if (!data?.navigationMenuCollection || isLoading) return null;

  return <CtfNavigation {...data.navigationMenuCollection} />;
};
