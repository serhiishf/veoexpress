import { useTranslations } from 'next-intl';
import { FaEuroSign } from 'react-icons/fa';
import { FiMapPin, FiTool } from 'react-icons/fi';
import { GoShieldCheck } from 'react-icons/go';
import { SimpleGrid, Space } from '@mantine/core';
import { SectionProps } from '@/types/shared';
import { FeatureCard } from '../FeatureCard/FeatureCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function WhyWeSection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.why_we_section');

  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <FeatureCard
          title={t('cards.free_site_estimate.title')}
          description={t('cards.free_site_estimate.description')}
          iconComponent={FiMapPin}
        ></FeatureCard>
        <FeatureCard
          title={t('cards.fixed_quote.title')}
          description={t('cards.fixed_quote.description')}
          iconComponent={FaEuroSign}
        ></FeatureCard>
        <FeatureCard
          title={t('cards.careful_handling.title')}
          description={t('cards.careful_handling.description')}
          iconComponent={GoShieldCheck}
        ></FeatureCard>
        <FeatureCard
          title={t('cards.right_equipment.title')}
          description={t('cards.right_equipment.description')}
          iconComponent={FiTool}
        ></FeatureCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
