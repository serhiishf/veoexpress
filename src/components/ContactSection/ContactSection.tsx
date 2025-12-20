import { useTranslations } from 'next-intl';
import { SectionProps } from '@/../types/shared';
import { ContactCard } from '../ContactCard/ContactCard';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function ContactSection({ background = 'white' }: SectionProps) {
  const t = useTranslations('components.contact_section');

  return (
    <SectionWrapper background={background}>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <ContactCard></ContactCard>
    </SectionWrapper>
  );
}
