const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const names_db = [];

app.get("/users", (req, res) => {
  console.log(req.query);
  const result = 1;
  if (!req.query.age && !req.query.name && !req.query.address) {
    res.send(names_db);
  } else {
    const result = names_db.filter(
      (user) => user.name == req.query.name || user.age == req.query.age || user.address == req.query.address
    );
    res.send(result);
  }
});

app.post("/register", (req, res) => {
  names_db.push(req.body);
  console.log(req.body);
  res.send(req.body);
});
app.listen(3000, console.log("Listening on port 3000"));
