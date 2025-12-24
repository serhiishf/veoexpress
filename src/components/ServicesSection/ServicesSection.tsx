import { useTranslations } from 'next-intl';
import { SimpleGrid, Space } from '@mantine/core';
import { SectionProps } from '@/../types/shared';
import { routes } from '@/constants/routes';
import { ActionCard } from '../ActionCard/ActionCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function ServicesSection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.services_section');

  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <Space h="xl" />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <ActionCard
          title={t('cards.moving.title')}
          description={t('cards.moving.description')}
          imageSrc={'/illustrations/moving.webp'}
          imageAlt={t('cards.moving.image_alt')}
          href={routes.services.moving}
        ></ActionCard>
        <ActionCard
          title={t('cards.waste_removal.title')}
          description={t('cards.waste_removal.description')}
          imageSrc={'/illustrations/waste_removal.webp'}
          imageAlt={t('cards.waste_removal.image_alt')}
          href={routes.services.waste_removal}
        ></ActionCard>
        <ActionCard
          title={t('cards.heavy_transport.title')}
          description={t('cards.heavy_transport.description')}
          imageSrc={'/illustrations/volvo_and_trailer_with_tractors.webp'}
          imageAlt={t('cards.heavy_transport.image_alt')}
          href={routes.services.heavy_transport}
        ></ActionCard>
        <ActionCard
          title={t('cards.adr_dangerous_goods.title')}
          description={t('cards.adr_dangerous_goods.description')}
          imageSrc={'/illustrations/adr_goods.webp'}
          imageAlt={t('cards.adr_dangerous_goods.image_alt')}
          href={routes.services.adr_transport}
        ></ActionCard>
        <ActionCard
          title={t('cards.crane_loading_work.title')}
          description={t('cards.crane_loading_work.description')}
          imageSrc={'/illustrations/unloading_with_crane.webp'}
          imageAlt={t('cards.crane_loading_work.image_alt')}
          href={routes.services.crane_service}
        ></ActionCard>
        <ActionCard
          title={t('cards.towing.title')}
          description={t('cards.towing.description')}
          imageSrc="/illustrations/towing.webp"
          imageAlt={t('cards.towing.image_alt')}
          href={routes.services.towing}
        ></ActionCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
