import { useTranslations } from 'next-intl';
import { Anchor, Box, Container, Divider, Flex, Space, Stack, Text } from '@mantine/core';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';
import classes from './Footer.module.css';

const PHONE_LABEL = '+372 53 06 9999';
const PHONE_TEL = '+37253069999';
const EMAIL = 'info@veoexpress.ee';

export function Footer() {
  const t = useTranslations('components.footer');
  return (
    <footer className={classes.footer}>
      <Container size="xl" p="xl">
        <Divider></Divider>
        <Space h="xl"></Space>
        <Flex
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
          gap={28}
          align={{ base: 'stretch', lg: 'center' }}
        >
          <Stack align="center">
            <VeoexpressLogo />
            <Text>Tallinn • Harjumaa • Estonia</Text>
          </Stack>
          <Stack gap="xs">
            <Anchor
              fw="bold"
              fz="xl"
              href={`tel:${PHONE_TEL}`}
              underline="never"
              style={{ fontWeight: 700, fontSize: 'var(--mantine-font-size-xl)' }}
              c="inherit"
            >
              {PHONE_LABEL}
            </Anchor>
            <Anchor href={`mailto:${EMAIL}`} underline="never" c="inherit">
              <Text fz="md" component="span" size="lg">
                {EMAIL}
              </Text>
            </Anchor>
          </Stack>
          <Box>
            <Text>{t('account_number')}</Text>
            <Text>Swedbank: EE492200221062467460</Text>
            <Text>Sitsi 7, 10314 Tallinn</Text>
          </Box>
          <Box>
            <Text>GlobalPro Trans OÜ</Text>
            <Text>{t('reg_code')}: 12841029</Text>
            <Text>{t('vat')}: EE102039296</Text>
          </Box>
          <LanguageSelector></LanguageSelector>
        </Flex>
      </Container>
    </footer>
  );
}
