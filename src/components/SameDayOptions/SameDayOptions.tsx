import { useTranslations } from 'next-intl';
import { Stack, Text, Title, type MantineSize } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

type SameDayOptionsProps = {
  size?: MantineSize;
};

export function SameDayOptions({ size = 'lg' }: SameDayOptionsProps) {
  const t = useTranslations('components.same_day_options');

  return (
    <CardWrapper>
      <Stack>
        <Title order={3} size={size}>
          {t('title')}
        </Title>
        <Text size={size}>{t('description')}</Text>
      </Stack>
    </CardWrapper>
  );
}
