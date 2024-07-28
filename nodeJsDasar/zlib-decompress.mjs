import zlib from "zlib";

import fs from "fs";

// file yg akan di decompress
const source = fs.readFileSync("zlib-compress.mjs.txt");
console.log("di compress");
// ketika di compress
console.info(source.toString());

const result = zlib.unzipSync(source);
console.log("di decompress");
// ketika di decompress
console.info(result.toString());
