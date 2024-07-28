import util from "util";

const name = "andi";

const firtsName = "muh";
const lastName = "matulada";

console.log(`Hello ${name}`);

console.log(util.format("Hello %s", name));

console.log(util.format("Hi! %s %s", firtsName, lastName));

const person = {
  name: "budy",
  age: 24,
};

console.log(`Person : ${JSON.stringify(person)}`);

// use util
console.log(util.format(" Person : %j", person));
