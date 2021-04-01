const express = require("express");
const { Stack } = require("./stack");
const app = express();
const port = 3000;

const stack = new Stack();

app.get("/", (req, res) => {
  res.send(stack.pop());
});

app.get("/peek", (req, res) => {
  res.send(stack.peek());
});

app.post("/:value", (req, res) => {
  stack.push(req.params.value);
  res.send(req.params.value);
});

app.put("/revert", (req, res) => {
  stack.revert();
  res.send('Stack was reverted');
});

app.put("/:value", (req, res) => {
  stack.push(req.params.value);
  res.send(req.params.value);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
