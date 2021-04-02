const express = require("express");
const { Stack } = require("./stack");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const stack = new Stack();

app.get("/", (req, res) => {
  res.send(stack.pop());
});

app.get("/peek", (req, res) => {
  res.send(stack.peek());
});

app.post("/", (req, res) => {
  stack.push(req.body.value);
  res.send(req.body.value);
});

app.put("/revert", (req, res) => {
  stack.revert();
  res.send('Stack was reverted');
});

app.put("/", (req, res) => {
  stack.push(req.body.value);
  res.send(req.body.value);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
