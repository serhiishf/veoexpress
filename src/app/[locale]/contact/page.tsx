import { useTranslations } from 'next-intl';
import { Container, Stack } from '@mantine/core';
import { CardWrapper } from '@/components/CardWrapper/CardWrapper';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { SectionDescription } from '@/components/SectionDesctiption/SectionDescription';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';

export default function ContactPage() {
  const t = useTranslations('pages.contact');

  return (
    <Container size="xl">
      <Stack gap="lg">
        <CardWrapper>
          <Stack>
            <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
            <SectionDescription>{t('description')}</SectionDescription>
          </Stack>
        </CardWrapper>
        <ContactForm></ContactForm>
      </Stack>
    </Container>
  );
}
