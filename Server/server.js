import express from "express";
import http from "http";
// import { clearInterval } from "timers";
import { WebSocketServer } from "ws";
import cors from "cors";
import { generateLobbyCode, lobbyCodes, triviaQuestions } from "./apidata.js";

const app = express();
app.use(cors());
// Create http server, pass Express app as listener
const server = http.createServer(app);
// Create wsserver and attach to shared HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client Connected");
  console.log(triviaQuestions.easy);

  ws.on("message", (data) => {
    console.log(data);
    ws.send("hi from server");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

app.get("/api/trivia-data", (req, res) => {
  res.json(triviaQuestions);
});

app.get("/api/trivia-data/:category", (req, res) => {
  const category = req.params.category;
  res.json(triviaQuestions[category]);
});

app.get("/api/create-lobby", (req, res) => {
  let lobbyCode = generateLobbyCode();
  // lobbyCodes.forEach((code) => {
  //   if (lobbyCode == code) {
  //     lobbyCode = generateLobbyCode();
  //   } else {
  //     console.log(lobbyCode);
  //     lobbyCodes.push(lobbyCode);
  //     res.json(lobbyCode);
  //   }
  // });
  res.json(lobbyCode);
});
