'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Anchor, Box, Burger, Center, Container, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';
import classes from './Header.module.css';

const HEADER_HEIGHT_PX = 84;

export function Header() {
  const t = useTranslations('components.header');

  const main_links = [
    { link: '/', label: t('home') },
    { link: '#', label: t('services') },
    { link: '#', label: t('vehicles') },
    { link: '#', label: t('about') },
    { link: '#', label: t('contact') },
  ];

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

  //TODO: fix response to page size

  return (
    <>
      <header className={classes.header}>
        <Container className={classes.inner} size="xl">
          <VeoexpressLogo />

          <Box className={classes.links} visibleFrom="md">
            <Group gap={0} justify="flex-end" className={classes.main_links} wrap="wrap">
              {mainItems}
            </Group>
          </Box>

          <Group visibleFrom="md">
            <RequestQuoteButton size="md"></RequestQuoteButton>
            <LanguageSelector></LanguageSelector>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="md"
            aria-label={opened ? 'Close menu' : 'Open menu'}
          />
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        size="100%" // full-screen width (NOT 100dvh)
        withinPortal
        lockScroll
        overlayProps={{ opacity: 0.55, blur: 2 }}
        withCloseButton
        title={<VeoexpressLogo size="xl" />}
        styles={{
          content: { borderRadius: 0 },
          header: {
            minHeight: HEADER_HEIGHT_PX,
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
            minHeight: `calc(100dvh - ${HEADER_HEIGHT_PX}px)`,
          },
        }}
      >
        <ScrollArea mih={`calc(100dvh - ${HEADER_HEIGHT_PX}px)`}>
          <Box className={classes.mobile_menu}>
            <Group gap="xs" className={classes.mobile_links}>
              {mainItems}
            </Group>

            <div className={classes.mobile_cta}>
              <RequestQuoteButton fullWidth></RequestQuoteButton>
            </div>

            <Center>
              <LanguageSelector></LanguageSelector>
            </Center>
          </Box>
        </ScrollArea>
      </Drawer>
    </>
  );
}
