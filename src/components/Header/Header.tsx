'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Anchor,
  Box,
  Burger,
  Center,
  Container,
  Drawer,
  Flex,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';
import classes from './Header.module.css';

const HEADER_HEIGHT_PX = 84;

const LOCALES: readonly string[] = ['en', 'et', 'ru'];

function strip_locale_prefix(pathname: string): string {
  // "/et/contact" -> "/contact"
  // "/contact" -> "/contact"
  // "/" -> "/"
  const parts = pathname.split('/').filter(Boolean);
  const first_part = parts[0];

  if (first_part && LOCALES.includes(first_part)) {
    const rest = parts.slice(1).join('/');
    return `/${rest}`.replace(/\/$/, '') || '/';
  }

  return pathname.replace(/\/$/, '') || '/';
}

function is_active_link(current_path: string, link_href: string): boolean {
  const normalized_current = current_path.replace(/\/$/, '') || '/';
  const normalized_href = link_href.replace(/\/$/, '') || '/';

  // exact match
  if (normalized_current === normalized_href) return true;

  // highlight parents for nested routes:
  // "/contact/team" should highlight "/contact"
  if (normalized_href !== '/' && normalized_current.startsWith(`${normalized_href}/`)) return true;

  return false;
}

export function Header() {
  const t = useTranslations('components.header');
  const pathname = usePathname();
  const current_path = strip_locale_prefix(pathname);

  const main_links = [
    { link: '/', label: t('home') },
    { link: '#', label: t('services') },
    { link: '#', label: t('vehicles') },
    { link: '#', label: t('about') },
    { link: '/contact', label: t('contact') },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);

  const main_items = main_links.map((item) => {
    const active = item.link.startsWith('/') ? is_active_link(current_path, item.link) : false; // for "#" items you probably want scroll-spy, not pathname

    return (
      <Anchor
        key={item.label}
        component={Link}
        href={item.link}
        className={classes.main_link}
        data-active={active || undefined}
        onClick={() => {
          close();
        }}
      >
        {item.label}
      </Anchor>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <Container size="xl">
          <Flex align="center" justify="space-between">
            <Box>
              <VeoexpressLogo />
            </Box>
            <Flex
              wrap="wrap"
              justify="space-around"
              align="center"
              gap="md"
              style={{ flex: 1, minWidth: 0 }}
            >
              <Box className={classes.links} visibleFrom="md">
                <Group gap={0} className={classes.main_links} wrap="wrap">
                  {main_items}
                </Group>
              </Box>

              <Group visibleFrom="md">
                <RequestQuoteButton size="md" />
                <LanguageSelector />
              </Group>
            </Flex>

            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
              hiddenFrom="md"
              aria-label={opened ? 'Close menu' : 'Open menu'}
            />
          </Flex>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        size="100%"
        withinPortal
        lockScroll
        overlayProps={{ opacity: 0.55, blur: 2 }}
        withCloseButton
        title={<VeoexpressLogo size="xl" />}
        styles={{
          content: { borderRadius: 0 },
          header: {
            minHeight: HEADER_HEIGHT_PX,
            paddingInline: 16,
            borderBottom: '1px solid var(--mantine-color-gray-3)',
          },
          title: { display: 'flex', alignItems: 'center', height: '100%' },
          close: { marginInlineEnd: 4 },
          body: { padding: 0, minHeight: `calc(100dvh - ${HEADER_HEIGHT_PX}px)` },
        }}
      >
        <ScrollArea mih={`calc(100dvh - ${HEADER_HEIGHT_PX}px)`}>
          <Box className={classes.mobile_menu}>
            <Group gap="xs" className={classes.mobile_links}>
              {main_items}
            </Group>

            <div className={classes.mobile_cta}>
              <RequestQuoteButton fullWidth />
            </div>

            <Center>
              <LanguageSelector />
            </Center>
          </Box>
        </ScrollArea>
      </Drawer>
    </>
  );
}
