import { useTranslations } from 'next-intl';
import { SimpleGrid } from '@mantine/core';
import { SectionProps } from '../../../types/shared';
import { ActionCard } from '../ActionCard/ActionCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function FleetEquipmentSection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.fleet_equipment_section');

  //TODO: add actual link directly to specific vehicle on page vehicles
  return (
    <SectionWrapper {...sectionProps}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <SimpleGrid cols={{ base: 1, md: 3 }}>
        <ActionCard
          title={t('fleet_list.van.title')}
          description={t('fleet_list.van.description')}
          href="#"
          imageSrc="/illustrations/red_van.webp"
          imageAlt={t('fleet_list.van.image_alt')}
        />
        <ActionCard
          title={t('fleet_list.medium_truck.title')}
          description={t('fleet_list.medium_truck.description')}
          href="#"
          imageSrc="/illustrations/medium_truck_with_pallets.webp"
          imageAlt={t('fleet_list.medium_truck.image_alt')}
        />
        <ActionCard
          title={t('fleet_list.truck_with_crane.title')}
          description={t('fleet_list.truck_with_crane.description')}
          href="#"
          imageSrc="/illustrations/truck_with_tracked_vehicle.png"
          imageAlt={t('fleet_list.truck_with_crane.image_alt')}
        />
      </SimpleGrid>
    </SectionWrapper>
  );
}
