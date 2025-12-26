import { AdrTransportHeroSection } from '@/components/AdrTransportHeroSection/AdrTransportHeroSection';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function AdrTransportPage() {
  return (
    <PageContainer>
      <AdrTransportHeroSection background="grey"></AdrTransportHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
