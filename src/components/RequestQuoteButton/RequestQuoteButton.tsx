import { useTranslations } from 'next-intl';
import { Button, type ButtonProps } from '@mantine/core';

type RequestQuoteButtonProps = ButtonProps;

export function RequestQuoteButton({ ...button_props }: RequestQuoteButtonProps) {
  const t = useTranslations('components.request_quote_button');

  return (
    <Button
      className="request-quote-button"
      size="md"
      component="a"
      href={'/contact'}
      {...button_props}
    >
      {t('label')}
    </Button>
  );
}
