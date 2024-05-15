import type { CLIConfiguration } from '@uniformdev/cli';

const config: CLIConfiguration = {
  serialization: {
    directory: './uniform-data/data.json',
    entitiesConfig: {
      composition: {},
      component: {},
      projectMapDefinition: {},
      projectMapNode: {},
    }
  }
};

module.exports = config;