import { Divider, Group, Stack, Text } from '@mantine/core';
import { vehicles, VehicleType } from '@/data/vehicles';
import { CardWrapper } from '../CardWrapper/CardWrapper';

type VehicleConfiguratorProps = {
  vehicle: VehicleType;
};

export function VehicleConfigurator({ vehicle }: VehicleConfiguratorProps) {
  // const maxCargoWeightKg = Math.max(...vehicle.cargoSetups.map(setup => setup.maxWeightKg));
  const cargoSetups = vehicle.cargoSetups;

  return (
    <CardWrapper>
      <Stack gap="md">
        <Group>
          <Text>{vehicle.name}</Text>
        </Group>
        <Divider variant="dashed"></Divider>
      </Stack>
    </CardWrapper>
  );
}
