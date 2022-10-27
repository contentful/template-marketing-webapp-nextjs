import React from 'react';

import { useCtfFooterQuery } from './__generated/ctf-footer.generated';
import { CtfFooter } from './ctf-footer';

import { useContentfulContext } from '@src/contentful-context';

export const CtfFooterGql = () => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfFooterQuery({
    locale,
    preview: previewActive,
  });

  if (!data?.footerMenuCollection || isLoading) return null;

  return <CtfFooter {...data.footerMenuCollection} />;
};
