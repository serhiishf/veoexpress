import { Stack, Title } from '@mantine/core';
import { Subtitle } from '../Subtitle/Subtitle';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <Stack>
      {subtitle && <Subtitle tt="uppercase">{subtitle}</Subtitle>}
      <Title>{title}</Title>
    </Stack>
  );
}
