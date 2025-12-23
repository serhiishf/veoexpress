import { AboutCompanySection } from '@/components/AboutCompanySection/AboutCompanySection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { FleetEquipmentSection } from '@/components/FleetEquipmentSection/FleetEquipmentSection';
import { OurStorySection } from '@/components/OurStorySection/OurStorySection';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function AboutPage() {
  return (
    <PageContainer>
      <AboutCompanySection background="grey" />
      <OurStorySection />
      <FleetEquipmentSection background="grey" />
      <ContactSection></ContactSection>
    </PageContainer>
  );
}
