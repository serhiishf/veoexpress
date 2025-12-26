import { useTranslations } from 'next-intl';
import { SectionProps } from '../../../types/shared';
import { HeroSectionContainer } from '../HeroSectionContainer/HeroSectionWrapper';

export function MovingHeroSection({ ...sectionProps }: SectionProps) {
  const t = useTranslations('components.moving_hero_section');

  const bulletPoints = [
    t('bullet_points.fast_scheduling'),
    t('bullet_points.good_teamwork'),
    t('bullet_points.simple_process'),
  ];

  return (
    <HeroSectionContainer
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      imageSrc="/illustrations/moving.webp"
      imageAlt={t('image_alt')}
      bulletPoints={bulletPoints}
      {...sectionProps}
    ></HeroSectionContainer>
  );
}
