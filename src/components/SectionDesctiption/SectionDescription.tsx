import { Text, type TextProps } from '@mantine/core';
import classes from './SectionDescription.module.css';

type SectionDescriptionProps = TextProps & {
  children?: string;
};

export function SectionDescription({ children, ...text_props }: SectionDescriptionProps) {
  return (
    <Text size="lg" className={classes.description} maw={600} {...text_props}>
      {children}
    </Text>
  );
}
