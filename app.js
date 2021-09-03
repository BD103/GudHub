const express = require("express");
const pug = require("pug");
const app = express();
const port = 8000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", async (_, res) => {
  console.log("[DEBUG] Index");
  res.render("index");
});

app.listen(port, () => {
  console.log("Server is running")
});
