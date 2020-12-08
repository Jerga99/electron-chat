const spawn = require('child_process').spawn;

const child = spawn('watch');
child.stdout.on('data', function (data) {
  process.stdout.write(data);
  const child = spawn('start');
});
child.stderr.on('data', function (data) {
    process.stderr.write(data);
});
