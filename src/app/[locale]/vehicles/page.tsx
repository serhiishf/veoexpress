import { Stack } from '@mantine/core';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { InDevelopingSection } from '@/components/InDevelopingSection/InDevelopingSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { VehicleConfigurator } from '@/components/VehicleConfigurator/VehicleConfigurator';
import { vehicles } from '@/data/vehicles';

export default function VehiclesPage() {
  return (
    <PageContainer>
      <Stack>
        {vehicles.map((vehicle) => (
          <VehicleConfigurator key={vehicle.id} vehicle={vehicle}></VehicleConfigurator>
        ))}
      </Stack>
      {/* <InDevelopingSection></InDevelopingSection> */}
      <ContactSection></ContactSection>
    </PageContainer>
  );
}
