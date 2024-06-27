const { spawn } = require('child_process');

const ls = spawn('start chrome');

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data.toString()}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
