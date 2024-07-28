const buffer = Buffer.from("andi matu","utf8")

console.log(buffer.toString());

// conver ke hex
console.log(buffer.toString("hex"));

// conver ke base64
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from("YW5kaSBtYXR1", "base64")
console.log(bufferBase64.toString("utf8"));