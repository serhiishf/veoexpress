import { SimpleGrid, Space } from '@mantine/core';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { FeatureCard } from '../FeatureCard/FeatureCard';
import { FiTool } from 'react-icons/fi';
import { FaEuroSign } from 'react-icons/fa';
import { GoShieldCheck } from 'react-icons/go';
import { SectionProps } from '@/../types/shared';

export function WhyWeSection({ background = 'white' }: SectionProps) {
  return (
    <SectionWrapper background={background}>
      <SectionHeader title="Clear process, no surprises" subtitle="WHY VEOEXPRESS"></SectionHeader>
      <SectionDescription>We show up on time, protect your property, and keep communication simple. For special cargo we can provide ADR transport.</SectionDescription>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" p="lg">
        <FeatureCard title="Fixed quote" description="Send photos or a list — get a clear price and time window." icon_component={FaEuroSign}></FeatureCard>
        <FeatureCard title="Careful handling" description="Straps, blankets, and smart loading so items arrive safe" icon_component={GoShieldCheck}></FeatureCard>
        <FeatureCard title="Right equipment" description="From dollies to a small crane — we match the job to tools." icon_component={FiTool}></FeatureCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
