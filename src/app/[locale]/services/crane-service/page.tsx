import { useTranslations } from 'next-intl';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { CraneServiceHeroSection } from '@/components/CraneServiceHeroSection/CraneServiceHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function CraneServicePage() {
  const t = useTranslations('pages.crane_service');

  const includedList = [
    t('included_list.item_1'),
    t('included_list.item_2'),
    t('included_list.item_3'),
    t('included_list.item_4'),
  ];

  const addonsList = [t('addons_list.item_1'), t('addons_list.item_2'), t('addons_list.item_3')];

  return (
    <PageContainer>
      <CraneServiceHeroSection background="grey"></CraneServiceHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
