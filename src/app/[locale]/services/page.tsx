import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { HowItWorkStepsSection } from '@/components/HowItWorkStepsSection/HowItWorkStepsSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';

export default function ServicesPage() {
  return (
    <PageContainer>
      <ServicesSection></ServicesSection>
      <HowItWorkStepsSection></HowItWorkStepsSection>
      <ContactFormSection background="grey"></ContactFormSection>
    </PageContainer>
  );
}
