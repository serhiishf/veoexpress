import { InDevelopingSection } from '@/components/InDevelopingSection/InDevelopingSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { VehicleConfigurator } from '@/components/VehicleConfigurator/VehicleConfigurator';

export default function VehiclesPage() {
  return (
    <PageContainer>
      <InDevelopingSection></InDevelopingSection>
      <VehicleConfigurator></VehicleConfigurator>
      <ContactSection></ContactSection>
    </PageContainer>
  );
}
