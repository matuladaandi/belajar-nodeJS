import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

setInterval(() => {
  client.write(`andi from client\r\n`);
}, 2000);

