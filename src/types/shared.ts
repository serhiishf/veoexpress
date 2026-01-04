export type SectionProps = {
  background?: 'grey' | 'white';
};

export type DriverLicenseCategoryType = 'A' | 'B' | 'C' | 'D';

export type CargoSpaceType = {
  volumeM3: number;
  heightCm: number;
  widthCm: number;
  lengthCm: number;
};

export type MassSpecType = {
  emptyMassKg: number; // tare / curb
  maxGrossMassKg: number; // GVWR (vehicle) / trailer max authorized mass
};

export type TrailerType = {
  name: string;
  mass: MassSpecType;
  cargoSpace: CargoSpaceType;
};

export type VehicleType = {
  name: string;
  passengers: number;
  driverLicenseCategory: 'B' | 'C';
  mass: MassSpecType;
  cargoSpace: CargoSpaceType;
  trailers: readonly TrailerType[];
};
