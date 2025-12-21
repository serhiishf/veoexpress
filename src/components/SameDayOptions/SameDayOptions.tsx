import { useTranslations } from 'next-intl';
import { Text, Title } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

export function SameDayOptions() {
  const t = useTranslations('components.same_day_options');

  return (
    <CardWrapper>
      <Title order={3}>{t('title')}</Title>
      <Text size="lg">{t('description')}</Text>
    </CardWrapper>
  );
}
