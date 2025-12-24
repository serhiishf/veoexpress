import { ContactSection } from '@/components/ContactSection/ContactSection';
import { InDevelopingSection } from '@/components/InDevelopingSection/InDevelopingSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function WasteRemovalPage() {
  return (
    <PageContainer>
      <InDevelopingSection></InDevelopingSection>
      <ContactSection></ContactSection>
    </PageContainer>
  );
}
