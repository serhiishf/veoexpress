import { useTranslations } from 'next-intl';
import { Box, Stack, Text, Title } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

type HowItWorksStepsProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export function HowItWorksSteps({ size = 'md' }: HowItWorksStepsProps) {
  return (
    <CardWrapper>
      <Stack>
        <Box>
          <Title order={3} size={size}>
            How It Works
          </Title>
          <Text size={size} c="gray">
            Clear steps, no surprises.
          </Text>
        </Box>
      </Stack>
    </CardWrapper>
  );
}
