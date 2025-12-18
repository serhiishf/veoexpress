import { Card, CardSection, Title, Text, Group, ThemeIcon, type ThemeIconProps, Space } from '@mantine/core';
import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';

import classes from './FeatureCard.module.css';

type FeatureCardProps = {
  title: string;
  description: string;
  icon_component?: ComponentType<IconBaseProps>;
  icon_props?: Omit<ThemeIconProps, 'children'>;
};

export function FeatureCard({ title, description, icon_component: Icon, icon_props }: FeatureCardProps) {
  return (
    <Card className={classes.card}>
      <CardSection p="xl">
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
      </CardSection>
    </Card>
  );
}
