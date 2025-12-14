import { Text, type TextProps } from '@mantine/core';

import classes from './SectionDescription.module.css';

type SectionDescriptionProps = TextProps & {
  children?: string;
};

export function SectionDescription({ children, ...text_props }: SectionDescriptionProps) {
  return (
    <Text className={classes.description} {...text_props}>
      {children}
    </Text>
  );
}
