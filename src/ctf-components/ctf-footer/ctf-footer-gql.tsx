import React from 'react';

import { CtfFooter } from './ctf-footer';

import { useCtfFooterQuery } from '@ctf-components/ctf-footer/__generated/ctf-footer.generated';
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
