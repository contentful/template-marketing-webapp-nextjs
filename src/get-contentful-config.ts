import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import config from '../contentful.config';

export type CfulConfig = typeof config;

export default function getContentfulConfig(locale?: string): CfulConfig {
  if (locale === undefined) {
    return config;
  }

  if (config[locale] === undefined) {
    return config;
  }

  return merge(cloneDeep(config), config[locale]);
}
