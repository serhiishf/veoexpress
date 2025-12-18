import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';

export function ContactSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="Need transport today?" subtitle="CONTACT"></SectionHeader>
      <SectionDescription>Call or send a request — we reply fast with a clear price and pickup time.</SectionDescription>
    </SectionWrapper>
  );
}
