import { useTranslations } from 'next-intl';
import { TbPhoneCall } from 'react-icons/tb';
import { Affix, Image, Menu, MenuDropdown, MenuItem, MenuTarget, Text } from '@mantine/core';
import { company } from '@/constants/company';
import { RotatingActionIcon } from '../RotatingActionIcon/RotatingActionIcon';

const ICON_SIZE_PX = 50;

export function MessengersMenu() {
  const t = useTranslations('components.messengers_menu');

  const data = [
    {
      key: 'phone',
      ariaLabel: 'Phone',
      icon: <TbPhoneCall />,
      label: 'Call to phone',
      href: `tel:${company.contact.phoneTel}`,
    },
    {
      key: 'viber',
      ariaLabel: 'Viber',
      icon: <Image src="/logos/viber_logo.svg" alt="viber logo" fit="contain" />,
      label: 'Viber Chat',
      href: `viber://chat?number=%2B${company.contact.phoneE164Digits}`,
    },
    {
      key: 'whatsapp',
      ariaLabel: 'WhatsApp',
      icon: <Image src="/logos/whatsapp_logo.svg" alt="whatsapp logo" fit="contain" />,
      label: 'WhatsApp Chat',
      href: `https://wa.me/${company.contact.phoneE164Digits}`,
    },
    {
      key: 'telegram',
      ariaLabel: 'Telegram',
      icon: <Image src="/logos/telegram_logo.svg" alt="telegram logo" fit="contain" />,
      label: 'Telegram Chat',
      href: `https://t.me/${company.contact.phoneE164Digits}`,
    },
  ];

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Menu shadow="md" width={200}>
        <MenuTarget>
          <RotatingActionIcon
            variant="white"
            iconSizePx={ICON_SIZE_PX}
            size={ICON_SIZE_PX + 25}
            items={[
              {
                key: 'phone',
                ariaLabel: t('items.phone.aria_label'),
                content: <TbPhoneCall size={ICON_SIZE_PX - 10} />,
              },
              {
                key: 'viber',
                ariaLabel: t('items.viber.aria_label'),
                content: (
                  <Image
                    src="/logos/viber_logo.svg"
                    w={ICON_SIZE_PX}
                    h={ICON_SIZE_PX}
                    fit="contain"
                  />
                ),
              },
              {
                key: 'whatsapp',
                ariaLabel: t('items.whatsapp.aria_label'),
                content: (
                  <Image
                    src="/logos/whatsapp_logo.svg"
                    w={ICON_SIZE_PX}
                    h={ICON_SIZE_PX}
                    fit="contain"
                  />
                ),
              },
              {
                key: 'telegram',
                ariaLabel: t('items.telegram.aria_label'),
                content: (
                  <Image
                    src="/logos/telegram_logo.svg"
                    w={ICON_SIZE_PX}
                    h={ICON_SIZE_PX}
                    fit="contain"
                  />
                ),
              },
            ]}
          ></RotatingActionIcon>
        </MenuTarget>

        <MenuDropdown>
          <MenuItem
            component="a"
            href={`tel:${company.contact.phoneTel}`}
            leftSection={<TbPhoneCall size={20} />}
          >
            <Text size="lg">{t('items.phone.label')}</Text>
          </MenuItem>
          <MenuItem
            component="a"
            href={`viber://chat?number=%2B${company.contact.phoneE164Digits}`}
            leftSection={
              <Image src="/logos/viber_logo.svg" alt="viber logo" w={20} h={20} fit="contain" />
            }
          >
            <Text size="lg">{t('items.viber.label')}</Text>
          </MenuItem>
          <MenuItem
            component="a"
            href={`https://wa.me/${company.contact.phoneE164Digits}`}
            leftSection={
              <Image
                src="/logos/whatsapp_logo.svg"
                alt="whatsapp logo"
                w={20}
                h={20}
                fit="contain"
              />
            }
          >
            <Text size="lg">{t('items.whatsapp.label')}</Text>
          </MenuItem>
          <MenuItem
            component="a"
            href={`https://t.me/${company.contact.telegramUsername}`}
            leftSection={
              <Image
                src="/logos/telegram_logo.svg"
                alt="telegram logo"
                w={20}
                h={20}
                fit="contain"
              />
            }
          >
            <Text size="lg">{t('items.telegram.label')}</Text>
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Affix>
  );
}
