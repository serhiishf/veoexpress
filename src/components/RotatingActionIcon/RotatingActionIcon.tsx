'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ActionIcon, Box, type ActionIconProps } from '@mantine/core';

type RotatingActionIconItem = {
  key: string;
  ariaLabel: string;
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
  iconSizePx = 22,
  ...actionIconProps
}: RotatingActionIconProps) {
  const prefers_reduced_motion = useReducedMotion();
  const [active_index, set_active_index] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval_id = window.setInterval(() => {
      set_active_index((current_index) => (current_index + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(interval_id);
  }, [intervalMs, items.length]);

  const active_item = items.length > 0 ? items[active_index] : null;
  if (!active_item) return null;

  return (
    <ActionIcon {...actionIconProps} aria-label={active_item.ariaLabel}>
      <Box style={{ width: iconSizePx, height: iconSizePx, display: 'grid', placeItems: 'center' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active_item.key}
            initial={
              prefers_reduced_motion ? { opacity: 1 } : { opacity: 0, rotate: -90, scale: 0.85 }
            }
            animate={prefers_reduced_motion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={prefers_reduced_motion ? { opacity: 1 } : { opacity: 0, rotate: 90, scale: 0.85 }}
            transition={
              prefers_reduced_motion ? { duration: 0 } : { duration: 0.35, ease: 'easeInOut' }
            }
            style={{ display: 'grid', placeItems: 'center' }}
          >
            {active_item.content}
          </motion.div>
        </AnimatePresence>
      </Box>
    </ActionIcon>
  );
}
