const express = require("express");
const userRouter = require('./routes/user');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);


app.get("/", (req, res) => {
  res.status(200).json({status:"working"});
});

app.listen(PORT, () => {
  console.log(` online at ${PORT} `);
});