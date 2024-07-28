import process, { exitCode } from "process";

process.addListener("exit",(exitCode)=>{
    console.log(`NodeJS exit with code ${exitCode}`);
})

console.log(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

// exit
process.exit(1)

// tidak keluar
console.log("tes");