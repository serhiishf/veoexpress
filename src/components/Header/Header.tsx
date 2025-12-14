'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Anchor, Box, Burger, Button, Container, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';

const main_links = [
  { link: '/', label: 'Home' },
  { link: '#', label: 'Services' },
  { link: '#', label: 'Pricing' },
  { link: '#', label: 'About' },
  { link: '#', label: 'Contact' },
];

const HEADER_HEIGHT_PX = 84;

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = main_links.map((item, index) => (
    <Anchor
      key={item.label}
      component={Link}
      href={item.link}
      className={classes.main_link}
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
        close();
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container className={classes.inner}>
          <VeoexpressLogo />

          <Box className={classes.links} visibleFrom="sm">
            <Group gap={0} justify="flex-end" className={classes.main_links}>
              {mainItems}
            </Group>
          </Box>

          <Button size="md" visibleFrom="sm">
            Request free quote
          </Button>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" hiddenFrom="sm" aria-label={opened ? 'Close menu' : 'Open menu'} />
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        size="100%" // full-screen width (NOT 100dvh)
        withinPortal
        lockScroll
        zIndex={2000}
        overlayProps={{ opacity: 0.55, blur: 2 }}
        withCloseButton
        title={<VeoexpressLogo size="xl" />}
        styles={{
          content: { borderRadius: 0 },
          header: {
            height: HEADER_HEIGHT_PX,
            paddingInline: 16, // gives space on both sides (incl. close button)
            borderBottom: '1px solid var(--mantine-color-gray-3)',
          },
          title: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          },
          close: {
            marginInlineEnd: 4, // extra breathing room from the edge
          },
          body: {
            padding: 0,
            height: `calc(100dvh - ${HEADER_HEIGHT_PX}px)`,
          },
        }}
      >
        <ScrollArea h={`calc(100dvh - ${HEADER_HEIGHT_PX}px)`}>
          <Box className={classes.mobile_menu}>
            <Group gap="xs" className={classes.mobile_links}>
              {mainItems}
            </Group>

            <div className={classes.mobile_cta}>
              <Button fullWidth size="md">
                Request free quote
              </Button>
            </div>
          </Box>
        </ScrollArea>
      </Drawer>
    </>
  );
}
