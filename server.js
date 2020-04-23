const express = require("express");
const peopleRouter = require("./peopleRouter");
const server = express();

server.use(express.json());
server.use("/api/people", peopleRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "this is the last project so make it good" });
});

module.exports = server;
