import { useTranslations } from 'next-intl';
import { SectionProps } from '../../../types/shared';
import { HeroSectionContainer } from '../HeroSectionContainer/HeroSectionWrapper';

export function AdrTransportHeroSection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.adr_transport_hero_section');

  const bulletPoints = [t('bullet_points.bp_1'), t('bullet_points.bp_2'), t('bullet_points.bp_3')];

  return (
    <HeroSectionContainer
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      imageSrc="/illustrations/adr_goods.webp"
      imageAlt={t('image_alt')}
      bulletPoints={bulletPoints}
      {...sectionProps}
    ></HeroSectionContainer>
  );
}
