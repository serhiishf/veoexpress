import { Title, Text, Stack, Space } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { BsChatQuote } from 'react-icons/bs';

import classes from './TestimonialsCard.module.css';

type TestimonialsCardProps = {
  title: string;
  children: React.ReactNode;
};

export function TestimonialsCard({ title, children }: TestimonialsCardProps) {
  return (
    <CardWrapper /* maw={400} */>
      <Stack justify="center" align="center">
        <Title order={3}>{title}</Title>
        <BsChatQuote size={48} opacity={0.8} />
        <Text fs="italic" fz={'lg'} fw={400} ta="center">
          “{children}”
        </Text>
      </Stack>
    </CardWrapper>
  );
}
