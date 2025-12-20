'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { CgChevronDown } from 'react-icons/cg';
import { Group, Menu, UnstyledButton } from '@mantine/core';
import { usePathname, useRouter } from '@/i18n/navigation';
import classes from './LanguageSelector.module.css';

type LanguageOptionType = {
  value: string;
  label: string;
};

const languageOptions = [
  { value: 'et', label: 'Eesti' },
  { value: 'en', label: 'English' },
  // { value: 'uk', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
];

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const initialOption = languageOptions.find((o) => o.value === locale) ?? languageOptions[0];

  const [selected, setSelected] = useState<LanguageOptionType>(initialOption);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option: LanguageOptionType) {
    if (option.value === selected.value) return;
    setSelected(option);
    router.replace(pathname, { locale: option.value });
    router.refresh();
  }

  return (
    <Menu onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={isOpen || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <CgChevronDown size={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {languageOptions.map((option) => (
          <Menu.Item key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
