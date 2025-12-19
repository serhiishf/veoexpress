import { Group, Image, Space, SimpleGrid, Center } from '@mantine/core';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { TestimonialsCard } from '../TestimonialsCard/TestimonialsCard';
import { SectionProps } from '@/../types/shared';

import classes from './TrustedBySection.module.css';

export function TrustedBySection({ background = 'white' }: SectionProps) {
  return (
    <SectionWrapper background={background}>
      <SectionHeader title="Trusted By" subtitle="CUSTOMERS & PARTNERS"></SectionHeader>
      <SectionDescription>
        Companies and private clients choose us for careful handling, clear communication, and reliable delivery across Tallinn, Harjumaa, and all Estonia.
      </SectionDescription>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" p="lg">
        <Center>
          <Image className={classes.logo} src="/logos/kuehne_nagel_logo.png" fit="contain" h={40} w="auto"></Image>
        </Center>
        <Center>
          <Image className={classes.logo} src="/logos/myhome_logo.png" fit="contain" h={80} w="auto"></Image>
        </Center>
        <Center>
          <Image className={classes.logo} src="/logos/vivere_kool_logo.png" fit="contain" h={38} w="auto"></Image>
        </Center>
        <Center>
          <Image className={classes.logo} src="/logos/smartposti_logo.png" fit="contain" h={40} w="auto"></Image>
        </Center>
      </SimpleGrid>
      <Space h="xl"></Space>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" p="lg">
        <TestimonialsCard title="Mirelle Liivago">Tahtsin tänada Teie töötajaid diivani äraveo eest! Poisid olid väga tublid ja viisakad!</TestimonialsCard>
        <TestimonialsCard title="Inga, Avaring OÜ">
          Meeldiv klienditeenindus. Aitavad leida soodsa hinnaga operatiivsed lahendused vastavalt klientide vajadustele Abivalmid töötajad aitavad kolimise, transpordi,
          utiliseerimise ja mööbli montaaziga Kiire ja soodne!
        </TestimonialsCard>
        <TestimonialsCard title="Viive Küttner, Öökülm OÜ">
          Veame pidevalt erinevat suuremõõtmelist kaupa erinevatesse sihtpunktidesse üle Eesti - väga paindlik,kiire ja sõbralik teenindus, läbimõeldud lahendused.
        </TestimonialsCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
