import { Subtitle } from '../Subtitle/Subtitle';
import { Title, Stack } from '@mantine/core';

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
