'use client';

import { useTranslations } from 'next-intl';
import { RiAlertFill } from 'react-icons/ri';
import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Space,
  Text,
  type BoxProps,
} from '@mantine/core';
import { company } from '@/constants/company';

type AlertProps = BoxProps & {
  phone_label?: string;
  phone_tel?: string;
  email?: string;
};

export function Alert({
  phone_label = company.contact.phoneLabel,
  phone_tel = company.contact.phoneTel,
  email = company.contact.email,
  ...boxProps
}: AlertProps) {
  const t = useTranslations('components.alert');

  return (
    <Box
      component="section"
      role="region"
      aria-label={t('aria_label')}
      /* style={{ position: 'sticky', top: 0, zIndex: 2500 }} */
      {...boxProps}
    >
      <Box
        style={{
          background: 'var(--mantine-color-yellow-1)',
          borderBottom: '1px solid var(--mantine-color-yellow-4)',
        }}
      >
        <Space h="md"></Space>
        <Container size="xl" py={10}>
          <Flex align="center" justify="space-between" gap={16} wrap="wrap">
            <Group gap={10} wrap="nowrap" style={{ flex: '1 1 420px', minWidth: 0 }}>
              <Box flex="0 0 auto">
                <RiAlertFill size={48} color="red" />
              </Box>
              <Box style={{ minWidth: 0 }}>
                <Text fw={800} size="md" style={{ lineHeight: 1.2 }}>
                  {t('title')}
                </Text>
                <Text size="md" style={{ lineHeight: 1.2 }}>
                  {t('description')}
                </Text>
              </Box>
            </Group>

            <Group gap="md" wrap="wrap" justify="flex-end">
              <Anchor href={`tel:${phone_tel}`} fw={800} underline="hover" c="inherit" size="lg">
                {phone_label}
              </Anchor>

              <Anchor href={`mailto:${email}`} underline="hover" c="inherit" size="lg">
                {email}
              </Anchor>

              <Button size="sm" component="a" href={`tel:${phone_tel}`}>
                {t('call_now')}
              </Button>
            </Group>
          </Flex>
        </Container>
        <Space h="md"></Space>
      </Box>
    </Box>
  );
}
