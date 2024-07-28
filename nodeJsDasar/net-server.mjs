import net from "net";

// membuat server
const server = net.createServer((client) => {
  console.info("Client connected");

  client.addListener("data", (data) => {
    console.info(`Receive data this server write ${data.toString()}`);
    // membalas client
    client.write(`Hello ${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost");
