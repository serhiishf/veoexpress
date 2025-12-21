import { useTranslations } from 'next-intl';
import { Container, Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { ContactCard } from '@/components/ContactCard/ContactCard';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { SectionDescription } from '@/components/SectionDesctiption/SectionDescription';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { company } from '@/constants/company';

export default function ContactPage() {
  const t = useTranslations('pages.contact');

  return (
    <PageContainer>
      <SectionWrapper background="grey" h="100%">
        <Stack gap="lg">
          <Stack>
            <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
            <SectionDescription>{t('description')}</SectionDescription>
          </Stack>
          <Group>
            <ContactForm></ContactForm>
            <ContactCard></ContactCard>
          </Group>
        </Stack>
      </SectionWrapper>
    </PageContainer>
  );
}
