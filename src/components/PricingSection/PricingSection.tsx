import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { RequestDetailsCard } from '../RequestDetailsCard/RequestDetailsCard';

export function PricingSection() {
  return (
    <SectionWrapper>
      
      <SectionHeader title="Simple and transparent" subtitle="PRICING"></SectionHeader>
      <SectionDescription>Price depends on route, volume/weight, floors, and special conditions (ADR, crane work). We confirm everything before we start.</SectionDescription>
      <RequestDetailsCard></RequestDetailsCard>
    </SectionWrapper>
  );
}
