import { useRouter } from 'next/router';

interface FormatCurrencyProps {
  value: number;
  locale?: string;
  style?: string;
  currency?: string;
}

export const FormatCurrency = ({
  value,
  locale,
  style = 'currency',
  currency = 'EUR',
}: FormatCurrencyProps) => {
  const { locale: localeFromRouter } = useRouter();

  return (
    <>{new Intl.NumberFormat(locale || localeFromRouter, { style, currency }).format(value)}</>
  );
};
