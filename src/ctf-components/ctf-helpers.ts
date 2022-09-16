import { Variant } from '@ninetailed/experience.js-next';
import { tryget } from '@src/utils';

export function extractSectionHeadlines(data: any) {
  if (!data || (!data.sectionHeadline && !data.sectionSubline))
    return undefined;
  return tryget(() => ({
    sectionHeadline: data.sectionHeadline as string,
    sectionSubline: data.sectionSubline as string,
    headerAlignment: data.headerAlignment as string,
  }));
}

type ComponentWithAudience<T> = T & {
  sys?: {
    id: string;
  };
  ntAudience: {
    id: string;
    name: string;
  };
};

type ComponentWithNullableAudience<T> = T & {
  sys?: {
    id: string;
  };
  ntAudience: {
    id: string | null;
    name: string | null;
  } | null;
};

type ComponentWithVariants<T> = T & {
  ntVariantsCollection: {
    items: (ComponentWithNullableAudience<
      Omit<T, 'ntVariantsCollection'>
    > | null)[];
  } | null;
};

export function unwrapVariants<T>(
  data: ComponentWithVariants<T>,
): T & { variants: Variant<T>[] } {
  return {
    ...data,
    variants: (
      data.ntVariantsCollection?.items ??
      ([] as (ComponentWithNullableAudience<T> | null)[])
    )
      .filter(
        (variant): variant is ComponentWithAudience<T> =>
          variant !== null && variant.ntAudience !== null,
      )
      .map((variant) => ({
        id: '',
        ...variant,
        audience: {
          id: variant.ntAudience.id,
          name: variant.ntAudience.name,
        },
      })),
  };
}
