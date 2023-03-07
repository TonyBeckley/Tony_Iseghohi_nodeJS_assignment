import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}
//register listeners
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
//trigger the event
myEmitter.emit("event");
