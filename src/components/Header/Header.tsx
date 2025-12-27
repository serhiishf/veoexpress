'use client';

import { useEffect, type ComponentType } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconChevronDown,
  IconCrane,
  IconRoad,
  IconShieldCheck,
  IconTrash,
  IconTruck,
  IconTruckDelivery,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { FaTruckMoving } from 'react-icons/fa';
import { GiHandTruck, GiTowTruck } from 'react-icons/gi';
import { TbCarCrane, TbRecycle, TbAlertHexagon } from 'react-icons/tb';
import {
  Anchor,
  Box,
  Burger,
  Center,
  Collapse,
  Container,
  Drawer,
  Flex,
  Group,
  HoverCard,
  Menu,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { routes } from '@/constants/routes';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { VeoexpressLogo } from '../VeoexpressLogo/VeoexpressLogo';
import classes from './Header.module.css';

const headerHeightPx = 84;

const locales: readonly string[] = ['en', 'et', 'ru'];

function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  const firstPart = parts[0];

  if (firstPart && locales.includes(firstPart)) {
    const rest = parts.slice(1).join('/');
    return `/${rest}`.replace(/\/$/, '') || '/';
  }

  return pathname.replace(/\/$/, '') || '/';
}

function isActiveLink(currentPath: string, linkHref: string): boolean {
  const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
  const normalizedHref = linkHref.replace(/\/$/, '') || '/';

  if (normalizedCurrent === normalizedHref) return true;
  if (normalizedHref !== '/' && normalizedCurrent.startsWith(`${normalizedHref}/`)) return true;

  return false;
}

type TablerIconComponent = ComponentType<{ size?: number }>;

type ChildLink = {
  link: string;
  label: string;
  icon?: TablerIconComponent;
};

type HeaderLink = {
  link: string;
  label: string;
  links?: readonly ChildLink[];
};

export function Header() {
  const t = useTranslations('components.header');
  const pathname = usePathname();
  const currentPath = stripLocalePrefix(pathname);

  const links: readonly HeaderLink[] = [
    { link: '/', label: t('home') },
    {
      link: '/services',
      label: t('services'),
      links: [
        { link: routes.services.moving, label: t('moving'), icon: GiHandTruck },
        { link: routes.services.wasteRemoval, label: t('waste_removal'), icon: TbRecycle },
        {
          link: routes.services.heavyTransport,
          label: t('heavy_transport'),
          icon: FaTruckMoving,
        },
        { link: routes.services.adrTransport, label: t('adr_transport'), icon: TbAlertHexagon },
        { link: routes.services.craneService, label: t('crane_loading_work'), icon: TbCarCrane },
        { link: routes.services.towing, label: t('towing'), icon: GiTowTruck },
      ],
    },
    // { link: '/vehicles', label: t('vehicles') },
    { link: '/about', label: t('about') },
    { link: '/contact', label: t('contact') },
  ];

  const [drawerOpened, drawerActions] = useDisclosure(false);
  const [mobileServicesOpened, mobileServicesActions] = useDisclosure(false);

  const [desktopServicesOpened, desktopServicesActions] = useDisclosure(false);

  function handleDesktopServicesChange(opened: boolean) {
    if (opened) {
      desktopServicesActions.open();
    } else {
      desktopServicesActions.close();
    }
  }

  function closeAll() {
    drawerActions.close();
    mobileServicesActions.close();
    desktopServicesActions.close();
  }

  useEffect(() => {
    closeAll();
  }, [currentPath]);

  function isGroupActive(group: HeaderLink): boolean {
    if (isActiveLink(currentPath, group.link)) return true;
    const children = group.links ?? [];
    return children.some((child) => isActiveLink(currentPath, child.link));
  }

  function renderChildLink(child: ChildLink) {
    const IconComponent = child.icon;

    return (
      <UnstyledButton
        key={child.link}
        component={Link}
        href={child.link}
        onClick={closeAll}
        px="sm"
        py={10}
        className={classes.child_link}
      >
        <Group wrap="nowrap" align="center" gap="sm">
          {IconComponent ? (
            <ThemeIcon size={34} variant="default" radius="md">
              <IconComponent size={20} />
            </ThemeIcon>
          ) : null}

          <Text size="sm" fw={500} lh={1}>
            {child.label}
          </Text>
        </Group>
      </UnstyledButton>
    );
  }

  const desktopItems = links.map((linkItem) => {
    if (!linkItem.links) {
      const active = isActiveLink(currentPath, linkItem.link);
      return (
        <Anchor
          key={linkItem.label}
          component={Link}
          href={linkItem.link}
          className={classes.main_link}
          data-active={active || undefined}
          onClick={closeAll}
        >
          {linkItem.label}
        </Anchor>
      );
    }

    const active = isGroupActive(linkItem);

    return (
      <Menu
        key={linkItem.label}
        width={520}
        position="bottom"
        radius="md"
        shadow="md"
        withinPortal
        trigger="click"
        opened={desktopServicesOpened}
        onChange={handleDesktopServicesChange}
      >
        <Menu.Target>
          <UnstyledButton
            type="button"
            className={classes.main_link}
            data-active={active || undefined}
            aria-haspopup="menu"
            aria-expanded={desktopServicesOpened}
          >
            <Center inline>
              <Box component="span" mr={6}>
                {linkItem.label}
              </Box>
              <IconChevronDown size={16} />
            </Center>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown style={{ overflow: 'hidden' }}>
          <SimpleGrid cols={2} spacing={0} p="xs">
            {linkItem.links.map(renderChildLink)}
          </SimpleGrid>
        </Menu.Dropdown>
      </Menu>
    );
  });

  const mobileItems = links.map((linkItem) => {
    if (!linkItem.links) {
      const active = isActiveLink(currentPath, linkItem.link);
      return (
        <Anchor
          key={linkItem.label}
          component={Link}
          href={linkItem.link}
          className={classes.main_link}
          data-active={active || undefined}
          onClick={closeAll}
          // style={{ width: '100%' }}
        >
          {linkItem.label}
        </Anchor>
      );
    }

    const active = isGroupActive(linkItem);

    return (
      <Box key={linkItem.label} w="100%">
        <UnstyledButton
          type="button"
          className={classes.main_link}
          data-active={active || undefined}
          onClick={mobileServicesActions.toggle}
        >
          <Center inline>
            <Box component="span" mr={6}>
              {linkItem.label}
            </Box>
            <IconChevronDown
              size={16}
              style={{
                transform: mobileServicesOpened ? 'rotate(180deg)' : undefined,
                transition: 'transform 150ms ease',
              }}
            />
          </Center>
        </UnstyledButton>

        <Collapse in={mobileServicesOpened}>
          <Stack gap={0} align="flex-start" style={{ paddingInlineStart: 10, paddingBlock: 6 }}>
            {linkItem.links.map(renderChildLink)}
          </Stack>
        </Collapse>
      </Box>
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
                  {desktopItems}
                </Group>
              </Box>

              <Group visibleFrom="md">
                <RequestQuoteButton size="md" />
                <LanguageSelector />
              </Group>
            </Flex>

            <Burger
              opened={drawerOpened}
              onClick={drawerActions.toggle}
              className={classes.burger}
              size="sm"
              hiddenFrom="md"
              aria-label={drawerOpened ? 'Close menu' : 'Open menu'}
            />
          </Flex>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeAll}
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
            minHeight: headerHeightPx,
            paddingInline: 16,
            borderBottom: '1px solid var(--mantine-color-gray-3)',
          },
          title: { display: 'flex', alignItems: 'center', height: '100%' },
          close: { marginInlineEnd: 4 },
          body: { padding: 0, minHeight: `calc(100dvh - ${headerHeightPx}px)` },
        }}
      >
        <ScrollArea mih={`calc(100dvh - ${headerHeightPx}px)`}>
          <Box className={classes.mobile_menu}>
            <Group
              gap="xs"
              className={classes.mobile_links}
              style={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              {mobileItems}
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
