import { useTranslations } from 'next-intl';
import { SimpleGrid, Space } from '@mantine/core';
import { SectionProps } from '@/../types/shared';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ServiceCard } from '../ServiceCard/ServiceCard';

export function ServicesSection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.services_section');

  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <Space h="xl" />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <ServiceCard
          title={t('cards.moving.title')}
          description={t('cards.moving.description')}
          href="#"
          image_src={'/illustrations/moving.webp'}
          image_alt={t('cards.moving.image_alt')}
        ></ServiceCard>
        <ServiceCard
          title={t('cards.waste_removal.title')}
          description={t('cards.waste_removal.description')}
          image_src={'/illustrations/waste_removal.webp'}
          image_alt={t('cards.waste_removal.image_alt')}
        ></ServiceCard>
        <ServiceCard
          title={t('cards.heavy_transport.title')}
          description={t('cards.heavy_transport.description')}
          image_src={'/illustrations/volvo_and_trailer_with_tractors.webp'}
          image_alt={t('cards.heavy_transport.image_alt')}
        ></ServiceCard>
        <ServiceCard
          title={t('cards.adr_dangerous_goods.title')}
          description={t('cards.adr_dangerous_goods.description')}
          image_src={'/illustrations/adr_goods.webp'}
          image_alt={t('cards.adr_dangerous_goods.image_alt')}
        ></ServiceCard>
        <ServiceCard
          title={t('cards.crane_loading_work.title')}
          description={t('cards.crane_loading_work.description')}
          image_src={'/illustrations/unloading_with_crane.webp'}
          image_alt={t('cards.crane_loading_work.image_alt')}
        ></ServiceCard>
        <ServiceCard
          title={t('cards.towing.title')}
          description={t('cards.towing.description')}
          image_src="/illustrations/towing.webp"
          image_alt={t('cards.towing.image_alt')}
        ></ServiceCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
