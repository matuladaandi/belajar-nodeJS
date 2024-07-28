import fs from "fs";

const write = fs.createWriteStream("target.log");

write.write("andi");
write.write(" matulada");
write.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.info(data.toString());
});
