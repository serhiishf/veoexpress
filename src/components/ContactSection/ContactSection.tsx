import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { ContactCard } from '../ContactCard/ContactCard';
import { SectionProps } from '@/../types/shared';

export function ContactSection({ background = 'white' }: SectionProps) {
  return (
    <SectionWrapper background={background}>
      <SectionHeader title="Need transport today?" subtitle="CONTACT"></SectionHeader>
      <SectionDescription>Call or send a request — we reply fast with a clear price and pickup time.</SectionDescription>
      <ContactCard></ContactCard>
    </SectionWrapper>
  );
}
