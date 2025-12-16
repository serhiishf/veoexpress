import { SimpleGrid } from '@mantine/core';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { ServiceCard } from '../ServiceCard/ServiceCard';

export function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="What we do" subtitle="SERVICES"></SectionHeader>
      <SectionDescription>Choose a service — each page includes what’s included, how it works, and what to prepare.</SectionDescription>
      <SimpleGrid cols={{ base: 1, sm: 2}}>
        <ServiceCard title="Moving" description="Apartment • Office • Storage"></ServiceCard>
        <ServiceCard title="Waste removal" description="Household • Construction • Site"></ServiceCard>
        <ServiceCard title="Heavy transport" description="Equipment • Pallets • Cargo"></ServiceCard>
        <ServiceCard title="ADR dangerous goods" description="Licensed for ADR transportation"></ServiceCard>
        <ServiceCard title="Crane & loading work" description="Loading/unloading • Installation work"></ServiceCard>
        <ServiceCard title="Towing" description="Breakdowns • Accidents • Hard-to-access locations"></ServiceCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
