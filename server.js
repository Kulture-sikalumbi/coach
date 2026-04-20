const { spawn } = require('child_process');
const { existsSync } = require('fs');

const port = process.env.PORT || 3000;

let cmd, args;
if (existsSync('.next/standalone/server.js')) {
	// Run the standalone server produced by Next.js
	cmd = process.platform === 'win32' ? 'node.exe' : 'node';
	args = ['.next/standalone/server.js'];
} else {
	// Fallback to `next start` via npx
	cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
	args = ['next', 'start', '-p', String(port)];
}

const child = spawn(cmd, args, { stdio: 'inherit', env: { ...process.env, PORT: String(port) } });

child.on('close', (code) => process.exit(code));
