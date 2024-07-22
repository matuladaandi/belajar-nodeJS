function samplePromosi() {
  return Promise.resolve("andi");
}

const name = await samplePromosi();
console.log(name);
