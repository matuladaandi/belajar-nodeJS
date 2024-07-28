function samplePromosi() {
  return Promise.resolve("andi");
}

// error kalau hanya seperti ini
// const name = await samplePromosi();
// console.log(name);

async function run() {
  const name = await samplePromosi();
  console.log(name);
}

run();
