import clsx from 'clsx';
import { Stack, type StackProps } from '@mantine/core';
import classes from './SectionWrapper.module.css';

type SectionWrapperProps = StackProps & {
  children: React.ReactNode;
  background?: 'grey' | 'white';
};

export function SectionWrapper({
  children,
  background = 'white',
  ...stackProps
}: SectionWrapperProps) {
  return (
    <Stack
      gap="xl"
      className={clsx(classes.section_wrapper, background === 'grey' && classes.section_bg_grey)}
      pl={{ base: 'sm', md: 'lg', lg: 'lg' }}
      pr={{ base: 'sm', md: 'lg', lg: 'lg' }}
      pt="lg"
      pb="lg"
      {...stackProps}
    >
      {children}
    </Stack>
  );
}
