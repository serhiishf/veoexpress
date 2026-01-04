'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ActionIcon, Box, type ActionIconProps } from '@mantine/core';

type RotatingActionIconItem = {
  key?: string;
  ariaLabel?: string;
  content: ReactNode;
};

type RotatingActionIconProps = Omit<ActionIconProps, 'children' | 'aria-label'> & {
  items: readonly RotatingActionIconItem[];
  intervalMs?: number;
  iconSizePx?: number;
};

export function RotatingActionIcon({
  items,
  intervalMs = 3000,
  iconSizePx = 40,
  ...actionIconProps
}: RotatingActionIconProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, items.length]);

  const activeItem = items.length > 0 ? items[activeIndex] : null;
  if (!activeItem) return null;

  return (
    <ActionIcon size="xl" aria-label={activeItem.ariaLabel} radius={50} {...actionIconProps}>
      <Box style={{ width: iconSizePx, height: iconSizePx, display: 'grid', placeItems: 'center' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.key}
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -90, scale: 0.85 }
            }
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: 90, scale: 0.85 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: 'easeInOut' }
            }
            style={{ display: 'grid', placeItems: 'center' }}
          >
            {activeItem.content}
          </motion.div>
        </AnimatePresence>
      </Box>
    </ActionIcon>
  );
}
