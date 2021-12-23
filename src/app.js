// import express from "express";
// const app = express();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});

// export default app;
module.exports = app;
