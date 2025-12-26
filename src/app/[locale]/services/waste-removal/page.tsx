import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WasteRemovalHeroSection } from '@/components/WasteRemovalHeroSection/WasteRemovalHeroSection';

export default function WasteRemovalPage() {
  return (
    <PageContainer>
      <WasteRemovalHeroSection background="grey"></WasteRemovalHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
