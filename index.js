import _readCupsConfig from './src/readCupsConfig.js';

export default async function readCupsConfig (showDefaults) {
  return await _readCupsConfig(showDefaults);
}
