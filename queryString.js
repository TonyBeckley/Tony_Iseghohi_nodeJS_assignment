const querystring = require("node:querystring");

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// Returns 'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'));
// Returns 'foo:bar;baz:qux'