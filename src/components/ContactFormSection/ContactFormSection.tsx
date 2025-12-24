import { Box, Button, Grid, GridCol, Stack } from '@mantine/core';
import { CONTACT_FROM_SECTION_ID } from '@/constants/anchors';
import { SectionProps } from '../../../types/shared';
import { ContactCard } from '../ContactCard/ContactCard';
import { ContactForm } from '../ContactForm/ContactForm';
import { SameDayOptions } from '../SameDayOptions/SameDayOptions';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

type ContactFormSectionProps = SectionProps & {};

//TODO: finished this section, add translations, etc pass contact form section id

export function ContactFormSection({ ...sectionProps }: ContactFormSectionProps) {
  return (
    <SectionWrapper {...sectionProps}>
      <SectionHeader title="Send a request" subtitle="MESSAGE US"></SectionHeader>
      <SectionDescription>
        Leave your contact and a short message — we’ll confirm options, price, and timing.
      </SectionDescription>
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
                <SameDayOptions size="md" />
              </Box>
            </Stack>
          </Box>
        </GridCol>
      </Grid>
    </SectionWrapper>
  );
}
