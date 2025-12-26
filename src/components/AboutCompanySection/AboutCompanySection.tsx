import { useTranslations } from 'next-intl';
import { Box, Center, Flex, Grid, Group, Space, Stack } from '@mantine/core';
import { SectionProps } from '../../../types/shared';
import { BulletPointContainer } from '../BulletPointContainer/BulletPointContainer';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ViewServicesButton } from '../ViewServicesButton/ViewServicesButton';

export function AboutCompanySection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.about_company_section');

  const bulletPoints = [
    t('bullet_points.free_on_site_estimate'),
    'Tallinn • Harjumaa • Estonia',
    t('bullet_points.careful_handling'),
  ];

  return (
    <SectionWrapper {...sectionProps} pb={48}>
      <Flex gap="xl" align="center" justify="space-between" wrap="wrap">
        <Stack gap="xl">
          <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
          <Group>
            <RequestQuoteButton size="lg"></RequestQuoteButton>
            <ViewServicesButton size="lg"></ViewServicesButton>
          </Group>
        </Stack>
        <Box>
          <Stack gap="lg">
            {bulletPoints.map((item, index) => {
              return <BulletPointContainer key={index}>{item}</BulletPointContainer>;
            })}
          </Stack>
        </Box>
      </Flex>
    </SectionWrapper>
  );
}
