const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ status: "working" }));
  res.end;
});

app.listen(5000, () => {
  console.log("online");
});
