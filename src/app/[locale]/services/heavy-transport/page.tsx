import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { HeavyTransportHeroSection } from '@/components/HeavyTransportHeroSection/HeavyTransportHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function HeavyTransportPage() {
  return (
    <PageContainer>
      <HeavyTransportHeroSection background="grey"></HeavyTransportHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
