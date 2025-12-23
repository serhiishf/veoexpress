'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('pages.not_found');

  return (
    <PageContainer>
      <Stack align="center" gap="md">
        <Image
          src="/illustrations/404_truck.webp"
          alt={t('image_alt')}
          width={440}
          height={320}
          style={{ objectFit: 'contain' }}
        />
        <Title order={2}>{t('title')}</Title>
        <Text c="dimmed" size="lg" ta="center">
          {t('description')}
        </Text>
        <Group justify="center" mt="md">
          <Button size="xl" onClick={() => router.push('/')}>
            {t('button')}
          </Button>
        </Group>
      </Stack>
    </PageContainer>
  );
}
