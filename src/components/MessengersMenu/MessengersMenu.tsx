import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Affix,
  Button,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
} from '@mantine/core';

export function MessengersMenu() {
  return (
    <Affix position={{ bottom: 50, right: 50 }}>
      <Menu shadow="md" width={200}>
        <MenuTarget>
          <ActionIcon
            size="xl"
            variant="white"
            radius={50}
          ></ActionIcon>
        </MenuTarget>

        <MenuDropdown>
          <MenuLabel>Application</MenuLabel>
          <MenuItem leftSection={<IconSettings size={14} />}>Settings</MenuItem>
          <MenuItem leftSection={<IconMessageCircle size={14} />}>Messages</MenuItem>
          <MenuItem leftSection={<IconPhoto size={14} />}>Gallery</MenuItem>
          <MenuItem
            leftSection={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Affix>
  );
}
