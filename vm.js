// This script increments a global variable, sets the value of another global variable, then execute the code multiple times. The globals are contained in the context object
const vm = require("node:vm");

//declare an object called context
const context = {
  animal: "cat",
  count: 2,
};

const script = new vm.Script('count += 1; name = "kitty";');

vm.createContext(context);
for (let i = 0; i < 10; ++i) {
  script.runInContext(context);
}

console.log(context);
