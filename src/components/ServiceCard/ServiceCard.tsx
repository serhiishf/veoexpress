import { Title, Text, Paper } from '@mantine/core';

import classes from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description?: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Paper radius={12} shadow="sm" p={20} className={classes.service_card} mih={300}>
      <Title order={3}>{title}</Title>
      {description && <Text>{description}</Text>}
    </Paper>
  );
}
