import { Group, Stack, Text, Title, Button, Image, SimpleGrid } from '@mantine/core';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

import classes from './HomeHero.module.css';

export function HomeHero() {
  return (
    <SectionWrapper background="grey">
      <SimpleGrid className={classes.home_hero} cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 48 }} verticalSpacing="sm">
        <Stack className={classes.left_side} gap="xl">
          <SectionHeader title="Moving and logistics with a strong crew." subtitle="FAST TRANSPORT"></SectionHeader>
          <SectionDescription>
            We handle apartments, offices and sites: careful moving, waste removal, heavy cargo, ADR dangerous goods, and crane-assisted loading.
          </SectionDescription>
          <Text className={classes.description}></Text>
          <Group>
            <Button size="lg">Request free quote</Button>
            <Button size="lg" variant="outline" bg="white">
              View services
            </Button>
          </Group>
          <Stack className={classes.additional_info}>
            <Title size="lg">Same-day options</Title>
            <Text>Need it today? We often can handle jobs the same day in Tallinn & Harjumaa — and across Estonia when possible.</Text>
          </Stack>
        </Stack>
        <Stack className={classes.right_side} justify="center">
          <Image src="/three_vehicles.webp"></Image>
        </Stack>
      </SimpleGrid>
    </SectionWrapper>
  );
}
