import { useTranslations } from 'next-intl';
import { Button, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { SectionProps } from '@/../types/shared';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { SameDayOptions } from '../SameDayOptions/SameDayOptions';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ViewServicesButton } from '../ViewServicesButton/ViewServicesButton';
import classes from './HomeHeroSection.module.css';

export function HomeHeroSection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.home_hero');

  return (
    <SectionWrapper {...sectionProps}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 48 }} verticalSpacing="sm">
        <Stack gap="xl">
          <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
          <SectionDescription>{t('section_description')}</SectionDescription>
          <SameDayOptions></SameDayOptions>
          <Group>
            <RequestQuoteButton size="lg"></RequestQuoteButton>
            <ViewServicesButton size="lg"></ViewServicesButton>
          </Group>
        </Stack>
        <Stack justify="center">
          <Image src="/illustrations/three_vehicles.webp" alt={t('image_alt')}></Image>
        </Stack>
      </SimpleGrid>
    </SectionWrapper>
  );
}
