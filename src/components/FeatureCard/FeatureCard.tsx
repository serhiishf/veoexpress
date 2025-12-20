import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';
import { Group, Space, Text, ThemeIcon, Title, type ThemeIconProps } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

type FeatureCardProps = {
  title: string;
  description: string;
  icon_component?: ComponentType<IconBaseProps>;
  icon_props?: Omit<ThemeIconProps, 'children'>;
};

export function FeatureCard({
  title,
  description,
  icon_component: Icon,
  icon_props,
}: FeatureCardProps) {
  return (
    <CardWrapper>
      <Group align="center" wrap="nowrap" gap="md">
        {Icon && (
          <ThemeIcon radius="xl" size={40} variant="light" {...icon_props}>
            <Icon size={18} />
          </ThemeIcon>
        )}

        <div>
          <Title order={3}>{title}</Title>
        </div>
      </Group>
      <Space h="lg"></Space>
      <Text size="lg">{description}</Text>
    </CardWrapper>
  );
}
