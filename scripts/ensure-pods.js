const { existsSync } = require('node:fs');
const { execSync } = require('node:child_process');
const path = require('node:path');

const iosDir = path.join(__dirname, '..', 'apps', 'mobile', 'ios');
const podsDir = path.join(iosDir, 'Pods');

if (existsSync(podsDir)) {
  console.log('Pods already installed, skipping.');
  process.exit(0);
}

console.log('Pods not found, running pod install...');
execSync('bundle install && bundle exec pod install', {
  cwd: iosDir,
  stdio: 'inherit',
});
