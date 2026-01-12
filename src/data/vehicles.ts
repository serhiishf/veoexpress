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
  volumeM3?: number;
  heightMm?: number;
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

export type CargoBodyType = {
  kind: CargoBodyKindType;
  loadingAccess?: {
    rear?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
  };
  loadingHeightMm?: number;
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
      loadingHeightMm: 1000,
    },
    cargoSpace: {
      widthMm: 2550,
      lengthMm: 7300,
    },
    trailers: [],
    equipment: [],
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
    cargoBody: {
      kind: 'van',
      loadingAccess: {
        rear: true,
        left: false,
        right: true,
        top: false,
      },
      loadingHeightMm: undefined,
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
    name: 'Ford Transit 300L',
    passengers: 2,
    driverLicenseCategory: 'B',
    licensePlate: '396TKZ',
    mass: {
      emptyMassKg: 1850,
      maxGrossMassKg: 3000,
      trailer: {
        maxWeightWithBrakesKg: 2000,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 4500,
      },
    },
    cargoBody: {
      kind: 'van',
      loadingAccess: {
        rear: true,
        left: false,
        right: true,
        top: false,
      },
      loadingHeightMm: undefined,
    },
    cargoSpace: {
      volumeM3: 12.54,
      heightMm: 2000,
      widthMm: 1900,
      lengthMm: 3300,
    },
    trailers: [],
  },
  {
    id: 'ford_van_grey',
    name: 'Ford Transit 300L',
    passengers: 2,
    driverLicenseCategory: 'B',
    licensePlate: '396TKZ',
    mass: {
      emptyMassKg: 1850,
      maxGrossMassKg: 3000,
      trailer: {
        maxWeightWithBrakesKg: 2000,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 4500,
      },
    },
    cargoSpace: {
      volumeM3: 12.54,
      heightMm: 2000,
      widthMm: 1900,
      lengthMm: 3300,
    },
    trailers: [],
  },
  {
    id: 'renault_mascott_box',
    name: 'RENAULT MASCOTT',
    passengers: 2,
    driverLicenseCategory: 'B',
    licensePlate: '588BPM',
    mass: {
      emptyMassKg: 3140,
      maxGrossMassKg: 5420,
      trailer: {
        maxWeightWithBrakesKg: 3500,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 7000,
      },
    },
    cargoBody: {
      kind: 'box',
      loadingAccess: {
        rear: true,
        left: false,
        right: false,
        top: false,
      },
      loadingHeightMm: undefined,
    },
    cargoSpace: {
      volumeM3: 20.812,
      heightMm: 2200,
      widthMm: 2200,
      lengthMm: 4300,
    },
    trailers: [],
  },
  {
    id: 'renault_mascott_flatbed',
    name: 'RENAULT MASCOTT',
    passengers: 2,
    driverLicenseCategory: 'C',
    licensePlate: '320MEF',
    mass: {
      emptyMassKg: 3287,
      maxGrossMassKg: 6500,
      trailer: {
        maxWeightWithBrakesKg: 3000,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 9000,
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
      loadingHeightMm: 700,
    },
    cargoSpace: {
      widthMm: 2500,
      lengthMm: 4700,
    },
    trailers: [],
  },
  {
    id: 'renault_mascott_flatbed',
    name: 'RENAULT MASCOTT',
    passengers: 2,
    driverLicenseCategory: 'C',
    licensePlate: '320MEF',
    mass: {
      emptyMassKg: 3287,
      maxGrossMassKg: 6500,
      trailer: {
        maxWeightWithBrakesKg: 3000,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 9000,
      },
    },
    cargoBody: {
      kind: 'curtainsider',
      loadingAccess: {
        rear: true,
        left: true,
        right: false,
        top: false,
      },
      loadingHeightMm: 700,
    },
    cargoSpace: {
      volumeM3: 25.85,
      heightMm: 2500,
      widthMm: 2200,
      lengthMm: 4700,
    },
    trailers: [],
  },
];
const trailers = {};
