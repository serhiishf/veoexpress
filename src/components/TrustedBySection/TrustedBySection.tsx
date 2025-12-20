import { useTranslations } from 'next-intl';
import { Center, Group, Image, SimpleGrid, Space } from '@mantine/core';
import { SectionProps } from '@/../types/shared';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { TestimonialsCard } from '../TestimonialsCard/TestimonialsCard';
import classes from './TrustedBySection.module.css';

export function TrustedBySection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.trusted_by_section');

  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" p="lg">
        <Center>
          <Image
            className={classes.logo}
            src="/logos/kuehne_nagel_logo.png"
            fit="contain"
            h={40}
            w="auto"
          ></Image>
        </Center>
        <Center>
          <Image
            className={classes.logo}
            src="/logos/myhome_logo.png"
            fit="contain"
            h={80}
            w="auto"
          ></Image>
        </Center>
        <Center>
          <Image
            className={classes.logo}
            src="/logos/vivere_kool_logo.png"
            fit="contain"
            h={38}
            w="auto"
          ></Image>
        </Center>
        <Center>
          <Image
            className={classes.logo}
            src="/logos/smartposti_logo.png"
            fit="contain"
            h={40}
            w="auto"
          ></Image>
        </Center>
      </SimpleGrid>
      <Space h="xl"></Space>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" p="lg">
        <TestimonialsCard title={t('cards.mirelle_liivago.title')}>
          {t('cards.mirelle_liivago.text')}
        </TestimonialsCard>
        <TestimonialsCard title={t('cards.inga_avaring.title')}>
          {t('cards.inga_avaring.text')}
        </TestimonialsCard>
        <TestimonialsCard title={t('cards.viive_kuttner.title')}>
          {t('cards.viive_kuttner.text')}
        </TestimonialsCard>
      </SimpleGrid>
    </SectionWrapper>
  );
}
