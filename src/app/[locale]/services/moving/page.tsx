import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { InDevelopingSection } from '@/components/InDevelopingSection/InDevelopingSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function MovingPage() {
  return (
    <PageContainer>
      <InDevelopingSection></InDevelopingSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
