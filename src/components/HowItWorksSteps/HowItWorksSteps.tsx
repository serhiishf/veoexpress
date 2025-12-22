import { useTranslations } from 'next-intl';
import { Box, Stack, Text, Title, type MantineSize } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { NumberedListItem } from '../NumberedListItem/NumberedListItem';

type HowItWorksStepsProps = {
  size?: MantineSize;
};

export function HowItWorksSteps({ size = 'md' }: HowItWorksStepsProps) {
  const t = useTranslations('components.how_it_works_steps');

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
  ];

  return (
    <CardWrapper>
      <Stack>
        <Box>
          <Title order={3} size={size}>
            How it works
          </Title>
          <Text size={size} c="gray">
            Clear steps, no surprises.
          </Text>
        </Box>
        {steps.map((step, index) => (
          <NumberedListItem
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            size={'sm'}
          />
        ))}
      </Stack>
    </CardWrapper>
  );
}
