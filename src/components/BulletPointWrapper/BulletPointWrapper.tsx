import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Box, Flex, Text, type MantineColor } from '@mantine/core';

type BulletPointWrapperProps = {
  children: React.ReactNode;
  iconColor?: MantineColor;
};

export function BulletPointWrapper({ children, iconColor = 'green' }: BulletPointWrapperProps) {
  return (
    <Flex gap="xs" miw={300}>
      <Box flex="0 0 auto">
        <IoMdCheckmarkCircleOutline size={28} color={iconColor}></IoMdCheckmarkCircleOutline>
      </Box>
      <Text fw={600}>{children}</Text>
    </Flex>
  );
}
