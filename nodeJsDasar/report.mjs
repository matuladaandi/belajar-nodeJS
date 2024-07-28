import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "reportNya.json";

function sampleError() {
  throw new Error("ups error");
}

sampleError();
