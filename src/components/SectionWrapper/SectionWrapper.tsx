import clsx from 'clsx';
import classes from './SectionWrapper.module.css';
import { Stack } from '@mantine/core';

type SectionWrapperProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
  background?: 'grey' | 'white';
};

export function SectionWrapper({ children, background = 'white', ...div_props }: SectionWrapperProps) {
  return (
    <Stack gap="xl" className={clsx(classes.section_wrapper, background === 'grey' && classes.section_bg_grey)} {...div_props}>
      {children}
    </Stack>
  );
}
