const tty = require("node:tty");

console.log(process.stdout.hasColors());
// Returns true or false depending on if `stdout` supports at least 16 colors.
console.log(process.stdout.hasColors(256))
// Returns true or false depending on if `stdout` supports at least 256 colors.
console.log(process.stdout.hasColors({ TMUX: '1' }))
// Returns true.
console.log(process.stdout.hasColors(2 ** 24, { TMUX: '1' }));
// Returns false (the environment setting pretends to support 2 ** 8 colors).