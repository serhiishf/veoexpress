import { useTranslations } from 'next-intl';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WasteRemovalHeroSection } from '@/components/WasteRemovalHeroSection/WasteRemovalHeroSection';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function WasteRemovalPage() {
  const t = useTranslations('pages.waste_removal');

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
      <WasteRemovalHeroSection background="grey"></WasteRemovalHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
