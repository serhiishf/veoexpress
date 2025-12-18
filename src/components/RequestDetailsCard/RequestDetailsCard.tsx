import { Box, Button, Flex, Group, Paper, SimpleGrid, Stack, Text, Title, Divider } from '@mantine/core';

import classes from './RequestDetailsCard.module.css';

const items: readonly string[] = ['Pickup and drop-off addresses', 'What’s being moved/removed', 'Any stairs/elevator', 'Time preference', 'Photos'];

export function RequestDetailsCard() {
  return (
    <Paper radius={28} p={28} className={classes.card}>
      <Flex gap={28} align="center" justify="space-between" wrap="wrap">
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
                  }}
                />
                <Text size="lg">{item}</Text>
              </Group>
            ))}
          </SimpleGrid>
        </Stack>

        <Divider orientation="vertical" visibleFrom="sm"></Divider>

        <Stack gap={10} style={{ flex: '0 0 auto', minWidth: 260 }} align="center">
          <Button radius={18} size="lg" px={28} w={{ base: '100%', sm: 'auto' }}>
            Get pricing
          </Button>

          <Text size="md" ta="center" className={classes.button_description} style={{}}>
            We confirm everything before start
          </Text>
        </Stack>
      </Flex>
    </Paper>
  );
}
