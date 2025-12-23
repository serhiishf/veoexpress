import clsx from 'clsx';
import { Box, Image, Paper, Text, Title, type ImageProps, type PaperProps } from '@mantine/core';
import classes from './ActionCard.module.css';

type ActionCardProps = {
  title: string;
  description?: string;
  href?: string;

  backgroundSrc?: string;
  backgroundOverlayOpacity?: number;

  imageSrc?: ImageProps['src'];
  imageAlt?: string;
  image_props?: Omit<ImageProps, 'src' | 'alt'>;

  content_padding?: PaperProps['p'];
} & Omit<PaperProps, 'component' | 'href' | 'p'>;

export function ActionCard({
  title,
  description,
  href,
  backgroundSrc,
  backgroundOverlayOpacity = 0.45,
  imageSrc,
  imageAlt,
  image_props,
  content_padding = 20,
  className,
  ...paper_props
}: ActionCardProps) {
  return (
    <Paper
      component={href ? 'a' : 'div'}
      href={href}
      radius={12}
      shadow="sm"
      mih={300}
      p={0}
      className={clsx(classes.service_card, className)}
      {...paper_props}
    >
      <Box p={content_padding} className={classes.content}>
        <Title order={3}>{title}</Title>
        {description && (
          <Text size="lg" className={classes.description}>
            {description}
          </Text>
        )}
        {imageSrc ? (
          <Image
            className={classes.card_image}
            src={imageSrc}
            alt={imageAlt ?? ''}
            radius="md"
            {...image_props}
            mah={250}
            fit="contain"
          />
        ) : null}
      </Box>
    </Paper>
  );
}
