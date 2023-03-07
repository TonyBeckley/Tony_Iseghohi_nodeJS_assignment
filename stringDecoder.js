const { StringDecoder } = require("node:string_decoder");
const decoder = new StringDecoder("utf8");

decoder.write(Buffer.from([0xe2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xac]))+ " The euro sign");