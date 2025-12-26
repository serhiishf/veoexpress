import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { MovingHeroSection } from '@/components/MovingHeroSection/MovingHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function MovingPage() {
  return (
    <PageContainer>
      <MovingHeroSection></MovingHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
