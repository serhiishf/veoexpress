export type DriverLicenseCategoryType = 'A' | 'B' | 'C' | 'D' | 'BE' | 'CE';

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

export type CargoSetupType = {
  id: string; // unique within vehicle/trailer
  nameKey: string; // label for UI, e.g. "Flatbed", "20ft ISO container", "Skip container 10 m³"
  cargoBody: CargoBodyType;
  cargoSpace?: CargoSpaceType;

  // optional if body changes tare (like Mascott flatbed vs curtainsider)
  emptyMassKg?: number;

  // optional: extra equipment only for this setup
  equipment?: readonly VehicleEquipmentType[];
  images?: {
    leftSideView: string;
    rearSideView: string;
  };

  notes?: string;
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

export type RampEquipmentType = EquipmentBaseType & {
  kind: 'ramp';
  maxLoadKg: number;
  size: {
    widthCm: number;
    lengthCm: number;
  };
  maxAngle?: number;
  rampType?: 'folding' | 'fixed' | 'removable' | 'telescopic';
};

export type VehicleEquipmentType = CraneEquipmentType | TailLiftEquipmentType | RampEquipmentType;

export type CargoSpaceType = {
  volumeM3?: number;
  heightMm?: number;
  widthMm: number;
  lengthMm: number;
};

export type MassSpecTypeBase = {
  emptyMassKg: number; // tare / curb
  maxGrossMassKg: number; // GVWR (vehicle) / trailer max authorized mass
};

export type MassSpecTypeVehicle = MassSpecTypeBase & {
  trailer?: {
    maxWeightWithBrakesKg: number;
    maxWeightWithoutBrakesKg: number;
    maxRoadTrainMassKg: number;
  };
};

export type CargoBodyKindType =
  | 'rigid_box'
  | 'box'
  | 'flatbed'
  | 'car_transporter'
  | 'curtainsider'
  | 'dropside'
  | 'tipper'
  | 'iso_container_20ft'
  | 'skip_container'
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
  licensePlate: string;
  mass: MassSpecTypeBase;
  cargoSetups: readonly CargoSetupType[];
  connectionType?: string;
  category: 'o1' | 'o2' | 'o3' | 'o4';
  equipment?: readonly VehicleEquipmentType[];
  notes?: string;
};

export type CraneToolType = {};

export type VehicleType = {
  id: string;
  name: string;
  passengers: number;
  driverLicenseCategory: DriverLicenseCategoryType;
  mass: MassSpecTypeVehicle;

  licensePlate: string;
  equipment?: readonly VehicleEquipmentType[];
  trailers?: readonly TrailerType[];
  notes?: string;

  cargoSetups: readonly CargoSetupType[];
};

export const vehicles: VehicleType[] = [
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
    cargoSetups: [
      {
        id: 'flatbed',
        nameKey: 'flatbed',
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
      },
      {
        id: 'iso_container_20ft',
        nameKey: 'iso_container_20ft',
        cargoBody: {
          kind: 'iso_container_20ft',
          loadingAccess: {
            rear: true,
            left: true,
            right: false,
            top: false,
          },
          loadingHeightMm: 1000,
        },
        cargoSpace: {
          volumeM3: 37.5,
          heightMm: 2500,
          widthMm: 2500,
          lengthMm: 6000,
        },
        emptyMassKg: 2000,
      },
      {
        id: 'skip_container',
        nameKey: 'skip_container',
        cargoBody: {
          kind: 'skip_container',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: true,
          },
          loadingHeightMm: 1000,
        },
        cargoSpace: {
          volumeM3: 15,
          heightMm: 1000,
          widthMm: 2500,
          lengthMm: 6000,
        },
        emptyMassKg: 2000,
      },
    ],

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
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'rigid_box',
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
      },
    ],

    trailers: [],
    equipment: [],
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
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'rigid_box',
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
      },
    ],

    trailers: [],
    equipment: [],
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
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
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
      },
    ],

    trailers: [],
    equipment: [],
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
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
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
      },
    ],

    trailers: [],
    equipment: [],
  },
  {
    id: 'renault_mascott_curtainsider',
    name: 'RENAULT MASCOTT',
    passengers: 2,
    driverLicenseCategory: 'C',
    licensePlate: '320MEF',
    mass: {
      emptyMassKg: 3300,
      maxGrossMassKg: 6500,
      trailer: {
        maxWeightWithBrakesKg: 3000,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 9000,
      },
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
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
      },
    ],

    trailers: [],
    equipment: [],
  },
  {
    id: 'range_rover',
    name: 'LAND ROVER, RANGE ROVER',
    passengers: 4,
    driverLicenseCategory: 'B',
    licensePlate: '422SHG',
    mass: {
      emptyMassKg: 2715,
      maxGrossMassKg: 3200,
      trailer: {
        maxWeightWithBrakesKg: 3500,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 6700,
      },
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'rigid_box',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: false,
          },
          loadingHeightMm: undefined,
        },
        cargoSpace: undefined,
      },
    ],

    trailers: [],
    equipment: [],
  },
  {
    id: 'towntruck',
    name: 'Ford Transit',
    passengers: 2,
    driverLicenseCategory: 'C',
    licensePlate: '',
    mass: {
      emptyMassKg: 2104,
      maxGrossMassKg: 5404,
      trailer: {
        maxWeightWithBrakesKg: 2096,
        maxWeightWithoutBrakesKg: 750,
        maxRoadTrainMassKg: 7500,
      },
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'car_transporter',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: true,
          },
          loadingHeightMm: undefined,
        },
        cargoSpace: {
          widthMm: 2020,
          lengthMm: 5500,
        },
      },
    ],

    trailers: [],
    equipment: [],
  },
];

const trailers: TrailerType[] = [
  {
    id: 'RESPO_750M331L150 ',
    name: 'RESPO 750',
    licensePlate: '727YLB',
    category: 'o1',

    mass: {
      emptyMassKg: 315,
      maxGrossMassKg: 750,
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'curtainsider',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: false,
          },
        },
        cargoSpace: {
          volumeM3: 8.91,
          heightMm: 1800,
          widthMm: 1500,
          lengthMm: 3300,
        },
      },
    ],

    notes: 'number 8',
  },
  {
    id: 'RESPO_452',
    name: 'RESPO 452',
    licensePlate: '438BM',
    category: 'o2',

    mass: {
      emptyMassKg: 670,
      maxGrossMassKg: 3500,
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'car_transporter',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: true,
          },
        },
        cargoSpace: {
          widthMm: 2500,
          lengthMm: 4500,
        },
      },
    ],

    notes: 'number 15',
  },
  {
    id: 'UNSINN_3500',
    name: 'UNSINN 3500',
    licensePlate: '77HPF',
    category: 'o2',

    mass: {
      emptyMassKg: 670,
      maxGrossMassKg: 3500,
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
        cargoBody: {
          kind: 'curtainsider',
          loadingAccess: {
            rear: true,
            left: false,
            right: false,
            top: false,
          },
        },
        cargoSpace: {
          widthMm: 2500,
          lengthMm: 4500,
        },
      },
    ],

    equipment: [],
    notes: 'number 7, add equipment for this trailer - tail lift',
  },
  {
    id: 'krone_zzw_18',
    name: 'KRONE ZZW 18',
    licensePlate: '539GK',
    category: 'o4',

    mass: {
      emptyMassKg: 3600,
      maxGrossMassKg: 18000,
    },
    cargoSetups: [
      {
        id: 'base',
        nameKey: 'base',
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
          widthMm: 2550,
          lengthMm: 8000,
        },
      },
    ],

    equipment: [],
    notes: 'number 2',
  },
];
