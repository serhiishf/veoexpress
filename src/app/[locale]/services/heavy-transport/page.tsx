import { useTranslations } from 'next-intl';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { HeavyTransportHeroSection } from '@/components/HeavyTransportHeroSection/HeavyTransportHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function HeavyTransportPage() {
  const t = useTranslations('pages.heavy_transport');

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
  ];

  return (
    <PageContainer>
      <HeavyTransportHeroSection background="grey"></HeavyTransportHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
