import { useTranslations } from 'next-intl';
import { Anchor, Box, Container, Divider, Flex, Space, Stack, Text } from '@mantine/core';
import { company } from '@/constants/company';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';
import classes from './Footer.module.css';

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
            <Text>{company.workArea}</Text>
          </Stack>
          <Stack gap="xs">
            <Anchor
              fw="bold"
              fz="xl"
              href={`tel:${company.contact.phoneTel}`}
              underline="never"
              style={{ fontWeight: 700, fontSize: 'var(--mantine-font-size-xl)' }}
              c="inherit"
            >
              {company.contact.phoneLabel}
            </Anchor>
            <Anchor href={`mailto:${company.contact.email}`} underline="never" c="inherit">
              <Text fz="md" component="span" size="lg">
                {company.contact.email}
              </Text>
            </Anchor>
          </Stack>
          <Box>
            <Text>{t('account_number')}</Text>
            <Text>{company.bankAccount}</Text>
            <Text>{company.address.full}</Text>
          </Box>
          <Box>
            <Text>{company.legalName}</Text>
            <Text>
              {t('reg_code')}: {company.registryCode}
            </Text>
            <Text>
              {t('vat')}: {company.vatNumber}
            </Text>
          </Box>
          <LanguageSelector></LanguageSelector>
        </Flex>
      </Container>
      <Space h="xl"></Space>
    </footer>
  );
}
