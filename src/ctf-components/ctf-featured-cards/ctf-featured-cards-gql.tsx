import { useCtfFeaturedCardsQuery } from './__generated/ctf-featured-cards.generated';
import { CtfFeaturedCards } from './ctf-featured-cards';

interface CtfFeaturedCardsGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfFeaturedCardsGql = ({ id, locale, preview }: CtfFeaturedCardsGqlPropsInterface) => {
  const { isLoading, data } = useCtfFeaturedCardsQuery({
    id,
    locale,
    preview,
  });

  if (!data || isLoading || !data.componentFeaturedCards) {
    return null;
  }

  return <CtfFeaturedCards {...data.componentFeaturedCards} />;
};
