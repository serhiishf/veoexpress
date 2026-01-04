import { Container, Divider, Text } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';

type VehicleProps = {

};

type TrailerProps = {
  name: string;
  maxLoadKg: number;
  volumeM3: number;
};

type VehicleConfiguratorProps = {
  vehicle: string;
  trailers: string;
};

export function VehicleConfigurator() {
  return (
    <CardWrapper>
      <Text>VEHICLE</Text>
      <Divider variant="dashed"></Divider>
    </CardWrapper>
  );
}
