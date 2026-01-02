import { useTranslations } from 'next-intl';
import { Anchor, Box, Container, Divider, Flex, Space, Stack, Text } from '@mantine/core';
import { company } from '@/constants/company';
import { CompanyEmail } from '../CompanyEmail/CompanyEmail';
import { CompanyPhone } from '../CompanyPhone/CompanyPhone';
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
        <Stack>
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
              <CompanyPhone />
              <CompanyEmail />
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
          <Space h="xl"></Space>
          <Flex
            justify="center"
            direction={{ base: 'column', lg: 'row' }}
            gap={28}
            align={{ base: 'stretch', lg: 'center' }}
          >
            <Anchor
              href="/privacy-policy"
              style={{
                display: 'inline-flex',
                width: 'fit-content',
              }}
            >
              {t('links.privacy_policy')}
            </Anchor>
            <Anchor
              href="/cookie-policy"
              style={{
                display: 'inline-flex',
                width: 'fit-content',
              }}
            >
              {t('links.cookie_policy')}
            </Anchor>
          </Flex>
        </Stack>
      </Container>
      <Space h="xl"></Space>
    </footer>
  );
}
