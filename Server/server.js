// import express from "express";
// import { startWSServer } from "./ws";
// const app = express();

// app.use(express.json);
// const port = 8080;

// app.listen(port, () => {
//   console.log("server listening on port", port);
//   startWSServer();
// });

import express from "express";
// import { startWSServer } from "./ws";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // startWSServer();
});
