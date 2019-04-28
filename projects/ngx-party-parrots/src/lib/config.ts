import { parrotsData } from './parrots/parrots';

const defaultModeConfig = {
  parrotsData,
  speed: {
    min: 1,
    max: 5
  },
  parrotsAmount: 30,
  skiingMode: true,
  slalomLength: {
    min: 15,
    max: 30
  },
  opacity: 1
};

export const config = {
    modes: {
      default: defaultModeConfig,
      skiing: {
        ...defaultModeConfig,
        parrotsData: parrotsData.filter(parrot => parrot.name === 'skiing'),
        speed: {
          min: 1,
          max: 5
        },
        parrotsAmount: 50,
        skiingMode: true,
        slalomLength: {
          min: 2,
          max: 30
        }
      },
      snowing: {
        ...defaultModeConfig,
        parrotsAmount: 50,
        skiingMode: false,
        speed: {
          min: 1,
          max: 15
        },
        parrotsData: parrotsData.filter(parrot => parrot.name === 'rotating'),
      },
      copsAndSpies: {
        ...defaultModeConfig,
        parrotsAmount: 20,
        speed: {
          min: 4,
          max: 15
        },
        parrotsData: parrotsData.filter(parrot => parrot.name === 'cop' || parrot.name === 'spy' ),
      }
    }
  }
;
