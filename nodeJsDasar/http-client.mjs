import https from "https";

const endpoint = "https://api.github.com/users/matuladaandi";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "andi",
  lastName: "matulad",
});

request.write(body);
request.end();

