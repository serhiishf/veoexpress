import { Paper } from '@mantine/core';

import classes from './CardWrapper.module.css';

type CardWrapperProps = {
  children?: React.ReactNode;
};

export function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Paper radius={28} p={28} className={classes.card_wrapper}>
      {children}
    </Paper>
  );
}
