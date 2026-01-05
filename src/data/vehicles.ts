export type DriverLicenseCategoryType = 'A' | 'B' | 'C' | 'D';

type EquipmentBaseType = {
  id: string; // unique within vehicle
  name: string; // marketing label, e.g. "Hiab crane", "Dhollandia tail lift"
};

export type CraneEquipmentType = EquipmentBaseType & {
  kind: 'crane';
  maxLiftKg: number; // usually rated at minimal reach
  maxReachM: number;
  maxHookHeightM?: number;
  rotationDegrees?: number; // e.g. 360
  stabilizers?: {
    kind: 'outriggers' | 'none';
    spanM?: number;
  };
};

export type TailLiftEquipmentType = EquipmentBaseType & {
  kind: 'tail_lift'; // “lift in car” / “liftgate”
  maxLiftKg: number;
  platform: {
    widthCm: number;
    depthCm: number;
  };
  liftType?: 'tuckaway' | 'column' | 'slider';
};

export type CargoSpaceType = {
  volumeM3: number;
  heightMm: number;
  widthMm: number;
  lengthMm: number;
};

export type MassSpecType = {
  emptyMassKg: number; // tare / curb
  maxGrossMassKg: number; // GVWR (vehicle) / trailer max authorized mass
  trailer?: {
    maxWeightWithBrakesKg: number;
    maxWeightWithoutBrakesKg: number;
    maxRoadTrainMassKg: number;
  };
};

export type CargoBodyKindType =
  | 'van' // фургон / van (Transit, Sprinter…)
  | 'box' // будка / box body
  | 'flatbed' // платформа
  | 'curtainsider' // штора
  | 'dropside' // бортова / dropside
  | 'tipper' // самоскид
  | 'container'
  | 'other';

export type CargoBodyMaterialType =
  | 'steel'
  | 'aluminium'
  | 'wood'
  | 'composite'
  | 'tarpaulin' // тент
  | 'other';

export type CargoBodyType = {
  kind: CargoBodyKindType;
  material?: CargoBodyMaterialType;
  loadingAccess?: {
    rear?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
  };
  notes?: string; // free text for odd cases
};

export type TrailerType = {
  id: string;
  name: string;
  mass: MassSpecType;
  cargoSpace: CargoSpaceType;
};

export type CraneToolType = {};

export type VehicleType = {
  id: string;
  name: string;
  passengers: number;
  driverLicenseCategory: DriverLicenseCategoryType;
  mass: MassSpecType;
  cargoBody?: CargoBodyType;
  cargoSpace?: CargoSpaceType;
  trailers?: readonly TrailerType[];
  licensePlate: string;
};

const vehicles: VehicleType[] = [
  {
    id: 'volvo_truck_red_with_crane',
    name: 'Volvo FM7',
    passengers: 1,
    driverLicenseCategory: 'C',
    licensePlate: '804BVX',
    mass: {
      emptyMassKg: 13700,
      maxGrossMassKg: 26000,
      trailer: {
        maxWeightWithBrakesKg: 30300,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 44000,
      },
    },
    cargoBody: {
      kind: 'flatbed',
      loadingAccess: {
        rear: true,
        left: true,
        right: true,
        top: true,
      },
    },
    cargoSpace: {
      volumeM3: 18.615,
      heightMm: 1000,
      widthMm: 2550,
      lengthMm: 7300,
    },
    trailers: [],
  },
  {
    id: 'ford_van_red',
    name: 'Ford Transit',
    passengers: 2,
    driverLicenseCategory: 'B',
    licensePlate: '729DTJ',
    mass: {
      emptyMassKg: 2104,
      maxGrossMassKg: 3500,
      trailer: {
        maxWeightWithBrakesKg: 2800,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 5500,
      },
    },
    cargoSpace: {
      volumeM3: 11.286,
      heightMm: 1800,
      widthMm: 1900,
      lengthMm: 3300,
    },
    trailers: [],
  },
  {
    id: 'ford_van_grey',
    name: 'Ford Transit',
    passengers: 2,
    driverLicenseCategory: 'B',
    licensePlate: '',
    mass: {
      emptyMassKg: 2104,
      maxGrossMassKg: 3500,
      trailer: {
        maxWeightWithBrakesKg: 2800,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 5500,
      },
    },
    cargoSpace: {
      volumeM3: 11.286,
      heightMm: 1800,
      widthMm: 1900,
      lengthMm: 3300,
    },
    trailers: [],
  },
];
const trailers = {};
