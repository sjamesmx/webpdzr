const { exec } = require('child_process');
const path = require('path');

console.log('Starting Padelyzer development server...');

const server = exec('npm run dev -- -p 5000', {
  cwd: path.resolve(__dirname),
  env: { ...process.env }
});

server.stdout.on('data', (data) => {
  console.log(data.toString());
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Keep the process alive
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.kill();
  process.exit();
});