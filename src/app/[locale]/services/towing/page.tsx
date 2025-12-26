import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { TowingHeroSection } from '@/components/TowingHeroSection/TowingHeroSection';

export default function TowingPage() {
  return (
    <PageContainer>
      <TowingHeroSection background="grey"></TowingHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
