import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa Namu Brow ! = ", (name) => {
  console.log(`Hallo ${name}`);
  input.close();
});
