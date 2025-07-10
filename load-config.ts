import fs from 'fs';
import path from 'path';
import toml from '@iarna/toml';

const configPath = path.resolve(process.cwd(), 'config.toml');

// Read the TOML file
let raw = fs.readFileSync(configPath, 'utf8');

// Replace env variables like ${OPENAI_API_KEY} with actual values
raw = raw.replace(/\$\{([A-Z0-9_]+)\}/gi, (_, key) => {
  const value = process.env[key];
  if (!value) {
    console.warn(`⚠️ Missing environment variable: ${key}`);
  }
  return value || '';
});

// Parse TOML to JS object
const config = toml.parse(raw);

export default config;
