import { Box, Button, Flex, Group, Paper, SimpleGrid, Stack, Text, Title, Divider } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

import classes from './RequestDetailsCard.module.css';

const items: readonly string[] = [
  'Pickup and drop-off addresses',
  'What’s being moved/removed',
  'Any stairs/elevator',
  'Time preference',
  'Photos',
];

export function RequestDetailsCard() {
  return (
    <CardWrapper >
      <Flex gap={28} align="center" justify="space-between" wrap={{ base: 'wrap', md: 'nowrap' }}>
        <Stack gap={12} style={{ flex: '1 1 560px', minWidth: 0 }}>
          <Title order={2}>Typical request details</Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={12} verticalSpacing={12}>
            {items.map((item) => (
              <Group key={item} gap={12} align="center" wrap="nowrap">
                <Box
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: '#9CA3AF',
                    flexShrink: 0,
                  }}
                />
                <Text size="lg">{item}</Text>
              </Group>
            ))}
          </SimpleGrid>
        </Stack>

        <Divider hiddenFrom="md" w="100%" />

        <Divider orientation="vertical" visibleFrom="md" />

        <Stack
          gap={10}
          w={{ base: '100%', md: 'auto' }} 
          align="center"
          justify="center"
        >
          <Button radius={18} size="lg" px={28} w={{ base: '100%', sm: 'auto' }}>
            Get Pricing
          </Button>

          <Text size="md" ta="center" className={classes.button_description} style={{}}>
            We confirm everything before start
          </Text>
        </Stack>
      </Flex>
    </CardWrapper>
  );
}
