import { useTranslations } from 'next-intl';
import { LuCirclePlus } from 'react-icons/lu';
import { SimpleGrid, Stack, Text } from '@mantine/core';
import { SectionProps } from '../../../types/shared';
import { BulletPointContainer } from '../BulletPointContainer/BulletPointContainer';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

type WhatIncludedSectionProps = SectionProps & {
  title?: string;
  subtitle?: string;
  description?: string;
  includedList: string[];
  addonsList: string[];
};

const includedIconColor = 'green';
const addonIconColor = 'orange';

export function WhatIncludedSection({
  title,
  subtitle,
  description,
  includedList = [],
  addonsList = [],
  ...sectionProps
}: WhatIncludedSectionProps) {
  const t = useTranslations('components.what_included_section');

  const ensuredTitle = title ? title : t('title');
  const ensuredSubtitle = subtitle ? subtitle : t('subtitle');
  const ensuredDescription = description ? description : t('description');

  return (
    <SectionWrapper {...sectionProps}>
      <SectionHeader title={ensuredTitle} subtitle={ensuredSubtitle} />
      <SectionDescription>{ensuredDescription}</SectionDescription>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <CardWrapper style={{ height: '100%', display: 'flex' }}>
          <Stack style={{ flex: 1 }}>
            <Text size="lg" fw={700}>
              {t('included')}
            </Text>

            {includedList.map((item) => (
              <BulletPointContainer key={item} iconColor={includedIconColor}>
                {item}
              </BulletPointContainer>
            ))}
          </Stack>
        </CardWrapper>

        <CardWrapper style={{ height: '100%', display: 'flex' }}>
          <Stack style={{ flex: 1 }}>
            <Text size="lg" fw={700}>
              {t('optional_addons')}
            </Text>

            {addonsList.map((item) => (
              <BulletPointContainer key={item} icon={LuCirclePlus} iconColor={addonIconColor}>
                {item}
              </BulletPointContainer>
            ))}
          </Stack>
        </CardWrapper>
      </SimpleGrid>
    </SectionWrapper>
  );
}
