const http = require("http");

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.on("listening", () => {
  console.log("Listening on port 3000...");
});

server.on("connection", () => {
    console.log("Connection on port 3000...");
  });

server.listen(3000);
