'use client';

import { useTranslations } from 'next-intl';
import { RiAlertFill } from 'react-icons/ri';
import { Anchor, Box, Button, Container, Flex, Group, Text, type BoxProps } from '@mantine/core';

type AlertProps = BoxProps & {
  phone_label?: string;
  phone_tel?: string;
  email?: string;
};

const DEFAULT_PHONE_LABEL = '+372 53 06 9999';
const DEFAULT_PHONE_TEL = '+37253069999';
const DEFAULT_EMAIL = 'info@veoexpress.ee';

export function Alert({
  phone_label = DEFAULT_PHONE_LABEL,
  phone_tel = DEFAULT_PHONE_TEL,
  email = DEFAULT_EMAIL,
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
        <Container size="xl" py={10}>
          <Flex align="center" justify="space-between" gap={16} wrap="wrap">
            <Group gap={10} wrap="nowrap" style={{ flex: '1 1 420px', minWidth: 0 }}>
              <RiAlertFill size={18} />
              <Box style={{ minWidth: 0 }}>
                <Text fw={800} size="sm" style={{ lineHeight: 1.2 }}>
                  {t('title')}
                </Text>
                <Text size="sm" style={{ lineHeight: 1.2 }}>
                  {t('description')}
                </Text>
              </Box>
            </Group>

            <Group gap="md" wrap="wrap" justify="flex-end">
              <Anchor href={`tel:${phone_tel}`} fw={800} underline="hover">
                {phone_label}
              </Anchor>

              <Anchor href={`mailto:${email}`} underline="hover">
                {email}
              </Anchor>

              <Button size="sm" component="a" href={`tel:${phone_tel}`}>
                {t('call_now')}
              </Button>
            </Group>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
