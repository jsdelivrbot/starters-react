import fs from 'fs';
import yaml from 'js-yaml';

export const loadYaml = (path) => yaml.load(fs.readFileSync(path));