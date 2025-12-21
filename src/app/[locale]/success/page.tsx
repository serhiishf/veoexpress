'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FaRegCheckCircle } from 'react-icons/fa';
import { Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';

export default function SuccessPage() {
  const t = useTranslations('pages.success');
  const router = useRouter();

  return (
    <Container size="sm" py={{ base: 48, sm: 80 }}>
      <Paper radius={28} p={{ base: 24, sm: 36 }} withBorder>
        <Stack align="center" gap="md">
          <FaRegCheckCircle size={64} color="green" />

          <Title order={1} ta="center">
            {t('title')}
          </Title>

          <Text ta="center" c="dimmed">
            {t('description')}
          </Text>

          <Group justify="center" mt="sm">
            <Button onClick={() => router.push('/')} size="lg">
              {t('button')}
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
