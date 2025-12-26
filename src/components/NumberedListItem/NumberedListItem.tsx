import {
  Flex,
  Stack,
  Text,
  ThemeIcon,
  type FlexProps,
  type MantineColor,
  type MantineSize,
} from '@mantine/core';

type NumberedListItemProps = FlexProps & {
  title?: string;
  description?: string;
  number: number;
  size?: MantineSize;
  titleColor?: MantineColor;
  descriptionColor?: MantineColor;
};

const number_icon_size_by_size: Record<MantineSize, number> = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 38,
  xl: 44,
};

export function NumberedListItem({
  title,
  description,
  number,
  size = 'md',
  titleColor,
  descriptionColor,
  ...flexProps
}: NumberedListItemProps) {
  const ensuredTitleColor = titleColor ?? 'black';
  const ensuredDescriptionColor = descriptionColor ?? 'gray';

  return (
    <Flex align="flex-start" gap="md" wrap="nowrap" {...flexProps}>
      <ThemeIcon
        radius="xl"
        variant="light"
        color="blue"
        size={number_icon_size_by_size[size]}
        style={{ flex: '0 0 auto' }}
      >
        <Text fw={700} style={{ lineHeight: 1 }}>
          {number}
        </Text>
      </ThemeIcon>
      <Stack gap="xs">
        {title && (
          <Text fw={700} size={size} c={ensuredTitleColor}>
            {title}
          </Text>
        )}
        {description && (
          <Text size={size} c={ensuredDescriptionColor}>
            {description}
          </Text>
        )}
      </Stack>
    </Flex>
  );
}
