// load-config.ts
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import toml from 'toml';

dotenv.config(); // Load variables from .env into process.env

const configPath = path.resolve(process.cwd(), 'config.toml');
let raw = fs.readFileSync(configPath, 'utf8');

// Replace ${ENV_VAR} with the corresponding environment variable
raw = raw.replace(/\$\{([A-Z0-9_]+)\}/gi, (_, key) => process.env[key] || '');

const config = toml.parse(raw);

export default config;
