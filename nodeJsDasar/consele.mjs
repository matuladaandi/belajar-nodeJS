import fs from "fs";
import console, { Console } from "console";

const file = fs.createWriteStream("apps.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello Word"); 
log.error("tes");
