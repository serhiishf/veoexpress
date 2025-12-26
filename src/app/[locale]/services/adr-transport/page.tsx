import { useTranslations } from 'next-intl';
import { AdrTransportHeroSection } from '@/components/AdrTransportHeroSection/AdrTransportHeroSection';
import { ContactFormSection } from '@/components/ContactFormSection/ContactFormSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { WhatIncludedSection } from '@/components/WhatIncludedSection/WhatIncludedSection';

export default function AdrTransportPage() {
  const t = useTranslations('pages.adr_transport');

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
      <AdrTransportHeroSection background="grey"></AdrTransportHeroSection>
      <WhatIncludedSection
        includedList={includedList}
        addonsList={addonsList}
      ></WhatIncludedSection>
      <ContactFormSection></ContactFormSection>
    </PageContainer>
  );
}
