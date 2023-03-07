const { Transform } = require("node:stream");

class MyTransform extends Transform {
  constructor(options) {
    super(options);   
  }
}
console.log(MyTransform)
