import { useTranslations } from 'next-intl';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { MovingHeroSection } from '@/components/MovingHeroSection/MovingHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function MovingPage() {
  const t = useTranslations('pages.moving');

  const includedList = [
    t('included_list.item_1'),
    t('included_list.item_2'),
    t('included_list.item_3'),
    t('included_list.item_4'),
  ];

  const addonsList = [
    t('addons_list.item_1'),
    t('addons_list.item_2'),
    t('addons_list.item_3'),
    t('addons_list.item_4'),
    t('addons_list.item_5'),
  ];

  return (
    <PageContainer>
      <MovingHeroSection background="grey"></MovingHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
