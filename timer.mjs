import { setTimeout } from "timers/promises";

const res = await setTimeout(500, "result");

console.log(res);
