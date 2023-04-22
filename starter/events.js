const eventEmitter = require("events");
const http = require("http");

const { EventEmitter } = require("stream");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name : Deep");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there is ${stock} items left only`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  console.log(req.url);
  res.end("Request recieved");
});

server.on("request", (req, res) => {
  console.log("Another Request");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for the Request...");
});
