import { useTranslations } from 'next-intl';
import { Button, type ButtonProps } from '@mantine/core';

type RequestQuoteButtonProps = ButtonProps;

export function RequestQuoteButton({ ...button_props }: RequestQuoteButtonProps) {
  const t = useTranslations('components.request_quote_button');

  return (
    <Button className="request-quote-button" size="md" {...button_props} >
      {t('request_free_quote')}
    </Button>
  );
}
