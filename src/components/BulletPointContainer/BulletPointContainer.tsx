import type { IconType } from 'react-icons';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Box, Flex, Text, type MantineColor } from '@mantine/core';

type BulletPointContainerProps = {
  children: React.ReactNode;
  iconColor?: MantineColor;
  icon?: IconType;
};

export function BulletPointContainer({
  children,
  iconColor = 'green',
  icon: Icon = IoMdCheckmarkCircleOutline,
}: BulletPointContainerProps) {
  return (
    <Flex gap="xs" miw={300}>
      <Box flex="0 0 auto">
        <Icon size={28} color={iconColor}></Icon>
      </Box>
      <Text fw={600}>{children}</Text>
    </Flex>
  );
}
