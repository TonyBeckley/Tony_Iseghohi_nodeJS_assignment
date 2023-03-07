const path = require("node:path");

console.log(process.env.PATH.split(path.delimiter));
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']