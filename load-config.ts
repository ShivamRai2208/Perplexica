import fs from 'fs';
import path from 'path';
import toml from 'toml';

const configPath = path.resolve(process.cwd(), 'config.toml');

// Read and replace env vars in config.toml
let raw = fs.readFileSync(configPath, 'utf8');
raw = raw.replace(/\$\{([A-Z0-9_]+)\}/gi, (_, key) => {
  const value = process.env[key];
  if (!value) console.warn(`⚠️ Missing environment variable: ${key}`);
  return value || '';
});
