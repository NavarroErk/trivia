import express from "express";
import http from "http";
// import { clearInterval } from "timers";
import { WebSocketServer } from "ws";

const app = express();
// Create http server, pass Express app as listener
const server = http.createServer(app);
// Create wsserver and attach to shared HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client Connected");

  ws.on("message", (data) => {
    console.log(data);
    ws.send("hi from server");
  });

  // let count = 0;

  // let interval = setInterval(() => {
  //   ws.send(++count);
  // }, 10);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, 10000);
});

server.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
//   // startWSServer();
// });
