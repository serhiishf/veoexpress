import { Text, type TextProps } from '@mantine/core';

import classes from './Subtitle.module.css';

type SubtitleProps = TextProps & {
  children: React.ReactNode;
};

export function Subtitle({ children, ...text_props }: SubtitleProps) {
  return (
    <Text className={classes.subtitle} {...text_props}>
      {children}
    </Text>
  );
}
