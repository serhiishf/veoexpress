import { useTranslations } from 'next-intl';
import { Box, Button, Divider, Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import classes from './RequestDetailsCard.module.css';

export function RequestDetailsCard() {
  const t = useTranslations('components.request_details_card');

  const items: readonly string[] = [
    t('items.pickup_dropoff_addresses'),
    t('items.moved_removed'),
    t('items.stairs_elevator'),
    t('items.time_preference'),
    t('items.photos'),
  ];

  return (
    <CardWrapper>
      <Flex gap={28} align="center" justify="space-between" wrap={{ base: 'wrap', md: 'nowrap' }}>
        <Stack gap={12} style={{ flex: '1 1 560px', minWidth: 0 }}>
          <Title order={2}>{t('title')}</Title>
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

        <Stack gap={10} w={{ base: '100%', md: 'auto' }} align="center" justify="center">
          <Button radius={18} size="lg" px={28} w={{ base: '100%', sm: 'auto' }}>
            {t('get_pricing_button')}
          </Button>

          <Text size="md" ta="center" className={classes.button_description} style={{}}>
            {t('description')}
          </Text>
        </Stack>
      </Flex>
    </CardWrapper>
  );
}
