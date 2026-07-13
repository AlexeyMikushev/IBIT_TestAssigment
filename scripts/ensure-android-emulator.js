const { execSync, spawn } = require('node:child_process');

function androidHome() {
  return (
    process.env.ANDROID_HOME ||
    process.env.ANDROID_SDK_ROOT ||
    `${process.env.HOME}/Library/Android/sdk`
  );
}

function adb(args) {
  return execSync(`"${androidHome()}/platform-tools/adb" ${args}`, {
    encoding: 'utf8',
  });
}

function hasReadyDevice() {
  const lines = adb('devices').split('\n').slice(1);
  return lines.some((line) => line.trim().endsWith('\tdevice'));
}

function waitForBoot(timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const boot = adb('shell getprop sys.boot_completed').trim();
    if (boot === '1') return true;
    execSync('sleep 2');
  }
  return false;
}

if (hasReadyDevice()) {
  console.log('Android device/emulator already running.');
  process.exit(0);
}

let avds;
try {
  avds = execSync(`"${androidHome()}/emulator/emulator" -list-avds`, {
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .filter(Boolean);
} catch {
  avds = [];
}

if (avds.length === 0) {
  console.error(
    'No Android emulator running and no AVD found. Start one manually (Android Studio > Device Manager) or connect a device, then re-run.'
  );
  process.exit(1);
}

const avd = avds[0];
console.log(`No device found, starting emulator: ${avd}`);

const child = spawn(
  `${androidHome()}/emulator/emulator`,
  ['-avd', avd, '-no-snapshot-load'],
  { detached: true, stdio: 'ignore' }
);
child.unref();

adb('wait-for-device');

if (!waitForBoot(120000)) {
  console.error('Timed out waiting for the emulator to boot.');
  process.exit(1);
}

console.log('Emulator booted.');
