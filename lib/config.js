import fs from 'fs';
import defaultMapping from './defaultMapping.js';

const defaultConfig = {
  mappings: defaultMapping
};

export function loadConfig(configFilePath) {
  try {
    const fileData = fs.readFileSync(configFilePath, 'utf8');
    const userConfig = JSON.parse(fileData);
    return {
      mappings: {
        ...defaultConfig.mappings,
        ...userConfig.mappings
      }
    };
  } catch (err) {
    console.error(`Could not load config from ${configFilePath}. Using default config. (${err.message})`);
    return defaultConfig;
  }
}
