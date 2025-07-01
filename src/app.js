const express = require("express");

const app = express();

app.get("/app", (req, res) => {
  throw new Error("deepak");
  res.send("deepaksingh");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log(`Server is listen on ${7777}`);
});
