import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { CraneServiceHeroSection } from '@/components/CraneServiceHeroSection/CraneServiceHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function CraneServicePage() {
  return (
    <PageContainer>
      <CraneServiceHeroSection background="grey"></CraneServiceHeroSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
