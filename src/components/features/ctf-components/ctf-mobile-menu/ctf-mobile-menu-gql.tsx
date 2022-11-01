import { CtfMobileMenu } from './ctf-mobile-menu';

import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useContentfulContext } from '@src/contentful-context';

export const CtfMobileMenuGql = props => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfNavigationQuery({
    locale,
    preview: previewActive,
  });

  if (!data?.navigationMenuCollection || isLoading) return null;

  return <CtfMobileMenu {...props} {...data.navigationMenuCollection} />;
};
