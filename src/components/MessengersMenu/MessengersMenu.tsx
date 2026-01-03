import { IconMessageCircle, IconPhoto, IconSearch, IconSettings } from '@tabler/icons-react';
import {
  ActionIcon,
  Affix,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
} from '@mantine/core';
import { RotatingActionIcon } from '../RotatingActionIcon/RotatingActionIcon';

export function MessengersMenu() {
  return (
    <Affix position={{ bottom: 120, right: 50 }}>
      <Menu shadow="md" width={200}>
        <MenuTarget>
          {/* <ActionIcon
            size="xl"
            // variant="white"
            variant="outline"
            radius={50}
          >
            AI
          </ActionIcon> */}
          <RotatingActionIcon items={[{key: "23", ariaLabel: 'something', content: '23'}, {key: "35", ariaLabel: 'something', content: '35'}]}></RotatingActionIcon>
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
