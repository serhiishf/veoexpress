import { useTranslations } from 'next-intl';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { TowingHeroSection } from '@/components/TowingHeroSection/TowingHeroSection';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function TowingPage() {
  const t = useTranslations('pages.towing');

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
      <TowingHeroSection background="grey"></TowingHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
