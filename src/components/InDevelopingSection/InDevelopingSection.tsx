'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, Group, Image, Stack, Text, Title } from '@mantine/core';
import { ContactSection } from '../ContactSection/ContactSection';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function InDevelopingSection() {
  const t = useTranslations('components.in_developing_section');
  const router = useRouter();

  return (
    <>
      <SectionWrapper>
        <Stack align="center" gap="md">
          <Title>{t('title')}</Title>
          <Text size="lg" c="dark">
            {t('description')}
          </Text>
          <Image
            src="/illustrations/truck_with_html_css.webp"
            // alt={t('image_alt')}
            width={440}
            height={320}
            style={{ objectFit: 'contain' }}
          />

          <Text ta="center" c="dimmed">
            {/* {t('description')} */}
          </Text>

          <Group justify="center" mt="sm">
            <Button onClick={() => router.push('/')} size="lg">
              {t('home_button')}
            </Button>
            <RequestQuoteButton size="lg" variant="outline"></RequestQuoteButton>
          </Group>
        </Stack>
      </SectionWrapper>
      <ContactSection></ContactSection>
    </>
  );
}
