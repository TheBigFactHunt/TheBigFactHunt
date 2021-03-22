const express = require("express");
const userRouter = require('./routes/user');
const cors = require("cors");
require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ status: "working" }));
  res.end;
});

app.listen(PORT, () => {
  console.log(` online at ${PORT} `);
});