import { Box, Image, Paper, Text, Title, type ImageProps, type PaperProps } from '@mantine/core';
import clsx from 'clsx';

import classes from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description?: string;
  href?: string;

  background_src?: string;
  background_overlay_opacity?: number;

  image_src?: ImageProps['src'];
  image_alt?: string;
  image_props?: Omit<ImageProps, 'src' | 'alt'>;

  content_padding?: PaperProps['p'];
} & Omit<PaperProps, 'component' | 'href' | 'p'>;

export function ServiceCard({
  title,
  description,
  href,
  background_src,
  background_overlay_opacity = 0.45,
  image_src,
  image_alt,
  image_props,
  content_padding = 20,
  className,
  ...paper_props
}: ServiceCardProps) {
  return (
    <Paper component={href ? 'a' : 'div'} href={href} radius={12} shadow="sm" mih={300} p={0} className={clsx(classes.service_card, className)} {...paper_props}>
      <Box p={content_padding} className={classes.content}>
        <Title order={3}>{title}</Title>
        {description && (
          <Text size="lg" className={classes.description}>
            {description}
          </Text>
        )}
        {image_src ? <Image className={classes.card_image} src={image_src} alt={image_alt ?? ''} radius="md" {...image_props} mah={250} fit="contain" /> : null}
      </Box>
    </Paper>
  );
}
