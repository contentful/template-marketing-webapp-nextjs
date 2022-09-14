import React from 'react';
import * as typeformEmbed from '@typeform/embed';

export const id = 'typeform';

export const shouldTransform = (url: string): boolean => {
  const { host } = new URL(url);

  return host.includes('typeform.com');
};

export const effect = (
  ref: React.RefObject<HTMLDivElement>,
  url: string,
): void => {
  if (ref.current === null) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  ref.current.style.height = '410px';
  // eslint-disable-next-line no-param-reassign
  ref.current.style.paddingTop = '0';

  typeformEmbed.makeWidget(ref.current, url, {
    hideFooter: true,
    hideHeaders: true,
    opacity: 0,
  });
};

export const getHTML = (_url: string): string => {
  return '';
};
