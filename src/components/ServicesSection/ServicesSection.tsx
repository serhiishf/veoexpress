import { SimpleGrid, Space } from '@mantine/core';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { SectionProps } from '@/../types/shared';

export function ServicesSection({ background = 'white' }: SectionProps) {
  return (
    <SectionWrapper background={background}>
      <SectionHeader title="What we do" subtitle="SERVICES"></SectionHeader>
      <SectionDescription>Choose a service — each page includes what’s included, how it works, and what to prepare.</SectionDescription>
      <Space h="xl" />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <ServiceCard title="Moving" description="Apartment • Office • Storage" href="#" image_src={'/illustrations/moving.webp'} image_alt="load sofa to van"></ServiceCard>
        <ServiceCard
          title="Waste Removal"
          description="Household • Construction • Site"
          image_src={'/illustrations/waste_removal.webp'}
          image_alt="load waste to van"
        ></ServiceCard>
        <ServiceCard
          title="Heavy Transport"
          description="Equipment • Pallets • Cargo"
          image_src={'/illustrations/volvo_and_trailer_with_tractors.webp'}
          image_alt="Truck with two tractors and trailer"
        ></ServiceCard>
        <ServiceCard
          title="ADR Dangerous Goods"
          description="Licensed for ADR transportation"
          image_src={'/illustrations/adr_goods.webp'}
          image_alt="truck with ADR dangerous goods"
        ></ServiceCard>
        <ServiceCard
          title="Crane & Loading Work"
          description="Loading/unloading • Installation work"
          image_src={'/illustrations/unloading_with_crane.webp'}
          image_alt="Unloading goods with crane"
        ></ServiceCard>
        <ServiceCard
          title="Towing"
          description="Breakdowns • Accidents • Hard-to-access locations"
          image_src="/illustrations/towing.webp"
          image_alt="Towing van on truck"
        ></ServiceCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
