import { parrotsData } from './parrots/parrots';

const defaultModeConfig = {
  parrotsData: parrotsData.filter(parrot => parrot.name !== 'skiing'),
  speed: {
    min: 1,
    max: 5
  },
  parrotsAmount: 100,
  skiingMode: 'yes',
  slalomLength: {
    min: 15,
    max: 30
  },
  opacity: 1
};

export const config = {
    modes: {
      default: defaultModeConfig,
      one: {
        ...defaultModeConfig,
        parrotsAmount: 1
      },
      love: {
        ...defaultModeConfig,
        parrotsData: parrotsData.filter(parrot => parrot.name === 'parrot'),
        parrotsAmount: 1000,
        skiingMode: 'no',
        speed: {
          min: 3,
          max: 10
        },
      },
      skiing: {
        ...defaultModeConfig,
        parrotsData: parrotsData.filter(parrot => parrot.name === 'skiing'),
        speed: {
          min: 1,
          max: 5
        },
        parrotsAmount: 70,
        skiingMode: 'yes',
        slalomLength: {
          min: 2,
          max: 30
        }
      },
      snowing: {
        ...defaultModeConfig,
        parrotsAmount: 150,
        skiingMode: 'no',
        speed: {
          min: 1,
          max: 5
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
        parrotsData: parrotsData.filter(parrot => parrot.name === 'cop' || parrot.name === 'spy'),
      }
    }
  }
;
