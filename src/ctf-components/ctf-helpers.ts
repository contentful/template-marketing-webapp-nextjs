import { tryget } from '@src/utils';

export function extractSectionHeadlines(data: any) {
  if (!data || (!data.sectionHeadline && !data.sectionSubline)) return undefined;
  return tryget(() => ({
    sectionHeadline: data.sectionHeadline as string,
    sectionSubline: data.sectionSubline as string,
    headerAlignment: data.headerAlignment as string,
  }));
}
