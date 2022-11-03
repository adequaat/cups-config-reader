import { readFile } from 'node:fs/promises';
import cupsDefaults from './cups-defaults.js';
import sanitize from './sanitize.js';
import parse from './parse.js';

export default async function readCupsConfig (showDefaults = true) {
  const [ config, filesConfig ] = await Promise.all([
    readFile('/etc/cups/cupsd.conf', 'utf8')
      .then(sanitize)
      .then(parse)
      .then(ob =>
        showDefaults ? Object.assign({}, cupsDefaults, ob) : ob
      )
      .catch(err => {
        console.error(err);
        return {};
      }),
    
    readFile('/etc/cups/cups-files.conf', 'utf8')
      .then(sanitize)
      .then(parse)
      .catch(err => {
        console.error(err);
        return {};
      })
  ]);

  return { config, filesConfig };
}