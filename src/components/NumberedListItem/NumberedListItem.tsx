import { Group, Text } from '@mantine/core';

type NumberedListItemProps = {
  title: string;
  description: string;
  number: number;
};

export function NumberedListItem({ title, description, number }: NumberedListItemProps) {
  return (
    <Group>
      <Text size="xl" fw={700}>
        {number}
      </Text>
      <Text size="lg">
        <Text fw={700}>{title}</Text> {description}
      </Text>
    </Group>
  );
}
