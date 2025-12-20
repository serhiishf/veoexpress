import { useTranslations } from 'next-intl';
import { SectionProps } from '@/../types/shared';
import { RequestDetailsCard } from '../RequestDetailsCard/RequestDetailsCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function PricingSection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.pricing_section');
  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <RequestDetailsCard></RequestDetailsCard>
    </SectionWrapper>
  );
}
