import { Text, type TextProps } from '@mantine/core';
import { company } from '@/constants/company';

export function CompanyWorkArea({ ...textProps }: TextProps) {
  return <Text {...textProps}>{company.workArea}</Text>;
}
