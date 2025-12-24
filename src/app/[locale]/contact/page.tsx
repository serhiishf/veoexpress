import { useTranslations } from 'next-intl';
import { Box, Grid, GridCol, Stack } from '@mantine/core';
import { CallNowButton } from '@/components/CallNowButton/CallNowButton';
import { CardWrapper } from '@/components/CardWrapper/CardWrapper';
import { CompanyEmail } from '@/components/CompanyEmail/CompanyEmail';
import { CompanyPhone } from '@/components/CompanyPhone/CompanyPhone';
import { CompanyWorkArea } from '@/components/CompanyWorkArea/CompanyWorkArea';
import { ContactCard } from '@/components/ContactCard/ContactCard';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { HowItWorksSteps } from '@/components/HowItWorksSteps/HowItWorksSteps';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { SameDayOptions } from '@/components/SameDayOptions/SameDayOptions';
import { SectionDescription } from '@/components/SectionDesctiption/SectionDescription';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';

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
          <Grid gutter="lg">
            <GridCol span={{ base: 12, md: 8 }}>
              <ContactForm />
            </GridCol>

            <GridCol span={{ base: 12, md: 4 }}>
              <Box w={{ base: '100%', md: 'fit-content' }} maw="100%">
                <Stack justify="center" w="100%">
                  <Box w="100%">
                    <ContactCard variant="short" />
                  </Box>

                  <Box w="100%" maw="100%">
                    <HowItWorksSteps />
                  </Box>
                  <Box w="100%" maw="100%">
                    <SameDayOptions size="md" />
                  </Box>
                </Stack>
              </Box>
            </GridCol>
          </Grid>
        </Stack>
      </SectionWrapper>
    </PageContainer>
  );
}
