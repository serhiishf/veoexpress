import { useTranslations } from 'next-intl';
import { Button, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { SectionProps } from '@/../types/shared';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import classes from './HomeHero.module.css';

export function HomeHero({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.home_hero');

  return (
    <SectionWrapper background={background}>
      <SimpleGrid
        className={classes.home_hero}
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 'xl', md: 48 }}
        verticalSpacing="sm"
      >
        <Stack className={classes.left_side} gap="xl">
          <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
          <SectionDescription>{t('section_description')}</SectionDescription>
          <Text className={classes.description}></Text>
          <Group>
            <RequestQuoteButton size="lg"></RequestQuoteButton>
            <Button size="lg" variant="outline">
              {t('view_services')}
            </Button>
          </Group>
          <CardWrapper /* className={classes.additional_info} */>
            <Title order={3}>{t('same_day_title')}</Title>
            <Text size="lg">{t('same_day_description')}</Text>
          </CardWrapper>
        </Stack>
        <Stack className={classes.right_side} justify="center">
          <Image src="/illustrations/three_vehicles.webp" alt={t('image_alt')}></Image>
        </Stack>
      </SimpleGrid>
    </SectionWrapper>
  );
}
