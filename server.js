const { spawn } = require('child_process');

const port = process.env.PORT || 3000;

const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(cmd, ['next', 'start', '-p', String(port)], { stdio: 'inherit' });

child.on('close', (code) => process.exit(code));
