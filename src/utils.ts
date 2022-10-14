import { GridSize } from '@mui/material/Grid';

import { CONTAINER_WIDTH } from './theme';

export type Echo<T> = T;
export type PartialNullable<T> = Partial<{ [K in keyof T]: T[K] | null }>;
export type ArgumentTypes<F extends () => void> = F extends (...args: infer A) => any ? A : never;
export type ArrayWithoutNulls<T extends any[]> = Exclude<T[0], null | undefined>[];
export type NonNullValues<T> = {
  [P in keyof T]: Exclude<T[P], null | undefined>;
};
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

type OmitCustom<T, K> = Pick<T, Exclude<keyof T, K>>;
export type OmitDistributive<T, K> = T extends any
  ? T extends object
    ? Id<OmitRecursive<T, K>>
    : T
  : never;
export type Id<T> = Record<string, never> & { [P in keyof T]: T[P] }; // Cosmetic use only makes the tooltips expad the type can be removed
export type OmitRecursive<T, K> = OmitCustom<{ [P in keyof T]: OmitDistributive<T[P], K> }, K>;

export type PartialFields<T, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>;
export type OptionalTypeFields<T, S extends Partial<Record<keyof T, any>>> = Partial<{
  [K in keyof S]: S[K];
}> &
  Omit<T, keyof S>;

export const tuple = <T extends unknown[]>(...args: T) => args;

// eslint-disable-next-line arrow-parens
export const tryget = <T>(exp: () => T, d: T | undefined | null = undefined) => {
  try {
    const val = exp();
    if (val != null) {
      return val;
    }
  } catch {
    /* noop */
  }
  return d;
};

// Apollo -------------------------------------------
export type PropsFromQuery<T extends { [k: string]: any }, F extends keyof T> = Omit<
  NonNullable<T[F]>,
  '__typename'
>;
export type PropsFromFragment<T> = OmitRecursive<T, '__typename'>;

// export function printApolloGueryError(data?: {error?: ApolloError}) {
//   if (!data) return undefined
//   return tryget(data.error!.)
// }

// Math stuff
export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

// Material

/**
 * Calculates the width of given amount of cols in pixels
 */
export function useColPxWidth(colCount: GridSize) {
  if (!colCount || colCount === 'auto') return CONTAINER_WIDTH / 2;
  return (CONTAINER_WIDTH / 12) * colCount;
}
