'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, type ButtonProps } from '@mantine/core';

type RequestQuoteButtonProps = ButtonProps;

export function RequestQuoteButton({ ...button_props }: RequestQuoteButtonProps) {
  const t = useTranslations('components.request_quote_button');
  const router = useRouter();

  return (
    <Button
      className="request-quote-button"
      size="md"
      onClick={() => router.push('/contact')}
      {...button_props}
    >
      {t('label')}
    </Button>
  );
}
