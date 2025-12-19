import { Paper, type PaperProps } from '@mantine/core';

import classes from './CardWrapper.module.css';

type CardWrapperProps = PaperProps & {
  children?: React.ReactNode;
};

export function CardWrapper({ children, ...paperProps }: CardWrapperProps) {
  return (
    <Paper radius={28} p={28} className={classes.card_wrapper} {...paperProps}>
      {children}
    </Paper>
  );
}
