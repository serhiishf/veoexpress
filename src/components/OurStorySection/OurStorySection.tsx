import { useTranslations } from 'next-intl';
import { Ri24HoursFill, RiCalendarCheckLine, RiTruckLine, RiUserHeartLine } from 'react-icons/ri';
import { SimpleGrid, Stack } from '@mantine/core';
import { SectionProps } from '@/types/shared';
import { FeatureCard } from '../FeatureCard/FeatureCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function OurStorySection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.our_story_section');

  return (
    <SectionWrapper {...sectionProps}>
      <Stack gap="xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
        <SectionDescription>{t('description')}</SectionDescription>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
          <FeatureCard
            title={t('features.years.title')}
            description={t('features.years.description')}
            iconComponent={RiCalendarCheckLine}
          />
          <FeatureCard
            title={t('features.flexible.title')}
            description={t('features.flexible.description')}
            iconComponent={Ri24HoursFill}
          />
          <FeatureCard
            title={t('features.own_trucks.title')}
            description={t('features.own_trucks.description')}
            iconComponent={RiTruckLine}
          />
          <FeatureCard
            title={t('features.repeat.title')}
            description={t('features.repeat.description')}
            iconComponent={RiUserHeartLine}
          />
        </SimpleGrid>
      </Stack>
    </SectionWrapper>
  );
}
