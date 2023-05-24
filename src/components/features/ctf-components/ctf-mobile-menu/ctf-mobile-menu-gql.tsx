import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { CtfMobileMenu } from './ctf-mobile-menu';

import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useContentfulContext } from '@src/contentful-context';

export const CtfMobileMenuGql = props => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfNavigationQuery({
    locale,
    preview: previewActive,
  });

  const navigationMenuCollection = useContentfulLiveUpdates(data?.navigationMenuCollection);

  if (!navigationMenuCollection || isLoading) return null;

  return <CtfMobileMenu {...props} {...navigationMenuCollection} />;
};
