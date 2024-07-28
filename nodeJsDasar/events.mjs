import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("nameEvenHel", (name) => {
  console.log(`Hello ${name}`);
});

emitter.emit("nameEvenHel", "andi");
