import { useTranslations } from 'next-intl';
import { SimpleGrid, Text } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { NumberedListItem } from '../NumberedListItem/NumberedListItem';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export function HowItWorkStepsSection() {
  const t = useTranslations('components.how_it_works_steps_section');

  const steps = [
    {
      title: t('step_1.title'),
      description: t('step_1.description'),
    },
    {
      title: t('step_2.title'),
      description: t('step_2.description'),
    },
    {
      title: t('step_3.title'),
      description: t('step_3.description'),
    },
    {
      title: t('step_4.title'),
      description: t('step_3.description'),
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader title={t('title')} subtitle={t('subtitle')}></SectionHeader>
      <SectionDescription>{t('description')}</SectionDescription>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
        {steps.map((step, index) => {
          return (
            <CardWrapper key={index}>
              <NumberedListItem
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                size={'lg'}
                direction={'column'}
                descriptionColor="black"
              />
            </CardWrapper>
          );
        })}
      </SimpleGrid>
    </SectionWrapper>
  );
}
